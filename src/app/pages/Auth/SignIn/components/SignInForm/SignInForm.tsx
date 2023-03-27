import React from "react";

import { NavLink } from "react-router-dom";

//hooks
import useSignUp from "../../hooks/useSignIn";

//Components
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input";


const SignUpForm = () => {
  const { 
    register,
    handleSubmit,
    // signUpHandler,
    errors,
    backendErrors
  } = useSignUp();

  return (
    <form
      // onSubmit={handleSubmit(signUpHandler)}
      className="flex flex-col md:p-10 py-8 px-4 lg:p-20 gap-6"
    >
      <h1 className="text-center">Вхід до акаунту</h1>
      <Input 
        label="Електронна пошта"
        placeholder="your@mail.com"
        name="email"
        type="email"
        register={register}
      />
      
      <Input 
        label="Пароль"
        name="password"
        type="password"
        register={register}
      />  


      <Button fill>Увійти</Button>
      {/* <Button >Увійти</Button> */}

      {/* {backendErrors?.message && (
        <span className="text-sm text-red mt-2">{backendErrors.message}</span>
      )} */}
      <div className="flex justify-center">
        <NavLink to={`/recovery-password`}>
          <div className="text-orange-600">Забули пароль?</div>
        </NavLink>
      </div>
      

      <div className="flex flex-row justify-center gap-4">
        Немає акаунту?
        <NavLink to={`/sign-up`}>
          <div className="text-orange-600">Зареєструватися</div>
        </NavLink>
      </div>
    </form>
  );
};

export default SignUpForm;
