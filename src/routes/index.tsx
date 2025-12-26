import { seo } from '@/lib/seo';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  head: () => {
    return {
      meta: seo({
        title: 'Home - BG_Remover',
      }),
    };
  },
  component: App,
});

function App() {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-4 p-4'>
      <h2 className='text-primary text-2xl uppercase'>
        Upload your image and remove background
      </h2>
    </div>
  );
}
