import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="">
      <div className="">🚧 Main Page 입니다.</div>

      <Link to={'/toast'}>Toast 테스트 페이지</Link>
    </div>
  );
};

export default Main;
