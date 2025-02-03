import Line from "@/ui/common/textNLine/line";
import SignupForm from "@/ui/signup/signupForm";

const SignupInfoPage = () => {
  return (
    <div className="w-full">
      <p className="text-4xl">필수</p>
      <Line />
      <SignupForm />
    </div>
  );
};

export default SignupInfoPage;
