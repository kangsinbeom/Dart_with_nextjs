import React from "react";

const AllIcon = ({ isSelected }: { isSelected: boolean }) => {
  return (
    <svg width="21" height="10" viewBox="0 0 21 10" fill="none">
      <path
        d="M6.136 10L5.776 8.504H3.504L3.2 10H0.848L3.288 1.272L3.096 0.624H6.4L9.072 10H6.136ZM4.536 3.376L3.832 6.872H5.384L4.536 3.376ZM9.38756 10V0.624H12.0356V7.856H14.4196V10H9.38756ZM15.1532 10V0.624L17.8012 0.624V7.856H20.1852V10H15.1532Z"
        fill={isSelected ? "#000000" : "#cbcbcb"}
      />
    </svg>
  );
};

export default AllIcon;
