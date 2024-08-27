import { createContext, useContext, useEffect, useState } from 'react';
import { randomId } from './RandomID';

const ToastContext = createContext({});

const ToastMessage = ({ data, onClose }) => {
  const [show, setShow] = useState(false);
  const [translate, setTranslate] = useState(false);

  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setTranslate(true);
    }, 4800);
    setTimeout(() => {
      onClose(data.id);
    }, 5000);
  }, []);

  const handleClose = () => {
    setTranslate(true);
    setTimeout(() => {
      onClose(data.id);
    }, 1000);
  };

  return (
    <div
      className={`max-w-sm pt-2 z-10 rounded-md mt-4 mr-4 bg-white border-[1px] shadow-lg overflow-hidden
      transition duration-1000 ${show ? 'opacity-100' : 'opacity-0'}
      ${translate ? 'translate-x-[100vw]' : ''}`}
    >
      <div className="flex w-full justify-end px-2">
        <button
          className="w-4 h-4 text-slate-700 hover:text-teal-500 active:bg-teal-50 rounded-full flex items-center justify-center"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="pb-4 px-8 text-slate-700 text-sm font-semibold">
        {data.message}
      </div>
      <div
        className={`h-2 w-full z-10 bg-gradient-to-r from-teal-300 via-yellow-300 to-fuchsia-300 rounded-full animate-pulse
      transition duration-[5000ms] ease-linear ${
        show ? 'translate-x-full' : 'transition-none'
      }`}
      />
    </div>
  );
};

const ToastProvider = ({ children }) => {
  const setToast = (message) => {
    setValue((prev) => {
      prev.toasts.push({ id: randomId(), message: message });
      return { ...prev };
    });
  };

  const removeToast = (id) => {
    setValue((prev) => {
      prev.toasts = prev.toasts.filter((t) => t.id !== id);
      return { ...prev };
    });
  };

  const [value, setValue] = useState({
    toasts: [],
    setToast: setToast,
  });

  return (
    <ToastContext.Provider value={value}>
      {children}
      {value.toasts?.length > 0 && (
        <div className="absolute top-0 right-0 z-10 transition-height duration-1000 ease-in-out h-fit overflow-hidden">
          {value.toasts.map((toast) => (
            <ToastMessage key={toast.id} data={toast} onClose={removeToast} />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
};

const useToast = () => {
  const { setToast } = useContext(ToastContext);
  return setToast;
};

export { ToastProvider, ToastContext, useToast };
