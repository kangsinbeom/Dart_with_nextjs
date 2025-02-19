import InputWithButton, {
  InputWithButtonProps,
} from "../common/input/inputWithButton";

export interface SignupInputModalProps
  extends Pick<InputWithButtonProps, "buttonLabel" | "label"> {
  onClickCloseButton: () => void;
  header: string;
}

const SignupInputModal = ({
  onClickCloseButton,
  header,
  ...props
}: SignupInputModalProps) => {
  const emailCheck = () => {
    alert("이메일 전송쓰으으으");
  };
  return (
    <section className="flex h-1/2 w-3/5 flex-col items-center justify-between border-4 border-cwhite bg-cblack-100 py-10 text-cwhite">
      <header className="text-3xl font-bold">{header}</header>
      <InputWithButton {...props} onClickButton={emailCheck} />
      <div>
        <button onClick={onClickCloseButton}>닫기</button>
      </div>
    </section>
  );
};

export default SignupInputModal;
