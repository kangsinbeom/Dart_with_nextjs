import { Navbar } from "@/ui/common/navbar/navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default layout;
