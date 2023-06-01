import React, { useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/Layout/Layout";
import Paper from "../../components/Paper/Paper";
import { ReactComponent as User } from "../../..//assets/user.svg";
import Button from "../../components/Button";
import Input from "../../components/Input";

import useProfile from "./hooks/useProfile";
import { FieldValues } from "react-hook-form";
import { AdvertisementType } from "../../../types/Advertisement";

const Profile = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    errors,
    backendErrors,
    getUserHandler,
    profile,
    updateUserHandler,
  } = useProfile();

  const handleUpdateClick = (data: AdvertisementType | FieldValues) => {
    updateUserHandler(data);
    setIsEdit(true);
  };

  return (
    <Layout>
      <Paper paperClassName="pl-28 py-8">
        <div className="flex justify-around w-full">
          <form className="flex flex-col gap-8 w-8/12" onSubmit={handleSubmit(handleUpdateClick)} >
            <div className="flex items-center gap-8">
              <div
                className={`flex text-orange-600 bg-orange-100 border-[1px] border-orange-400 w-28 h-28 rounded-full flex items-center justify-center uppercase `}
                style={{ fontSize: 48 }}
              >
                {`${profile.firstName.slice(0, 1)}${profile.lastName.slice(0, 1)}`}
              </div>
              <div className="flex flex-col w-1/2 justify-around h-full gap-8">
                <div className="flex text-xl text-slate-900 gap-4">
                  <div>{profile.firstName} {profile.lastName}</div>
                </div>
                {!isEdit && (
                  <Button
                    // className="w-full"
                    fill
                    onClick={() => {
                      setIsEdit(true);
                    }}
                  >
                    Редагувати
                  </Button>
                )}
                {isEdit && (
                  <Button
                    fill
                    // onClick={() => {
                    //   setIsEdit(false);
                    // }}
                  >
                    Зберегти
                  </Button>
                )}
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-1/2">Електронна пошта :</div>
              {!isEdit && <div className="w-full">{profile.email}</div>}
              {isEdit && (
                <Input
                  inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                  placeholder="your@mail.com"
                  name="email"
                  type="email"
                  register={register}
                  value={profile.email}
                />
              )}
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-1/2">Пароль :</div>
              {!isEdit && <div className="w-full">*********</div>}
              {isEdit && (
                <Input
                  inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                  name="password"
                  type="password"
                  register={register}
                />
              )}
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-1/2">Контактна інформація: :</div>
              {!isEdit && <div className="w-full">{profile.contactInfo}</div>}
              {isEdit && (
                <Input
                  inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                  name="contactInfo"
                  type="text"
                  register={register}
                  value={profile.contactInfo}
                />
              )}
            </div>
          </form>
          {/* <div className="flex flex-col gap-4 w-4/12">
            <Paper
              isSky
              title="Мої оголошення"
              navLink="my-list"
              titleClassName="w-full"
            >
              <div className={``}>Список оголошень пустий</div>
            </Paper>
            <Paper
              isSky
              title="Історія обміну"
              navLink="history"
              titleClassName="w-full"
            >
              <div className={``}>Історія обміну пуста</div>
            </Paper>
          </div> */}
        </div>

        <div className=""></div>
      </Paper>
    </Layout>
  );
};

export default Profile;
