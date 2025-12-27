import { getCurrentUser } from '@/server/auth.queries';
import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async () => {
    const user = await getCurrentUser()
    if (user) {
      throw redirect({
        to: '/',
      });
    }
  },
});
