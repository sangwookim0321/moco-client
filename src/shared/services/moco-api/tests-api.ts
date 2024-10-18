import axiosInstance from '../axios-config';
import { TestsSchemaType, TestsQuerySchemaType } from '@/shared/types/tests-schema';

export async function getTests(query: TestsQuerySchemaType): Promise<TestsSchemaType> {
  try {
    const res = await axiosInstance({
      method: 'GET',
      url: `/moco-test?page=${query.page}&limit=${query.limit}`,
    });

    return res.data as TestsSchemaType;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(`Failed to getTests: ${err.message}`);
    } else {
      throw new Error('Failed to getTests: An unknown error occurred');
    }
  }
}
