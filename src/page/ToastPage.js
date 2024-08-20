import { useContext } from 'react';
import { ToastContext } from '../component/Toast';

const ToastPage = () => {
  const { setToast } = useContext(ToastContext);

  return (
    <div className="">
      <h1 className="text-lg">🚧 Toast Page 입니다.</h1>
      <div className="m-4 p-4 border-2 rounded-md">
        <button
          className="size-fit rounded-full bg-slate-500 text-white p-2 px-4 hover:bg-slate-700 active:bg-slate-900"
          onClick={() => setToast('Toast 메시지를 테스트합니다.')}
        >
          Toast 팝업 테스트
        </button>
      </div>
    </div>
  );
};

export default ToastPage;
