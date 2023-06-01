import React, { FunctionComponent, useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";
import User from "../../../assets/user.svg";
import Camera from "../../../assets/camera.svg";
import Button from "../Button/Button";
import { AdvertisementType } from "../../../types/Advertisement";
import Delete from "../../../assets/trash.svg";
import useAdvertisementList from "../../pages/AdvertisementList/hooks/useAdvertisementList";
import useAdvertisement from "../../pages/Advertisement/hooks/useAdvertisement";
import useProfile from "../../pages/Profile/hooks/useProfile";

type AdvertisementCardProps = {
  paperClassName?: string;
  advertisement: AdvertisementType;
};
const firstName = "User" ;
const lastName = "Name" ;

const AdvertisementCard: FunctionComponent<AdvertisementCardProps> = ({
  paperClassName,
  advertisement,
}) => {
  const { list, name, id } = useParams();
  const {
    deleteAdvertisementByIDHandler,
    getAdvertisementsByUserIdHandler,
    profile,
  } = useAdvertisementList();

  const {
    getCategoriesHandler,
    getCategoryHandler,
    categories,
    category,
  } = useAdvertisement();

  const {
    getUserNameHandler,
    profileName,
  } = useProfile();
  
  let newDate = new Date(advertisement.time)
  let date = newDate.getDate();
  let month = newDate.getMonth();
  let year = newDate.getFullYear();

  // const handleDeleteClick: React.MouseEventHandler<HTMLImageElement> = (event) => {
  //   event.stopPropagation();
  // };
  const handleDeleteClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    deleteAdvertisementByIDHandler(advertisement.id);
    getAdvertisementsByUserIdHandler(profile.id.toString())
  };

  useEffect(() => {
    getCategoryHandler(advertisement.categoryId);
    getUserNameHandler();
  }, []);

  return (
    <NavLink to={`/advertisement/${advertisement.id}`} className={`flex flex-col bg-white hover:bg-gray-100 cursor-pointer shadow-md shadow-gray-400 rounded-lg w-3/12 px-4 py-3 gap-4 ${paperClassName}`}>
      {/* {title && <div className={``}>{title}</div>} */}
      <div className="flex items-center gap-4">
        <div
          className={`flex text-orange-600 bg-orange-100 border-[1px] border-orange-400 w-10  h-10 rounded-full flex items-center justify-center uppercase cursor-pointer`}
          style={{ fontSize: 14 }}
        >
          {/* {`${profile?.firstName?.slice(0, 1)}${profile?.lastName?.slice(0, 1)}`} */}
          {`${profileName.firstName.slice(0, 1)}${profileName.lastName.slice(0, 1)}`}
        </div>
        {/* <div className="ml-3 overflow-hidden">
          <p className="text-sm font-medium text-slate-900">{advertisement.name} User Name</p>
          <p className="text-sm text-slate-500 truncate">{rating}</p>
        </div> */}
        <p className="text-sm font-medium text-slate-900">{advertisement.title} User Name</p>
        {list && list === "my-list" && 
          <div onClick={handleDeleteClick}>
            <img
              className="w-10 h-10 hover:bg-orange-200 rounded-full p-2"
              src={Delete}
              alt="Видалити"
            />
          </div>
        }
        
          {/* <button onClick={handleDeleteClick} className="w-10 h-10 hover:bg-orange-200 rounded-full p-2" type="button">
            <img className="w-full h-full" src={Delete} alt="" />
          </button> */}
        
        {/* <Button className="bg-white border-[0px] hover:bg-white  w-[40px] rounded-full"> <img className="w-10 h-6" src={Delete} /> </Button> */}
      </div>

      <div className="flex gap-8">
        <div className="px-8 py-8 border border-slate-300 rounded-xl">
          <img className="w-full " src={Camera} alt="" />  
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-slate-900">{advertisement.title}</p>
          <p className="text-sm text-slate-500 truncate">{advertisement.authorFullName}</p>
          <p className="text-sm text-slate-500 truncate">{advertisement.publicationYear}</p>
          <p className="text-sm font-medium text-slate-900">{category.name}</p>
        </div>
      </div>

      <div className="">
        <p className="text-sm font-medium text-slate-900">Опис:</p>
        <p className="text-sm text-slate-500 truncate">{advertisement.description}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-slate-900">Віддам:</p>
        <div className="flex justify-between">
          <p className="text-sm font-medium text-slate-900">{advertisement.time}</p>
          <p className="text-sm text-slate-900">{date}.{month<10?`0${month+1}`:`${month+1}`}.{year}</p>
        </div>        
      </div>
      {/* {status && 
        <div className="flex justify-between items-center">
          <div className="">{status}</div>
          {status === "Відкритий" && <Button className="h-4 w-4/12">Закрити</Button>}          
        </div>
      }         */}
    </NavLink>
  );
};

export default AdvertisementCard;
