import React from "react";

import { NavLink } from "react-router-dom";

//hooks
import useResetPassword from "../../hooks/useResetPassword";

//Components
import Button from "../../../../../components/Button/Button";
import Input from "../../../../../components/Input";

const ResetPasswordForm = () => {
  const { register, handleSubmit, errors, backendErrors } = useResetPassword();

  return (
    <form
      // onSubmit={handleSubmit(signUpHandler)}
      className="flex flex-col md:p-10 py-8 px-4 lg:p-20 gap-6"
    >
      <h1 className="text-center">Відновлення паролю</h1>
      <Input
        label="Новий пароль"
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

      <Button fill>Підтвердити</Button>
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

export default ResetPasswordForm;
