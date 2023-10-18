import React from "react";
import LogIn from "../../Components/Login";
import LoginMainSection from "../../Components/LoginMainSection";
import stylecss from "./index.module.css";
import NetLoginFooterSection from "../../Pages/LoginFooterSection";
import RegistrationForm_I from "../../Components/Registrationform_1";

const NetLogIn = () => {
  return (
      <div className={stylecss.stylecss}>
          <LogIn />
          <LoginMainSection />
          <NetLoginFooterSection />
      </div>
  );
};

export default NetLogIn;
