import React from "react";

//components
import RecoveryPasswordForm from "./components/RecoveryPasswordForm";
import Logo from "../../../components/Logo/Logo";

const RecoveryPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-0 py-8 md:px-4 gap-4">
      <Logo />   
      <div className="flex flex-col md:shadow-xl rounded-3xl md:w-1/2">
        <RecoveryPasswordForm />
      </div>
    </div>
  );
};

export default RecoveryPassword;
