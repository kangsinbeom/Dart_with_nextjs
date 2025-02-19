import useCustomRouter from "@/hooks/useCostomRouter";
import { MouseEvent } from "react";

interface BackButtonProps {
  label: string;
  styles: string;
}

const BackButton = ({ label, styles }: BackButtonProps) => {
  const router = useCustomRouter();
  const onClickButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.back();
  };
  return (
    <button className={styles} onClick={onClickButton}>
      {label}
    </button>
  );
};

export default BackButton;
