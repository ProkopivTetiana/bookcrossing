import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//types
import { SignErrorsType, SignUpRequestType } from "../../../../../types/AuthType";

const useSignUp = () => {
  const navigate = useNavigate();
  const [backendErrors, setBackendErrors] = useState<SignErrorsType | null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpRequestType | FieldValues>();

  return {
    register,
    handleSubmit,
    errors,
    // signUpHandler,
    backendErrors,
  };
};

export default useSignUp;
