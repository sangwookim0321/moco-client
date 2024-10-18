import React from "react";

interface IconCloseProps {
  width?: string;
  height?: string;
  fill?: string;
}

const IconClose: React.FC<IconCloseProps> = ({
  width = "24",
  height = "24",
  fill = "#545454",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.2076 12L16.8526 8.35497C16.9754 8.2115 17.0396 8.02694 17.0324 7.83818C17.0251 7.64942 16.9468 7.47037 16.8132 7.3368C16.6797 7.20323 16.5006 7.12498 16.3119 7.11769C16.1231 7.1104 15.9385 7.1746 15.7951 7.29747L12.1501 10.905L8.48257 7.23747C8.3391 7.1146 8.15454 7.0504 7.96578 7.05769C7.77703 7.06498 7.59797 7.14323 7.4644 7.2768C7.33083 7.41037 7.25258 7.58942 7.24529 7.77818C7.238 7.96694 7.3022 8.1515 7.42507 8.29497L11.0851 12L7.50007 15.54C7.42156 15.6072 7.3578 15.6899 7.31278 15.783C7.26776 15.876 7.24246 15.9774 7.23847 16.0807C7.23448 16.184 7.25189 16.287 7.28959 16.3832C7.3273 16.4795 7.38449 16.5669 7.45759 16.64C7.53068 16.7131 7.61809 16.7702 7.71433 16.808C7.81057 16.8457 7.91357 16.8631 8.01686 16.8591C8.12015 16.8551 8.2215 16.8298 8.31455 16.7848C8.4076 16.7397 8.49034 16.676 8.55757 16.5975L12.1351 13.02L15.6901 16.575C15.8335 16.6978 16.0181 16.762 16.2069 16.7548C16.3956 16.7475 16.5747 16.6692 16.7082 16.5356C16.8418 16.4021 16.9201 16.223 16.9274 16.0343C16.9346 15.8455 16.8704 15.6609 16.7476 15.5175L13.2076 12Z"
        fill={fill}
      />
      <path
        d="M12 24C9.62663 24 7.30655 23.2962 5.33316 21.9776C3.35977 20.6591 1.8217 18.7849 0.913451 16.5922C0.00519937 14.3995 -0.232441 11.9867 0.230582 9.65892C0.693605 7.33115 1.83649 5.19296 3.51472 3.51472C5.19296 1.83649 7.33115 0.693605 9.65892 0.230582C11.9867 -0.232441 14.3995 0.00519937 16.5922 0.913451C18.7849 1.8217 20.6591 3.35977 21.9776 5.33316C23.2962 7.30655 24 9.62663 24 12C24 15.1826 22.7357 18.2349 20.4853 20.4853C18.2349 22.7357 15.1826 24 12 24ZM12 1.50001C9.9233 1.50001 7.89324 2.11582 6.16652 3.26958C4.4398 4.42333 3.09399 6.06321 2.29927 7.98183C1.50455 9.90046 1.29662 12.0117 1.70176 14.0485C2.10691 16.0853 3.10693 17.9562 4.57538 19.4246C6.04384 20.8931 7.91476 21.8931 9.95156 22.2983C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54452 19.4246 4.57538C17.4555 2.60625 14.7848 1.50001 12 1.50001Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconClose;
