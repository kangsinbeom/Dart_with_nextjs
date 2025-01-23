import LoginBox from "@/ui/login/loginBox";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="relative h-screen flex-col overflow-hidden bg-cblack-100 center-position">
      <Image
        src="/images/whyNot.png"
        alt="image2"
        width={900}
        height={200}
        style={{
          position: "absolute",
          transform: "translate(-35%, -120%)",
          minWidth: 900,
        }}
      />
      <Image
        src="/images/getIn.png"
        alt="image"
        width={900}
        height={200}
        style={{
          position: "absolute",
          transform: "translate(35%, 140%)",
          minWidth: 900,
        }}
      />
      <LoginBox />
    </div>
  );
};

export default LoginPage;
