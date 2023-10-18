import React from "react";
import RegistrationHeader from "../../Components/Registrationform_1/RegistrationHeader";
import RegistrationMainSection_A from "../../Components/Registrationform_1/RegistrationMainSection_A";
import RegistrationFooter from "../../Components/Registrationform_1/RegistrationFooter";

const RegistrationForm = () => {
  return (
    <div style={{backgroundColor:"white"}}>
      <RegistrationHeader/>
          <RegistrationMainSection_A />
      <RegistrationFooter/>
    </div>
  );
};

export default RegistrationForm;
