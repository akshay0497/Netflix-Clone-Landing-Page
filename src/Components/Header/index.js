import React from "react";
import logo from "../../Assets/Images/Header/Netflix-Logo.svg";
import TranslateIcon from '@mui/icons-material/Translate';

function Header() {
  return (
    <div className="flex items-center md:justify-between md:px-5 lg:justify-evenly lg:gap-x-[500px] h-[93px]">
      <div className="">
        <img src={logo} className="lg:h-36 md:h-24 w-fit text-[#E50914]" />
      </div>
      <div className="flex items-center gap-10">
        <div className="border rounded">
            <TranslateIcon className="text-white" style={{ padding:"2px"}}/>
          <select name="languages" className="bg-transparent text-white">
            <option value="english" selected={true}>
              <TranslateIcon/>English
            </option>
            <option value="hindi">हिंदी</option>
          </select>
        </div>
        <div>
          <button
            className="bg-[#E50914]  w-20 rounded p-1 text-white font-[550]"
            style={{ fontFamily: "Poppins,sans-serif" }}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
