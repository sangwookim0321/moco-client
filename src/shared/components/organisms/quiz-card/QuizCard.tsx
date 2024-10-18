import { FC } from 'react';
import Card from '../../molecules/card';
import ImageBox from '../../atoms/image-box';
import Badge from '../../atoms/badge';
import styles from './index.module.css';

interface QuizCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  width?: string;
  height?: string;
}

export const QuizCard: FC<QuizCardProps> = ({ title, description, category, image, width = '100%', height = '310px' }) => {
  return (
    <Card>
      <ImageBox src={image} alt={'Content'} width={width} height={height} objectFit={'cover'} />
      <div className={styles.info}>
        <div className={styles.title}>
          <h3>{title}</h3>
          <Badge category={category}>{category}</Badge>
        </div>
        <p>{description}</p>
      </div>
    </Card>
  );
};
