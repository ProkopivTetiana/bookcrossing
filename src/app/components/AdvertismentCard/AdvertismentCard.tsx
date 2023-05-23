import React, { FunctionComponent } from "react";

import { NavLink } from "react-router-dom";
import User from "../../../assets/user.svg";
import Camera from "../../../assets/camera.svg";
import Button from "../Button/Button";

type AdvertismentCardProps = {
  children?: React.ReactNode;
  childrenClassName?: string;
  paperClassName?: string;
  name?: string;
  rating?: string;
  time?: string;
  status?: string;
  id: string;
};

const AdvertismentCard: FunctionComponent<AdvertismentCardProps> = ({
  children,
  childrenClassName,
  paperClassName,
  name,
  rating,
  time,
  status,
  id,
}) => {
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();
  return (
    <NavLink to={`/advertisment/${id}`} className={`flex flex-col bg-white hover:bg-gray-100 cursor-pointer shadow-md shadow-gray-400 rounded-lg w-full ${status? "max-w-[320px]" : "max-w-[240px]"} px-4 py-3 gap-4 ${paperClassName}`}>
      {/* {title && <div className={``}>{title}</div>} */}
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
          {status === "Відкритий" && <Button className="h-4 w-4/12">Закрити</Button>}          
        </div>
      }        
    </NavLink>
  );
};

export default AdvertismentCard;
