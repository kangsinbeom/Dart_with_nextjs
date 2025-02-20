import Line from "@/ui/common/textNLine/line";
import SignupForm from "@/ui/signup/signupForm";

const SignupInfoPage = () => {
  return (
    <div className="flex w-full flex-col gap-10">
      <div>
        <p className="text-4xl">필수</p>
        <Line />
      </div>
      <SignupForm />
    </div>
  );
};

export default SignupInfoPage;
