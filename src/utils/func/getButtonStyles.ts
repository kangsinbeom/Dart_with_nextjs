export type ButtonBaseStyles = "rounded" | "circle" | "test";

const getButtonBaseStyles = (style: ButtonBaseStyles): string => {
  switch (style) {
    case "circle":
      return "h-14 w-14 rounded-full border border-black";
    case "rounded":
      return "w-full rounded-full border border-black py-2 text-xs";

    default:
      return "";
  }
};

export default getButtonBaseStyles;
