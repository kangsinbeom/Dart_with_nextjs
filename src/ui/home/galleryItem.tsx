import Image from "next/image";

const GalleryItem = () => {
  return (
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
  );
};

export default GalleryItem;
