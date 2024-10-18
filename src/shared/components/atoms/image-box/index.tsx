import React, { CSSProperties } from 'react';
import styles from './index.module.css';

interface ImageBoxProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  position?: CSSProperties['position'];
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  zIndex?: number;
  transform?: string;
  borderRadius?: string;
  objectFit?: CSSProperties['objectFit'];
}

const ImageBox = ({ src, alt, width, height, position, top, left, right, bottom, zIndex, transform, borderRadius, objectFit }: ImageBoxProps) => {
  return (
    <div
      style={{
        width,
        height,
        position,
        top,
        left,
        right,
        bottom,
        zIndex,
        transform,
      }}
      className={styles.image_container}
    >
      <img style={{ borderRadius, objectFit }} src={src} alt={alt} className={styles.image_box} />
    </div>
  );
};

export default ImageBox;
