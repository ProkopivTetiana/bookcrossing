import React, { FunctionComponent, useEffect, useState } from "react";

import { NavLink, useNavigate, useParams } from "react-router-dom";
import Camera from "../../../assets/camera.svg";
import Layout from "../../components/Layout";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import useAdvertisement from "../Advertisement/hooks/useAdvertisement";
import TitleSticker from "../../components/TitleSticker/TitleSticker";
import Select from "../../components/Select/Select";
import { AdvertisementType } from "../../../types/Advertisement";
import { FieldValues } from "react-hook-form";

const CreateAdvertisement = () => {
  const navigate = useNavigate();
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
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1; // Місяці в JavaScript нумеруються з 0, тому потрібно додати 1
  const day: number = today.getDate();
  
  // Форматуємо значення місяця та дня, щоб були двозначні числа
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
  
  const formattedDate: string = `${year}-${formattedMonth}-${formattedDay}`;
  
  console.log("formattedDate ",formattedDate)
  
  useEffect(() => {
    getCategoriesHandler();
  }, []);

  const handleAddClick = (data: AdvertisementType | FieldValues) => {
    addNewAdvertisementHandler({...data, userId:profile.id, publicationDate: formattedDate});
    navigate(`/advertisements/my-list`);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(handleAddClick)}>
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
                    name="bookAuthorFullName"
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
                  <Select label="Категорія:" name="categoryId" options={categories} register={register}/>
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
