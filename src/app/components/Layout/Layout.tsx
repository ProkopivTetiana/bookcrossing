import React, { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Button from "../Button/Button";
import Input from "../Input";
import Search from "../../../assets/search.svg";
// import { ReactComponent as Search } from "../../../assets/search.svg";

import Logo from "../Logo/Logo";
import CategorySidebar from "./components/CategorySidebar/CategorySidebar";

import ProfileSidebar from "./components/ProfileSidebar/ProfileSidebar";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import useAdvertisementList from "../../pages/AdvertisementList/hooks/useAdvertisementList";
import { FieldValues } from "react-hook-form";

type LayoutProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
};

const Layout: FunctionComponent<LayoutProps> = ({
  children,
  childrenClassName,
}) => {
  // const [isAuth, setIsAuth] = useState<boolean>(true);
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { profile, profileName } = useTypedSelector((state) => state.profile);
 
  const navigate = useNavigate();

  const [categorySidebar, setCategorySidebar] = useState<boolean>(false);
  const [profileSidebar, setProfileSidebar] = useState<boolean>(false);
 console.log("isAuth: ", isAuth)
  const {
    searchAdvertisementsByNameHandler,
    handleSubmit,
    register,
  } = useAdvertisementList();

  const handleSearchClick = (data: FieldValues ) => {
    console.log("data.search", data.search)
    // searchAdvertisementsByNameHandler(data.search);
    navigate(`/advertisements/search/${data.search}`);

  };

  return (
    <div className="flex">
      <CategorySidebar
        visible={categorySidebar}
        setVisible={setCategorySidebar}
      />

      <div className="flex w-full">
        <div className="hidden md:flex md:flex-row md:fixed bg-white justify-center items-center w-full shadow-lg shadow-gray-100 py-4 px-8 z-10">
          <div className="flex items-center justify-around w-full gap-4">
            <Logo />

            <div
              className="w-2/12 rounded-full bg-orange-200 border border-orange-400 text-center py-3 cursor-pointer hover:bg-orange-100"
              onClick={() => setCategorySidebar(true)}
            >
              Категорії книг
            </div>

            <form className="flex w-1/2 gap-2" onSubmit={handleSubmit(handleSearchClick)}>
              <input
                type="text"
                placeholder={"Знайти"}
                {...register("search")}
                className={`w-full rounded-full bg-orange-100 border border-orange-300 px-6 py-2`}
              />
              <div className="w-[40px]">
                <Button className="bg-white border-[0px] hover:bg-white  rounded-full"> <img className="w-10 h-6" src={Search} /> </Button>
              </div>
              
            </form>

            {/* <img
              className={`w-10 h-10 rounded-full stroke-black fill-black hover:bg-orange-100 cursor-pointer ${
                isAuth ? "flex" : "hidden"
              }`}
              src={User}
              alt=""
              onClick={() => setProfileSidebar(true)}
            /> */}
            {/* <User
              className={`w-10 h-10 rounded-full stroke-black fill-orange-600 hover:bg-orange-100 cursor-pointer ${
                isAuth ? "flex" : "hidden"
              }`}
              // className="w-10 h-10 fill-black hover:stroke-orange-100"
              onClick={() => setProfileSidebar(true)}
            /> */}

            <div
              className={`${
                isAuth ? "flex" : "hidden"
              } bg-orange-100 hover:bg-orange-300 border-[1px] border-orange-400 w-[32px] lg:w-[50px]  h-[32px] lg:h-[50px] rounded-full flex items-center justify-center uppercase cursor-pointer`}
              style={{ fontSize: 14 }}
              onClick={() => setProfileSidebar(true)}
            >
              {`${profile?.firstName?.slice(0, 1)}${profile?.lastName?.slice(0, 1)}`}
            </div>

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

      <ProfileSidebar visible={profileSidebar} setVisible={setProfileSidebar} profileId={profile.id} profileName={profileName} />
    </div>
  );
};

export default Layout;
