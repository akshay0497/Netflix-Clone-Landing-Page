import React from "react";
import LogIn from "../../Components/Login";
import LoginMainSection from "../../Components/LoginMainSection";
import "./index.css";
import NetLoginFooterSection from "../../Pages/LoginFooterSection";

const NetLogIn = () => {
  return (
    <div id="Loginsections">
      <div>
        <LogIn />
        <LoginMainSection />
        <NetLoginFooterSection/>
      </div>
    </div>
  );
};

export default NetLogIn;
