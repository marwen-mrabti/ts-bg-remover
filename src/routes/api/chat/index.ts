import { authMiddleware } from '@/middleware/auth-middleware';
import { chat, createChatOptions, maxIterations, toServerSentEventsStream } from '@tanstack/ai';
import { geminiText } from '@tanstack/ai-gemini';
import { createFileRoute } from '@tanstack/react-router';


const SYSTEM_PROMPT = `
You are a helpful assistant that can help the user.

Tools:

Example workflow:
`;

const todoAgent = createChatOptions({
  adapter: geminiText('gemini-2.5-flash'),
  agentLoopStrategy: maxIterations(5),
  systemPrompts: [SYSTEM_PROMPT],
  tools: [],
});

export const Route = createFileRoute('/api/chat/')({
  server: {
    middleware: [authMiddleware],
    handlers: ({ createHandlers }) =>
      createHandlers({
        POST: {
          middleware: [],
          handler: async ({ request }) => {
            const requestSignal = request.signal;

            // If request is already aborted, return early
            if (requestSignal.aborted) {
              return new Response(null, { status: 499 }); // 499 = Client Closed Request
            }
            const abortController = new AbortController();
            const body = await request.json();
            const { messages, data } = body;
            const conversationId: string | undefined = data?.conversationId;

            try {
              // Create a streaming chat response
              const stream = chat({
                ...todoAgent,
                conversationId,
                messages,
                abortController
              });

              const readableStream = toServerSentEventsStream(
                stream,
                abortController
              );

              // Convert stream to HTTP response
              return new Response(readableStream, {
                headers: {
                  'Content-Type': 'text/event-stream',
                  'Cache-Control': 'no-cache',
                  Connection: 'keep-alive',
                },
              });
            } catch (error: unknown) {
              console.error('\n🚩🚩 chat error 🚩🚩\n', error);
              if (
                (error instanceof Error && error.name === 'AbortError') ||
                abortController.signal.aborted
              ) {
                return new Response(null, { status: 499 }); // 499 = Client Closed Request
              }
              return new Response(
                JSON.stringify({
                  error:
                    error instanceof Error
                      ? error.message
                      : 'An error occurred',
                }),
                {
                  status: 500,
                  headers: { 'Content-Type': 'application/json' },
                }
              );
            }
          },
        },
      }),
  },
});
