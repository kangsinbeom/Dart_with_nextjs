import useCustomRouter from "@/hooks/useCostomRouter";
import Image from "next/image";
import PostArrowIcon from "@/ui/icon/postArrow";

const PostButton = () => {
  const router = useCustomRouter();
  return (
    <div
      className="relative flex h-24 w-24 center-position hover:cursor-pointer"
      onClick={() => router.push("/post")}
    >
      <Image src="/images/postButton.png" alt="post-button" fill />
      <PostArrowIcon />
    </div>
  );
};

export default PostButton;
