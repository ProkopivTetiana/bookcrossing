import React, { FunctionComponent, useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";

//Components
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";
import useAdvertisementList from "./hooks/useAdvertisementList";
import AdvertisementCard from "../../components/AdvertisementCard/AdvertisementCard";
import TitleSticker from "../../components/TitleSticker/TitleSticker";

const AdvertisementList = () => {
  const { list, name, id } = useParams();
  console.log("list =======================",list)
  console.log("name=========================",name)
  console.log("id============================",id)
  const {
    profile,
    advertisementList,
    getAdvertisementsByCategoryHandler,
    getAdvertisementsByUserIdHandler,
    searchAdvertisementsByNameHandler,
    getAllAdvertisementsHandler,
  } = useAdvertisementList();

  useEffect(() => {
    if(list && list === "new"){
      getAllAdvertisementsHandler();
    }
    if(list && list === "search" && name){
      searchAdvertisementsByNameHandler(name);
    }
    if(list && list === "category" && id){
      getAdvertisementsByCategoryHandler(id);
    }
    if(list && list === "my-list"){
      getAdvertisementsByUserIdHandler(profile.id.toString());
    }
  }, []);
  
  return (
    <Layout>
      <div className="flex justify-between items-center w-full">
        {list && list === "new" && <TitleSticker text="Новинки" />}
        {list && list === "search" && <TitleSticker text={`Пошук: ${name}`} />}
        {list && list === "category" && (
          <TitleSticker text={name} />
        )}
        {list && list === "my-list" && <TitleSticker text="Мої оголошення" />}
        {list && list === "my-list" && <Button className="w-5/12" to={"/create-advertisement"}>Створити оголошення</Button>}
      </div>
      <div className="flex gap-4 flex-wrap">
        {advertisementList && advertisementList.map((item, index) => 
          <AdvertisementCard key={index} advertisement={item}/>
        )}
        {advertisementList.length < 1 && 
          <div>Список пустий</div>
        }
        {!advertisementList && 
          <div>Список пустий</div>
        }
      </div>
      
    </Layout>
  );
};

export default AdvertisementList;
