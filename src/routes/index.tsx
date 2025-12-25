import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-4 p-4'>
      <h2 className='text-primary text-2xl uppercase'>
        tanstack template with authentication and text chat using tanstack ai
      </h2>
    </div>
  );
}
