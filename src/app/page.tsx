'use client';

import React, { useEffect } from 'react';
import styles from './page.module.css';
import HeroSection from '@/shared/components/organisms/hero-section';
import SearchField from '@/shared/components/molecules/search-field';
import CardArea from '@/shared/components/organisms/card-area';
import { useTestsQuery } from '@/shared/services/moco-api/tests-query';
import { useTestStore } from '@/shared/store/useTestStore';

export default function Home() {
  const { data, isLoading, error } = useTestsQuery();
  const setTests = useTestStore((state) => state.setTests);

  useEffect(() => {
    if (data) {
      setTests(data);
    }
  }, [data, setTests]);

  if (isLoading) return <div />;
  if (error) return <div />;

  return (
    <main className={styles.main}>
      <HeroSection />
      <SearchField />
      <CardArea />
    </main>
  );
}
