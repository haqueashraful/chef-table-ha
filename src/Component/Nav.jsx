import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../index.css"

const Nav = () => {
  return (
    <div className=" pt-10">
      <div className="navbar bg-base-100 font-lexend">
        <div className="navbar-start">
          <div className="dropdown px-0">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden px-0 pr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
            </ul>
          </div>
          <h1 className="lg:text-3xl md:text-3xl text-xl font-bold text-black">Chef&#39;s Table</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li className="">
              <a>Home</a>
            </li>
            <li>
              <a>Recipes</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex justify-end items-center gap-2">
          <label className=" input  w-2/3 flex items-center py-0 h-9 shadow-lg  bg-[#150B2B0D] focus:border-none focus-within:border-none focus-within:outline-none focus:outline-none px-3 rounded-full gap-2 text-sm">
            <input type="text" className="grow w-2/3" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <a className="rounded-full py-1 px-2 text-center w-8 h-8 shadow-2xl bg-[#150B2B0D] hover:bg-[#0BE58A] text-[#0BE58A] hover:text-white"><FontAwesomeIcon className="" icon={faCircleUser} /></a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
