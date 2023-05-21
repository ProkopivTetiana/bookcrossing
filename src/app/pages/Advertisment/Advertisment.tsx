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

const data = {
  profile_name: "Ім’я профілю",
  book_name: "Назва книги",
  author: "Сара Дж. Маас",
  graduation_year: "2020",
  category: "Фентезі",
  time: "Назавжди",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

type AdvertismentProps = {};

const Advertisment = () => {
  const { id } = useParams();
  const user_id = id;
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const {
    profile_name,
    book_name,
    author,
    graduation_year,
    category,
    time,
    description,
  } = data;

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
          <div>Оголошення id: {id}</div>
          {user_id == id && (
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
            </div>
          )}
        </div>
        <div className="flex items-center gap-8">
          <User className="w-12 h-12" />
          <div className="flex flex-col justify-around h-full gap-8">
            <div className="flex text-xl text-slate-900 gap-4">
              <div>{profile_name}</div>
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
                {book_name}
              </div>
            )}
            {isEdit && (
              <Input
                label="Назва книги"
                inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                value={book_name}
                name="book_name"
                type="text"
                register={register}
              />
            )}

            <div className="flex flex-row justify-between items-end gap-2 w-full">
              <div className="flex flex-col gap-2">
                <div>
                  {!isEdit && (
                    <div className="text-sm font-medium text-slate-900">
                      Автор: {author}
                    </div>
                  )}
                  {isEdit && (
                    <Input
                      label="Автор:"
                      inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                      value={author}
                      name="author"
                      type="text"
                      register={register}
                    />
                  )}
                </div>

                <div>
                  {!isEdit && (
                    <div className="text-sm font-medium text-slate-900">
                      Рік випуску: {graduation_year}
                    </div>
                  )}
                  {isEdit && (
                    <Input
                      label="Рік випуску:"
                      inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                      value={graduation_year}
                      name="graduation_year"
                      type="text"
                      register={register}
                    />
                  )}
                </div>

                <div>
                  {!isEdit && (
                    <div className="text-sm font-medium text-slate-900">
                      Категорія: {category}
                    </div>
                  )}
                  {isEdit && (
                    <Input
                      label="Категорія:"
                      inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                      value={category}
                      name="category"
                      type="text"
                      register={register}
                    />
                  )}
                </div>
              </div>
              <div>
                {!isEdit && (
                  <div className="text-sm font-medium text-slate-900">
                    Віддам: {time}
                  </div>
                )}
                {isEdit && (
                  <Input
                    label="Віддам:"
                    inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
                    value={time}
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
              {description}
            </div>
          )}
          {isEdit && (
            <Input
              inputClassName="border-orange-600 hover:bg-opacity-80 focus:bg-opacity-60"
              value={description}
              name="description"
              type="text"
              register={register}
            />
          )}
        </div>

        <div>Підпис :</div>
        {/* {title && <div className={``}>{title}</div>}
      <div className="flex">
        <img className="h-10 w-10 rounded-full stroke-black fill-black" src={User} alt="" />
        <div className="ml-3 overflow-hidden">  
          <p className="text-sm font-medium text-slate-900">{name}</p>
          <p className="text-sm text-slate-500 truncate">{rating}</p>
        </div>
       
      </div>

      <div className="px-8 py-8 border border-slate-300 rounded-xl">
        <img className="w-full " src={Camera} alt="" />  
      </div>

      <div className="flex flex-col">
        <p className="text-sm font-medium text-slate-900">{}Назва книги</p>
        <p className="text-sm text-slate-500 truncate">{}Автор</p>
        <p className="text-sm text-slate-500 truncate">{}рік видання</p>
        <p className="text-sm font-medium text-slate-900">{}Категорія</p>
      </div>
      <div className="">
        <p className="text-sm font-medium text-slate-900">{}Опис:</p>
        <p className="text-sm text-slate-500 truncate">{}
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
         </p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-slate-900">{}Віддам:</p>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-slate-900">{time}</p>
          <p className="text-sm text-slate-900">{date}.{month<10?`0${month+1}`:`${month+1}`}.{year}</p>
        </div>        
      </div>
      {status && 
        <div className="flex justify-between items-center">
          <div className="">{status}</div>      
        </div>
      }*/}

        {/* </div> */}
      </Paper>
    </Layout>
  );
};

export default Advertisment;
