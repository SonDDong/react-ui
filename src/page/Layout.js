const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-100 p-4">
      <div>HEADER</div>
      {children}
    </div>
  );
};

export default Layout;
