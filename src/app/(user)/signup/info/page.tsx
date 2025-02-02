import ModalPortal from "@/context/modalPortal";
import Line from "@/ui/common/textNLine/line";
import SignupInputModal from "@/ui/modal/signupInputModal";
import SignupForm from "@/ui/signup/signupForm";

const SignupInfoPage = () => {
  return (
    <div className="w-full">
      <p className="text-4xl">필수</p>
      <Line />
      <SignupForm />
      <ModalPortal>
        <SignupInputModal />
      </ModalPortal>
    </div>
  );
};

export default SignupInfoPage;
