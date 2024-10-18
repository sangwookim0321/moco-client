'use client';
import React from 'react';
import styles from './index.module.css';
import FlexBox from '@/shared/components/atoms/flex-box';
import Button from '@/shared/components/atoms/button';
import ImageBox from '@/shared/components/atoms/image-box';
import Badge from '@/shared/components/atoms/badge';
import { useRecommendedTestQuery } from '@/shared/services/moco-api/tests-recommended-query';

const HeroSection: React.FC = () => {
  const { data, isLoading, error } = useRecommendedTestQuery();

  if (isLoading) return <div />;
  if (error) return <div />;

  const supabaseUrl = 'https://aqnmhrbebgwoziqtyyns.supabase.co/storage/v1/object/public/';
  const imageUrl = data?.img_url ? `${supabaseUrl}${data.img_url}` : '/assets/images/moco-dog-logo.png';

  return (
    <section className={styles.section}>
      <ImageBox
        src="/assets/images/moco-dog-logo.png"
        alt="MocoDogLogo"
        width="18.75rem"
        height="18.75rem"
        position={'absolute'}
        left={'50%'}
        bottom={'60%'}
        zIndex={2}
        transform={'translateX(-50%)'}
      />
      <div className={styles.content}>
        <FlexBox flexDirection={'row'} height={'20rem'} padding={'1.25rem'} backgroundColor={'#fdfdfd'} borderRadius={'0.325rem'}>
          <FlexBox justifyContent={'center'} alignItems={'center'} width={'100%'}>
            <ImageBox src={imageUrl} alt="HeroImage" width="300px" height="300px" borderRadius={'0.625rem'} objectFit={'cover'} />
          </FlexBox>
          <FlexBox flexDirection={'column'} alignItems={'center'} width={'100%'}>
            <div className={styles.hero_title}>
              <h1>{data?.title}</h1>
              <Badge category={data?.category}>{data?.category}</Badge>
            </div>
            <p className={styles.hero_description}>{data?.description}</p>
            <Button className={styles.play_button} onClick={() => {}} width={'50%'} height={'3.125rem'}>
              플레이
            </Button>
          </FlexBox>
        </FlexBox>
      </div>
    </section>
  );
};

export default HeroSection;
