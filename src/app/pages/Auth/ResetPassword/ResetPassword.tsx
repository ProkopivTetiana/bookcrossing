import React from "react";

//components
import ResetPasswordForm from "./components/ResetPasswordForm";
import Logo from "../../../components/Logo/Logo";

const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center py-4 px-0 py-8 md:px-4 gap-4">
      <Logo />
      <div className="flex flex-col md:shadow-xl rounded-3xl md:w-1/2">
        <ResetPasswordForm />
      </div>
    </div>
  );
};

export default ResetPassword;
