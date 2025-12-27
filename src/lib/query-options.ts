import { checkTrial } from '@/server/remove-bg.actions';
import { queryOptions } from '@tanstack/react-query';

export const checkTrialQueryOptions = () =>
  queryOptions({
    queryKey: ['checkTrial'],
    queryFn: async () => await checkTrial(),
  });
