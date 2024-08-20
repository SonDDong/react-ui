import { useContext, useState } from 'react';
import { ToastContext, useToast } from '../component/Toast';

const ToastPage = () => {
  const toast = useToast();
  const [message, setMessage] = useState('Toast 메시지를 테스트합니다.');

  return (
    <div className="">
      <h1 className="text-lg">🚧 Toast Page 입니다.</h1>
      <div className="m-4 p-4 border-2 rounded-md flex flex-col space-y-4">
        <input
          className="rounded-md p-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          defaultValue={'Toast 메시지를 테스트합니다.'}
        />
        <button
          className="size-fit rounded-full bg-slate-500 text-white p-2 px-4 hover:bg-slate-700 active:bg-slate-900"
          onClick={() => toast(message)}
        >
          Toast 팝업 테스트
        </button>
      </div>
    </div>
  );
};

export default ToastPage;
