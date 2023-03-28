import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input";
// import User from "../../../assets/user.svg";
import { ReactComponent as User } from "../../../assets/user.svg";

import Logo from "../Logo/Logo";
import CategorySidebar from "./components/CategorySidebar/CategorySidebar";

import ProfileSidebar from "./components/ProfileSidebar/ProfileSidebar";


type LayoutProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  childrenClassName,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(true);
  const [categorySidebar, setCategorySidebar] = useState<boolean>(false);
  const [profileSidebar, setProfileSidebar] = useState<boolean>(false);

  return (
    <div className="flex">

      <CategorySidebar visible={categorySidebar} setVisible={setCategorySidebar} />

      <div className="flex w-full">
        <div className="hidden md:flex md:flex-row md:fixed bg-white justify-center items-center w-full shadow-lg shadow-gray-100 py-4 px-8 ">
          <div className="flex items-center justify-around w-full gap-4">
            <Logo />

            <div
              className="w-2/12 rounded-full bg-orange-200 border border-orange-400 text-center py-2 cursor-pointer hover:bg-orange-100"
              onClick={() => setCategorySidebar(true)}
            >
              Категорії книг
            </div>

            <div className="w-1/2 rounded-full bg-orange-100 border border-orange-300 px-6 py-2">
              Знайти
            </div>

            {/* <img
              className={`w-10 h-10 rounded-full stroke-black fill-black hover:bg-orange-100 cursor-pointer ${
                isAuth ? "flex" : "hidden"
              }`}
              src={User}
              alt=""
              onClick={() => setProfileSidebar(true)}
            /> */}
            <User 
              className={`w-10 h-10 rounded-full stroke-black fill-orange-600 hover:bg-orange-100 cursor-pointer ${
                isAuth ? "flex" : "hidden"
              }`}
              // className="w-10 h-10 fill-black hover:stroke-orange-100"
              onClick={() => setProfileSidebar(true)}
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

      <ProfileSidebar visible={profileSidebar} setVisible={setProfileSidebar} />
    </div>
  );
};

export default Layout;
