import { useQuery } from '@tanstack/react-query';
import { getRecommendedTest } from '@/shared/services/moco-api/tests-recommended-api';

export function useRecommendedTestQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tests-recommended', 1],
    queryFn: () => getRecommendedTest(),
  });

  return { data: data?.data, isLoading, error };
}
