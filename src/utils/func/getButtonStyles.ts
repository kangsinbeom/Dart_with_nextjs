const getButtonBaseStyles = (style: string) => {
  switch (style) {
    case "rounded":
      return "w-full rounded-3xl border border-black py-2 text-xs";
    case "circle":
      return "h-14 w-14 rounded-full border border-cblack-900";
  }
  return;
};

export default getButtonBaseStyles;
