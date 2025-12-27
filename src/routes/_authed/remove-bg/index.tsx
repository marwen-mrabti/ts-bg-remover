import { Button } from '@/components/_ui/button';
import { Spinner } from '@/components/_ui/spinner';
import { checkTrialQueryOptions } from '@/lib/query-options';
import { seo } from '@/lib/seo';
import { checkTrial } from '@/server/remove-bg.actions';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authed/remove-bg/')({
  head: () => {
    return {
      meta: seo({
        title: 'Remove Background - BG_Remover',
      }),
    };
  },

  loader: async () => {
    const trialStatus = await checkTrial()
    return { trialStatus }
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { data: trialStatus, isLoading } = useQuery(checkTrialQueryOptions())

  if (isLoading) {
    return (
      <div className='flex gap-4 items-start justify-center h-full w-full mx-auto -bg-linear-60 from-background to-secondary via-40% py-4'>
        <div className='flex gap-2 items-center'>
          <h1 className='text-foreground font-semibold text-xl px-4 py-2'>
            Loading
          </h1>
          <Spinner className='size-6' />
        </div>
      </div>
    );
  }

  if (trialStatus && trialStatus.hasUsed) {
    return (
      <div className='flex flex-col gap-4 items-center h-full w-full mx-auto -bg-linear-60 from-background to-secondary via-40% py-4'>
        <h1 className='text-destructive-foreground bg-destructive font-semibold text-xl px-4 py-2'>
          Trial Limit Reached
        </h1>
        <p className='text-destructive-foreground font-semibold text-lg'>
          Please upgrade to a paid plan to continue using the service.
        </p>
        <Button className='bg-primary text-primary-foreground font-semibold text-lg'>
          Upgrade Now
        </Button>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 items-center h-full w-full mx-auto -bg-linear-60 from-background to-secondary via-40% py-4'>
      <h1 className='text-foreground font-semibold text-lg'>
        <span className='font-bold uppercase -bg-linear-30 from-primary-foreground to-secondary-foreground text-primary-foreground'>
          Upload
        </span>{' '}
        your Image and{' '}
        <span className='font-bold uppercase bg-linear-30 from-primary-foreground to-secondary-foreground text-primary-foreground'>
          remove
        </span>{' '}
        its background.
      </h1>

      <div className='border border-red-500'></div>
    </div>
  );
}
