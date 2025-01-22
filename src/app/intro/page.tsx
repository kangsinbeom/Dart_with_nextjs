import Image from "next/image";
import banner from "../../../public/images/banner.png";

const IntroPage = () => {
  return (
    <div>
      <div className="fixed">
        <Image src={banner} alt="banner" fill />
      </div>
      <div>hji</div>
    </div>
  );
};

export default IntroPage;
