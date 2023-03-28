import React, { memo } from "react";

import { NavLink } from "react-router-dom";

//hooks
import useSignUp from "../../hooks/useSignUp";

//Components
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    // signUpHandler,
    errors,
    backendErrors,
  } = useSignUp();

  return (
    <form
      // onSubmit={handleSubmit(signUpHandler)}
      className="flex flex-col md:p-10 py-8 px-4 lg:p-20 gap-5"
    >
      <h1 className="text-center">Реєстрація</h1>
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
      <Input
        label="Повторіть пароль"
        name="repeat-password"
        type="password"
        register={register}
      />

      <Button fill>Зареєструватися</Button>

      {/* {backendErrors?.message && (
        <span className="text-sm text-red mt-2">{backendErrors.message}</span>
      )} */}

      <div className="flex flex-row justify-center gap-4">
        Вже маєте акаунт?
        <NavLink to={`/sign-in`}>
          <div className="text-orange-600">Увійти</div>
        </NavLink>
      </div>
    </form>
  );
};

export default SignUpForm;
