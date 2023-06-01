import React, { FunctionComponent, useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
// import User from "../../../assets/user.svg";
import { ReactComponent as User } from "../../..//assets/user.svg";
import Camera from "../../../assets/camera.svg";
import Layout from "../../components/Layout";
import Paper from "../../components/Paper/Paper";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import useProfile from "../Profile/hooks/useProfile";
import useAdvertisement from "./hooks/useAdvertisement";
import useAdvertisementList from "../AdvertisementList/hooks/useAdvertisementList";
import Select from "../../components/Select/Select";

const Advertisement = () => {
  const { id } = useParams();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  
  const {
    deleteAdvertisementByIDHandler,
    getAdvertisementsByUserIdHandler,
    profile,
  } = useAdvertisementList();

  const {
    getCategoryHandler,
    getCategoriesHandler,
    getAdvertisementByIdHandler,
    category,
    advertisement,
    categories,
  } = useAdvertisement(id);

  const {
    getUserNameHandler,
    profileName,
    register,
  } = useProfile();
  
  let newDate = new Date(advertisement.publicationDate)
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  // const handleDeleteClick: React.MouseEventHandler<HTMLImageElement> = (event) => {
  //   event.stopPropagation();
  // };
  const handleDeleteClick = () => {
    deleteAdvertisementByIDHandler(advertisement.id);
  };

  useEffect(() => {
    getAdvertisementByIdHandler();
    getCategoriesHandler();
    getCategoryHandler(advertisement.categoryId);
    getUserNameHandler();
  }, []);
  
  return (
    <Layout>
      {/* <div className="flex flex-col bg-white shadow-md shadow-gray-400 rounded-lg w-full px-10 py-3 gap-4 "> */}
      <Paper childrenClassName="flex-col px-10 py-3 gap-4 w-full">
        <div className="flex justify-end items-center">
          {advertisement.id.toString() == id && (
            <div className="flex w-1/6">
              {!isEdit && (
                <Button
                  onClick={() => {
                    setIsEdit(true);
                  }}
                >
                  Редагувати
                </Button>
              )}
              {isEdit && (
                <Button
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  Зберегти
                </Button>
              )}
              {/* <Button onClick={handleDeleteClick} >Видалити</Button> */}
                
            </div>
          )}
              {/* <Button onClick={handleDeleteClick} >Видалити</Button> */}
        </div>
        <div className="flex items-center gap-8">
          <div
            className={`flex text-orange-600 bg-orange-100 border-[1px] border-orange-400 w-12 h-12 rounded-full flex items-center justify-center uppercase `}
            style={{ fontSize: 14 }}
          >
            {`${profileName.firstName.slice(0, 1)}${profileName.lastName.slice(0, 1)}`}
        </div>
          <div className="flex flex-col justify-around h-full gap-8">
            <div className="flex text-xl text-slate-900 gap-4">
              <div>{profileName.firstName} {profileName.lastName}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-4">
          <div className="flex w-3/12">
            <div className="flex w-full px-8 py-8 border border-slate-300 rounded-xl">
              <img className="w-full " src={Camera} alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center w-8/12 px-8 py-8 border border-slate-300 rounded-xl">
            {!isEdit && (
              <div className="text-lg font-medium text-slate-900">
                {advertisement.title}
              </div>
            )}
            {isEdit && (
              <Input
                label="Назва книги"
                inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                value={advertisement.title}
                name="title"
                type="text"
                register={register}
              />
            )}

            <div className="flex flex-row justify-between items-end gap-2 w-full">
              <div className="flex flex-col gap-2">
                <div>
                  {!isEdit && (
                    <div className="text-sm font-medium text-slate-900">
                      Автор: {advertisement.authorFullName}
                    </div>
                  )}
                  {isEdit && (
                    <Input
                      label="Автор:"
                      inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                      value={advertisement.authorFullName}
                      name="authorFullName"
                      type="text"
                      register={register}
                    />
                  )}
                </div>

                <div>
                  {!isEdit && (
                    <div className="text-sm font-medium text-slate-900">
                      Рік випуску: {advertisement.publicationYear}
                    </div>
                  )}
                  {isEdit && (
                    <Input
                      label="Рік випуску:"
                      inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                      value={advertisement.publicationYear}
                      name="publicationYear"
                      type="text"
                      register={register}
                    />
                  )}
                </div>

                <div>
                  {!isEdit && (
                    <div className="text-sm font-medium text-slate-900">
                      Категорія: {category.name}
                    </div>
                  )}
                  {isEdit && (
                    <Select name="categoryId" options={categories} register={register}/>
                  )}
                </div>
              </div>
              <div>
                {!isEdit && (
                  <div className="text-sm font-medium text-slate-900">
                    Віддам: {advertisement.time}
                  </div>
                )}
                {isEdit && (
                  <Input
                    label="Віддам:"
                    inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                    value={advertisement.time}
                    name="time"
                    type="text"
                    register={register}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div>Опис :</div>
        <div>
          {!isEdit && (
            <div className="flex w-full px-8 py-8 border border-slate-300 rounded-xl">
              {advertisement.description}
            </div>
          )}
          {isEdit && (
            <Input
              inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
              value={advertisement.description}
              name="description"
              type="text"
              register={register}
            />
          )}
        </div>
        <div className="flex justify-between" >
          <div>Контактна інформація:</div>
          <div className="text-orange-600" >{profileName.contactInfo}</div>
        </div>
      
      </Paper>
    </Layout>
  );
};

export default Advertisement;