import React from "react";
import styles from "./index.module.css";

interface FlexBoxProps {
  children: React.ReactNode;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around";
  alignItems?: "center" | "flex-start" | "flex-end" | "stretch";
  flexWrap?: "wrap" | "nowrap";
  width?: string;
  height?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
}

const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  width,
  height,
  padding,
  backgroundColor,
  borderRadius,
}) => {
  return (
    <div
      className={styles.flex_box}
      style={{
        display: "flex",
        flexDirection,
        justifyContent,
        alignItems,
        flexWrap,
        width,
        height,
        padding,
        backgroundColor,
        borderRadius,
      }}
    >
      {children}
    </div>
  );
};

export default FlexBox;
