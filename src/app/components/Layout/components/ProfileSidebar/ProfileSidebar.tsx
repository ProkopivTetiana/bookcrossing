//ProfileSidebar
import React, { FunctionComponent, ReactNode, useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as Bookmark } from "../../../../../assets/bookmark.svg";
import { ReactComponent as User } from "../../../../../assets/user.svg";
import { ReactComponent as Clock } from "../../../../../assets/clock.svg";
import { ReactComponent as Case } from "../../../../../assets/case.svg";
import Logout  from "../../../../../assets/logout.png";

// import User from "../../../../../assets/user.svg";

type CategorySidebarProps = {
  visible: boolean;
  setVisible: Function;
  icon?: ReactNode;
};

const CategorySidebar: FunctionComponent<CategorySidebarProps> = ({
  visible,
  setVisible,
  icon,
}) => {
  return (
    <div
      className={`
          ${visible ? "flex justify-end fixed" : "hidden"}
          z-10 w-full h-full
        `}
    >
      <div
        className="absolute bg-white opacity-60 w-full h-full"
        onClick={() => {
          setVisible(false);
        }}
      ></div>

      <div
        className={`flex flex-col items-center bg-white w-2/12 z-20  overflow-auto`}
      >
        <div className="flex justify-start items-center border-b border-orange-500 pt-8 pb-4 px-4 w-full gap-4">
          {/* <img
              className={`flex w-10 h-10 rounded-full stroke-black hover:bg-orange-100 cursor-pointer`}
              src={IBookmark}
              alt=""
            /> */}
          <User className="w-10 h-10 fill-black" />
          <div>Ім'я Користувача</div>
        </div>

        <NavLink
          to={"/"}
          className="flex justify-start items-center border-b border-orange-500 cursor-pointer px-2 py-4 w-full hover:bg-orange-100 gap-4"
        >
          <div className="flex cursor-pointer">
            <Case />
          </div>
          <div className="">Мій профіль</div>
        </NavLink>

        <NavLink
          to={"/advertisments/my-list"}
          className="flex justify-start items-center border-b border-orange-500 cursor-pointer px-2 py-4 w-full hover:bg-orange-100 gap-4"
        >
          <div className="flex cursor-pointer">
            <Bookmark className="stroke-black hover:stroke-orange-100" />
          </div>
          <div className="">Мої оголошення</div>
        </NavLink>

        <NavLink
          to={"/"}
          className="flex justify-start items-center border-b border-orange-500 cursor-pointer px-2 py-4 w-full hover:bg-orange-100 gap-4"
        >
          <div className="flex cursor-pointer">
            <Clock />
          </div>
          <div className="">Історія обміну</div>
        </NavLink>

        <NavLink
          to={"/sign-in"}
          className="flex justify-start items-center border-b border-orange-500 cursor-pointer px-2 py-4 w-full hover:bg-orange-100 gap-4"
        >
          <div className="flex cursor-pointer">
            <img
              className={`flex w-12 h-12 rounded-full stroke-black hover:bg-orange-100 cursor-pointer`}
              src={Logout}
              alt=""
            />
            {/* <Clock /> */}
          </div>
          <div className="">Вихід</div>
        </NavLink>
      </div>
    </div>
  );
};

export default CategorySidebar;
