import { LoginForm } from '@/components/auth/login-form';
import { seo } from '@/lib/seo';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth/login')({


  head: () => {
    return {
      meta: seo({
        title: 'Login - BG_Remover',
      }),
    };
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className='flex h-full w-full items-center justify-center'>
      <LoginForm />
    </div>
  );
}
