import { FC, useState } from 'react';
import Card from '../../molecules/card';
import ImageBox from '../../atoms/image-box';
import Badge from '../../atoms/badge';
import { Overlay } from '../../atoms/overlay';
import styles from './index.module.css';

interface QuizCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  sub_title: string;
  created_at: string;
  views: number;
  width?: string;
  height?: string;
}

export const QuizCard: FC<QuizCardProps> = ({ title, description, category, image, sub_title, created_at, views, width = '100%', height = '310px' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={styles.imageContainer}>
        <ImageBox src={image} alt={'Content'} width={width} height={height} objectFit={'cover'} />
        <Overlay sub_title={sub_title} description={description} created_at={created_at} views={views} isVisible={isHovered} />
      </div>
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
