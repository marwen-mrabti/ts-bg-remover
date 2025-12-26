import { seo } from '@/lib/seo';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/remove-bg/')({
   head: () => {
    return {
      meta: seo({
        title: 'Remove Background - BG_Remover',
      }),
    };
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_authed/remove-bg/"!</div>
}
