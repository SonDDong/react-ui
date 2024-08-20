import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="fixed w-screen h-16 bg-slate-300 flex items-center space-x-4 px-4">
      <Link className="text-slate-700 hover:text-white flex" to={'/'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <div className="ms-2">react-ui</div>
      </Link>
    </div>
  );
};

export default Header;
