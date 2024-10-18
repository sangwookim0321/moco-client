import { useQuery } from '@tanstack/react-query';
import { getTests } from '@/shared/services/moco-api/tests-api';

export function useTestsQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tests', 1],
    queryFn: () => getTests({ page: 1, limit: 10 }),
  });

  return { data: data?.data, isLoading, error };
}
