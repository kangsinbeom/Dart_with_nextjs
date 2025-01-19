const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <header>No Root Navbar</header>
      {children}
    </main>
  );
};

export default layout;
