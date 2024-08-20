import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-slate-100">
      <Header />
      <div className="fixed top-16 w-screen h-full p-4">{children}</div>
    </div>
  );
};

export default Layout;
