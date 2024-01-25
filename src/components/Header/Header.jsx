import React from "react";
import Message from "./icons/Message.jsx";
import Dropdown from "./hooks/ProductDropdown.jsx";
import CompanyDropdown from "./hooks/CompanyDropdown.jsx";
import Line from "./icons/Line.jsx";
import Coin from "./icons/Coin.jsx";
import Menu from "./icons/Menu.jsx";

function Header() {
  return (
    <>
      <div className="header flex items-center justify-between">
        <div className="left flex items-center gap-7">
          {/* start Logo */}
          <div className="logo flex items-center gap-2">
            <Message />
            <h3 className="font-semibold tracking-tighter text-xl">Rebuild</h3>
          </div>
          {/* End Logo */}

          <div className="line">
            <Line></Line>
          </div>

          {/* start nav options */}
          <div className="nav-options text-[12px] hidden lg:flex xl:flex text-gray-700 font-semibold items-center gap-5">
            <Dropdown></Dropdown>
            <a href="#">Pricing</a>
            <CompanyDropdown></CompanyDropdown>
            <a className="flex items-center gap-1" href="#">
              jobs
              <Coin></Coin>
            </a>
          </div>
          {/* end nav options */}
        </div>

        {/* right Execution */}
        <div className=" text-[12px] hidden md:hidden lg:flex xl:flex font-semibold gap-5 text-gray-700 items-center">
          <button>
            <a href="#">Login</a>
          </button>
          <button className="border border-gray-500 hover:scale-95 duration-300 px-4 py-2 rounded-full">
            <a href="#">Sign Up</a>
          </button>
        </div>

        {/* start for menu */}
        <div className="menu  lg:hidden xl:hidden">
          <Menu></Menu>
        </div>
        {/* Menu End */}
      </div>
    </>
  );
}

export default Header;
