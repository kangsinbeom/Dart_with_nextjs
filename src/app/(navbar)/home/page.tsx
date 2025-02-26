import GalleryItem from "@/ui/home/galleryItem";
import Sidebar from "@/ui/home/sidebar";

const HomePage = async () => {
  return (
    <div className="flex h-screen items-center">
      <Sidebar />
      {Array.from({ length: 6 })
        .fill(0)
        .map((value, index) => (
          <GalleryItem key={index} />
        ))}
    </div>
  );
};

export default HomePage;
