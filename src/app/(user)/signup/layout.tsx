import HeaderNumber from "@/ui/signup/headerNumber";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-screen flex-col overflow-hidden bg-cblack-100 center-position">
      <div className="relative flex h-fit w-[660px] flex-col items-center px-10 text-cwhite">
        <header className="flex w-full flex-row justify-between text-[56px]">
          <HeaderNumber />
          <p className="relative right-40">회원가입</p>
        </header>
        {children}
      </div>
    </main>
  );
};

export default layout;
