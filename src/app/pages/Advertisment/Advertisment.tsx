import React, { FunctionComponent } from "react";

import { NavLink, useParams } from "react-router-dom";
// import User from "../../../assets/user.svg";
import { ReactComponent as User } from "../../..//assets/user.svg";
import Camera from "../../../assets/camera.svg";
import Layout from "../../components/Layout";
import Paper from "../../components/Paper/Paper";

type AdvertismentProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
  paperClassName?: string;
  name?: string;
  rating?: string;
  time?: string;
  status?: string;
};

const Advertisment = () => {
  const { id } = useParams();

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  return (
    <Layout>
      {/* <div className="flex flex-col bg-white shadow-md shadow-gray-400 rounded-lg w-full px-10 py-3 gap-4 "> */}
      <Paper childrenClassName="flex-col px-10 py-3 gap-4 w-full">
        <div>Оголошення id: {id}</div>

        <div className="flex items-center gap-8">
          <User className="w-12 h-12" />
          <div className="flex flex-col justify-around h-full gap-8">
            <div className="flex text-xl text-slate-900 gap-4">
              <div>Ім’я профілю</div>
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
            <div className="text-lg font-medium text-slate-900">Назва книги</div>
            <div className="flex flex-row justify-between items-end gap-2 w-full">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-medium text-slate-900">Автор: Сара Дж. Маас</div>
                <div className="text-sm font-medium text-slate-900">Рік випуску: 2020</div>
                <div className="text-sm font-medium text-slate-900">Категорія: Фентезі</div>
              </div>
              <div className="text-sm font-medium text-slate-900">Віддам: Назавжди</div>
            </div>
          </div>
        </div>

        <div>Опис</div>
        <div className="flex w-full px-8 py-8 border border-slate-300 rounded-xl">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>


        <div>Підпис</div>
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
