import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

//types


const useProfile = () => {
  const navigate = useNavigate();
  const [backendErrors, setBackendErrors] = useState<null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  return {
    register,
    handleSubmit,
    errors,
    // profileHandler,
    backendErrors,
  };
};

export default useProfile;
