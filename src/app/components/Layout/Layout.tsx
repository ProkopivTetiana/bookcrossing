import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input";
import User from "../../../assets/user.svg";

import Logo from "../Logo/Logo";

type LayoutProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  childrenClassName,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(true);

  return (
    <div className="flex">
      <div className="flex w-full">
        <div className="hidden md:flex md:flex-row md:fixed bg-white justify-center items-center w-full shadow-lg shadow-gray-100 py-4 px-8 ">
          <div className="flex items-center justify-around w-full gap-4">
            <Logo />

            <div className="w-2/12 rounded-full bg-orange-200 border border-orange-400 text-center py-2 cursor-pointer hover:bg-orange-100">
              Категорії книг
            </div>

            <div className="w-1/2 rounded-full bg-orange-100 border border-orange-300 px-6 py-2">
              Знайти
            </div>

            <img
              className={`w-10 h-10 rounded-full stroke-black fill-black hover:bg-orange-100 cursor-pointer ${
                isAuth ? "flex" : "hidden"
              }`}
              src={User}
              alt=""
            />
            <div className={`w-2/12 ${isAuth ? "hidden" : "flex"}`}>
              <Button to={`/sign-in`}>Увійти</Button>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-col w-full py-28 px-14 gap-8 ${childrenClassName}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
