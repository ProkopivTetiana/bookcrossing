import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//types
import { SignErrorsType, SignInRequestType } from "../../../../../types/AuthType";

const useResetPassword = () => {
  const navigate = useNavigate();
  const [backendErrors, setBackendErrors] = useState<SignErrorsType | null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignInRequestType | FieldValues>();

  return {
    register,
    handleSubmit,
    errors,
    setValue,
    // resetPasswordHandler,
    backendErrors,
  };
};

export default useResetPassword;
