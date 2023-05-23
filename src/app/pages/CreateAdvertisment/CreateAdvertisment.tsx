import React, { FunctionComponent, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
// import User from "../../../assets/user.svg";
import { ReactComponent as User } from "../../..//assets/user.svg";
import Camera from "../../../assets/camera.svg";
import Layout from "../../components/Layout";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import useProfile from "../Profile/hooks/useProfile";


type CreateAdvertismentProps = {};

const CreateAdvertisment = () => {
  // const {
  //   profile_name,
  //   book_name,
  //   author,
  //   graduation_year,
  //   category,
  //   time,
  //   description,
  // } = data;

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  const {
    register,
    handleSubmit,
    // profileHandler,
    errors,
    backendErrors,
  } = useProfile();
  return (
    <Layout>
      {/* <div className="flex flex-col bg-white shadow-md shadow-gray-400 rounded-lg w-full px-10 py-3 gap-4 "> */}
      <Paper childrenClassName="flex-col px-10 py-3 gap-4 w-full">
        <div className="flex justify-between items-center">
          <div>Створення оголошення</div>
          <Button className="w-1/6">Створити</Button>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <div className="flex w-3/12">
            <div className="flex w-full px-8 py-8 border border-slate-300 rounded-xl">
              <img className="w-full " src={Camera} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-8/12 px-8 py-8 border border-slate-300 rounded-xl">
            <Input
              label="Назва книги"
              inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
              // value={}
              name="book_name"
              type="text"
              register={register}
            />

            <div className="flex flex-row justify-between items-end gap-2 w-full">
              <div className="flex flex-col gap-2">
                <Input
                  label="Автор:"
                  inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                  // value={}
                  name="author"
                  type="text"
                  register={register}
                />

                <Input
                  label="Рік випуску:"
                  inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                  // value={}
                  name="graduation_year"
                  type="text"
                  register={register}
                />

                <Input
                  label="Категорія:"
                  inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                  // value={}
                  name="category"
                  type="text"
                  register={register}
                />
              </div>
              <div>
                <Input
                  label="Віддам:"
                  inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                  // value={}
                  name="time"
                  type="text"
                  register={register}
                />
              </div>
            </div>
          </div>
        </div>

        <div>Опис :</div>
        <Input
          inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
          // value={}
          name="description"
          type="text"
          register={register}
        />

        <div>Підпис :</div>
      </Paper>
    </Layout>
  );
};

export default CreateAdvertisment;
