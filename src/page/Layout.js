const Layout = ({ children }) => {
  return (
    <div className="w-screen h-scree">
      <div>HEADER</div>
      {children}
    </div>
  );
};

export default Layout;
