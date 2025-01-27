import KakaoIcon from "../icon/kakao";
import GoogleIcon from "../icon/google";

const SocialButtons = () => {
  return (
    <div className="relative mt-12 flex w-full flex-row items-center justify-between gap-5">
      <p className="text-2xl font-thin text-cwhite">다른 서비스로 로그인</p>
      <div className="h-[2px] flex-1 bg-cwhite" />
      <div className="flex gap-5">
        <KakaoIcon />
        <GoogleIcon />
      </div>
    </div>
  );
};

export default SocialButtons;
