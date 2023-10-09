import React from "react";
import logo from "../../Assets/Images/Header/Netflix-Logo.svg";
import bad from "../../Assets/Images/Badpage/robot.png";
const NoPage = () => {
  return (
    <div className="bg-white text-[rgba(185,179,179,0.7)] w-screen h-screen flex items-center justify-evenly">
      <div className="">
        <div>
          <img src={logo} className="w-40" />
        </div>
        <div className="pb-4">
          <h1>
            <span className="font-bold text-black">404. </span>That’s an error.
          </h1>
        </div>
        <div>
          <h1 className="text-black">
            The requested URL /badpage was not found on this server.
          </h1>
          <h1>That’s all we know.</h1>
        </div>
      </div>
      <div>
        <img src={bad} />
      </div>
    </div>
  );
};

export default NoPage;
