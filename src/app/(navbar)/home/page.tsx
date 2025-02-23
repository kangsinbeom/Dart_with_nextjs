import Sibebar from "@/ui/home/sibebar";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="flex">
      <Sibebar />
      <div className="">
        <Image
          src="/images/test.jpg"
          alt="gallery-thumbnail"
          width={240}
          height={240}
          className="border-6 border-black"
        />
        <p className="text-xs text-cgray-400">2024.05.24 ~ 2024.05.30</p>
        <p>전시 제목</p>
      </div>
    </div>
  );
};

export default HomePage;
