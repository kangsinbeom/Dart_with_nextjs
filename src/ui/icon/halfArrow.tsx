import React from "react";

interface HarfArrowIconProps {
  styles?: string;
}

const HarfArrowIcon = ({ styles }: HarfArrowIconProps) => {
  return (
    <svg
      width="21"
      height="12"
      viewBox="0 0 21 12"
      fill="none"
      className={styles}
    >
      <path
        d="M1.13194 11.5C0.855795 11.5 0.631937 11.2761 0.631937 11C0.631937 10.7239 0.855795 10.5 1.13194 10.5V11.5ZM21 11.5H1.13194V10.5H21V11.5Z"
        fill="#E2E2E2"
      />
      <path
        d="M1.2554 11.4295C1.05457 11.619 0.77715 11.5804 0.635766 11.3432C0.494383 11.106 0.542575 10.76 0.743407 10.5705L1.2554 11.4295ZM11.8517 1.42949L1.2554 11.4295L0.743407 10.5705L11.3397 0.570505L11.8517 1.42949Z"
        fill="#E2E2E2"
      />
    </svg>
  );
};

export default HarfArrowIcon;
