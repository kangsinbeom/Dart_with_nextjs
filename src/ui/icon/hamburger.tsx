import React from "react";

interface HamburgerIconProps {
  onClick: () => void;
}

const HamburgerIcon = ({ onClick }: HamburgerIconProps) => {
  return (
    <svg
      width="24"
      height="19"
      viewBox="0 0 24 19"
      fill="none"
      className="hover:cursor-pointer"
      onClick={onClick}
    >
      <rect width="24" height="3" rx="1.5" fill="black" />
      <rect y="8" width="24" height="3" rx="1.5" fill="black" />
      <rect y="16" width="24" height="3" rx="1.5" fill="black" />
    </svg>
  );
};

export default HamburgerIcon;
