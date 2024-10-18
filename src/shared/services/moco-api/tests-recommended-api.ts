import axiosInstance from '../axios-config';
import { RecommendedTestSchemaType } from '@/shared/types/tests-recommended-schema';

export async function getRecommendedTest(): Promise<RecommendedTestSchemaType> {
  try {
    const res = await axiosInstance({
      method: 'GET',
      url: '/moco-test/recommended',
    });

    return res.data as RecommendedTestSchemaType;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Failed to getRecommendedTest: ${err.message}`);
    } else {
      throw new Error('Failed to getRecommendedTest: An unknown error occurred');
    }
  }
}
