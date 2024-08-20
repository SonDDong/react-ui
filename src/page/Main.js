import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="">
      <h1 className="text-lg">🚧 Main Page</h1>
      <div className="m-4 p-4 border-2 rounded-md">
        <Link
          className="size-fit rounded-full bg-slate-500 text-white p-2 px-4 hover:bg-slate-700 active:bg-slate-900"
          to={'/toast'}
        >
          👉 Toast 테스트 페이지
        </Link>
      </div>
    </div>
  );
};

export default Main;
