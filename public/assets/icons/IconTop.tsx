import React from "react";

interface IconTopProps {
  width?: string;
  height?: string;
  fill?: string;
}

const IconTop: React.FC<IconTopProps> = ({
  width = "32",
  height = "19",
  fill = "#545454",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-7.05323e-07 16.1359L16 -6.99382e-07L32 16.1359L29.16 19L16 5.72824L2.84 19L-7.05323e-07 16.1359Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconTop;
