import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//types
import { SignErrorsType, SignInRequestType } from "../../../../../types/AuthType";

import { useActions } from "../../../../../hooks/useActions";
import { useSignInMutation } from "../../../../../store/api/auth.api";

const useSignIn = () => {
  const navigate = useNavigate();
  const [backendErrors, setBackendErrors] = useState<SignErrorsType | null>(
    null
  );
  
  const { setCredentials } = useActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SignInRequestType | FieldValues>();

  const [signIn] = useSignInMutation();

  const signInHandler = async (formData: SignInRequestType | FieldValues) => {
    try {
      const authData = await signIn(formData).unwrap();
      setCredentials(authData);
      // setTimeout(async () => {
      //   const userData = await getProfile(null).unwrap();
      //   setUser(userData);
      // }, 500);
    } catch (error: any) {
      setBackendErrors(error.data);
    }
  };


  return {
    register,
    handleSubmit,
    errors,
    setValue,
    signInHandler,
    backendErrors,
  };
};

export default useSignIn;
