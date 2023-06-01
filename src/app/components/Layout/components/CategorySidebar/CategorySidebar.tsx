import React, { FunctionComponent, useState } from "react";

import { NavLink } from "react-router-dom";
import { selects } from "../../../../../utils/selects";
import Logo from "../../../Logo/Logo";

type CategorySidebarProps = {
  visible: boolean;
  setVisible: Function;
};

const CategorySidebar: FunctionComponent<CategorySidebarProps> = ({
  visible,
  setVisible,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  return (
    <div
        className={`
          ${visible ? "flex fixed" : "hidden"}
          z-20 w-full h-full
        `}
      >
        <div
          className={`flex flex-col items-center bg-white w-2/12 z-30  overflow-auto`}
        >
          <div className="flex flex-col justify-center items-center pt-8 pb-4 w-full">
            <Logo />
          </div>
          <div className="border-b border-orange-500 w-full py-2 px-2">
            Категорії книг
          </div>
          {selects &&
            selects.category.map((item, index) => (
              <div
                key={index}
                className="flex justify-center text-center border-b border-orange-500 cursor-pointer px-6 py-4 w-full hover:bg-orange-100"
                onClick={() => {
                  setActiveCategory(item.name);
                }}
              >
                {item.name}
              </div>
            ))}
        </div>

        <div
          className={`${
            activeCategory ? "flex" : "hidden"
          } flex-col items-center bg-orange-200 w-2/12 z-30 overflow-auto`}
        >
          {activeCategory &&
            selects &&
            selects.category
              .find((el) => el.name === activeCategory)
              ?.list.map((item, index) => (
                <div
                  className="flex justify-center text-center border-b border-orange-500 cursor-pointer px-6 py-4 w-full hover:bg-orange-100"
                  onClick={() => {
                    setVisible(true);
                  }}
                >
                  <NavLink
                    to={`/advertisements/category/${item.name}/${item.idCategory}`}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
        </div>

        <div
          className="absolute bg-white opacity-60 w-full h-full"
          onClick={() => {
            setVisible(false);
            setActiveCategory("");
          }}
        ></div>
      </div>
  );
};

export default CategorySidebar;
