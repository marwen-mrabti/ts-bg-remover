import { Button } from '@/components/_ui/button';
import { seo } from '@/lib/seo';
import { createFileRoute, Link } from '@tanstack/react-router';

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
      <h2 className='text-foreground text-xl'>
        🎴 Upload your image and remove background. 🎴
      </h2>
      <Button
        variant='default'
        render={<Link to='/remove-bg' />}
        nativeButton={false}
        className='font-semibold text-lg'
      >
        Get Started
      </Button>
    </div>
  );
}
