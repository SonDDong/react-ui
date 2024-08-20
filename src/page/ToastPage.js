import { useContext } from 'react';
import { ToastContext } from '../component/Toast';

const ToastPage = () => {
  const { setToast } = useContext(ToastContext);

  return (
    <div className="w-screen h-screen bg-slate-100">
      <div className="">🚧 Main Page 입니다.</div>
      <button onClick={() => setToast('Toast 메시지를 테스트합니다.')}>
        Toast 팝업 테스트
      </button>
    </div>
  );
};

export default ToastPage;
