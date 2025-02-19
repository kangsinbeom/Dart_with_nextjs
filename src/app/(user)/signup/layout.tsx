import HeaderNumber from "@/ui/signup/headerNumber";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex-col overflow-hidden bg-cblack-100 center-position">
      <div className="relative flex h-fit w-screen flex-col items-center gap-14 px-10 text-cwhite">
        <header className="relative flex w-full max-w-[610px] flex-row justify-center text-[56px]">
          <HeaderNumber />
          <p className="">회원가입</p>
        </header>
        {children}
      </div>
    </main>
  );
};

export default layout;
