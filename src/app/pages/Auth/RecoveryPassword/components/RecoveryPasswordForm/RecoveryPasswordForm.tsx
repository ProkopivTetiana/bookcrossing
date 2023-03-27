import React from "react";

import { NavLink } from "react-router-dom";

//hooks
import useRecoveryPassword from "../../hooks/useRecoveryPassword";

//Components
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input";


const RecoveryPasswordForm = () => {
  const { 
    register,
    handleSubmit,
    errors,
    backendErrors
  } = useRecoveryPassword();

  return (
    <form
      // onSubmit={handleSubmit(signUpHandler)}
      className="flex flex-col md:p-10 py-8 px-4 lg:p-20 gap-6"
    >
      <h1 className="text-center">
        Введіть свою пошту і на неї буде відправлений лист 
        з посиланням для відновлення паролю
      </h1>
      <Input 
        label="Електронна пошта"
        placeholder="your@mail.com"
        name="email"
        type="email"
        register={register}
      />

      <Button fill to="/reset-password">Надіслати</Button>
      {/* <Button >Увійти</Button> */}

      {/* {backendErrors?.message && (
        <span className="text-sm text-red mt-2">{backendErrors.message}</span>
      )} */}      

      <div className="flex flex-row justify-center gap-4">
        <NavLink to={`/sign-in`}>
          <div className="text-orange-600">Увійти</div>
        </NavLink>
        <NavLink to={`/sign-up`}>
          <div className="text-orange-600">Зареєструватися</div>
        </NavLink>
      </div>
    </form>
  );
};

export default RecoveryPasswordForm;
