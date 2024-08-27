import { useState } from 'react';

const Tab = ({ children }) => {
  return <div className="ps-2">{children}</div>;
};

const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      {children?.length > 0 && (
        <div className="flex items-center justify-between my-2">
          {children.map((c, i) => (
            <button
              key={'tab_' + i}
              className={`min-h-8 bg-white text-slate-500 border-0 shadow-md w-full flex items-center justify-center
                ${
                  i === 0
                    ? 'rounded-l-sm'
                    : i === children.length - 1
                    ? 'rounded-r-sm'
                    : ''
                }
              hover:bg-slate-50 hover:text-slate-900 hover:border-b-2 hover:border-b-slate-100
              data-[active]:text-slate-700 data-[active]:border-b-2 data-[active]:border-b-slate-500`}
              {...(i === active && { 'data-active': true })}
              onClick={() => setActive(i)}
            >
              {c.props.label}
            </button>
          ))}
        </div>
      )}
      {children?.length > 0 && children[active]}
    </>
  );
};

export { Tabs, Tab };
