import React, { FunctionComponent, useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import Camera from "../../../assets/camera.svg";
import Layout from "../../components/Layout";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import useAdvertisement from "../Advertisement/hooks/useAdvertisement";
import TitleSticker from "../../components/TitleSticker/TitleSticker";
import Select from "../../components/Select/Select";

const CreateAdvertisement = () => {
  const {
    register,
    handleSubmit,
    errors,
    backendErrors,
    advertisement,
    profile,
    getCategoriesHandler,
    addNewAdvertisementHandler,
    categories,
  } = useAdvertisement();
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  
  useEffect(() => {
    getCategoriesHandler();
  }, []);

  return (
    <Layout>
      <form onSubmit={handleSubmit(addNewAdvertisementHandler)}>
      {/* <div className="flex flex-col bg-white shadow-md shadow-gray-400 rounded-lg w-full px-10 py-3 gap-4 "> */}
        <Paper childrenClassName="flex-col px-10 py-3 gap-4 w-full">
        
          <div className="flex justify-between items-center">
            <TitleSticker text="Створення оголошення" />
            {/* <div className="w-full">Створення оголошення</div> */}
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
                name="name"
                type="text"
                register={register}
              />

              <div className="flex flex-row justify-between items-end gap-2 w-full">
                <div className="flex flex-col gap-2">
                  <Input
                    label="Автор:"
                    inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                    name="authorFullName"
                    type="text"
                    register={register}
                  />

                  <Input
                    label="Рік випуску:"
                    inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                    name="publicationYear"
                    type="text"
                    register={register}
                  />
                  <Select label="Категорія" name="categoryId" options={categories} register={register}/>
                </div>
                <div>
                  <Input
                    label="Віддам:"
                    inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
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
            name="description"
            type="text"
            register={register}
          />

          {/* <div>Підпис :</div> */}
        
        </Paper>
      </form>
    </Layout>
  );
};

export default CreateAdvertisement;
