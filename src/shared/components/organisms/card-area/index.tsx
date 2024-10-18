import React from 'react';
import styles from './index.module.css';
import { useTestStore } from '@/shared/store/useTestStore';
import { QuizCard } from '../quiz-card';

const CardArea: React.FC = () => {
  const tests = useTestStore((state) => state.tests);

  // const supabaseUrl = 'https://aqnmhrbebgwoziqtyyns.supabase.co/storage/v1/object/public/';
  // const imageUrl = tests.img_url ? `${supabaseUrl}${tests.img_url}` : '/assets/images/empty-image.png';

  return (
    <section className={styles.card_area}>
      {tests.map((test) => (
        <QuizCard
          key={test.id}
          title={test.title}
          sub_title={test.sub_title}
          description={test.description}
          category={test.category}
          created_at={test.created_at}
          views={test.views}
          image={`${'https://aqnmhrbebgwoziqtyyns.supabase.co/storage/v1/object/public/' + test.img_url}`}
        />
      ))}
    </section>
  );
};

export default CardArea;
