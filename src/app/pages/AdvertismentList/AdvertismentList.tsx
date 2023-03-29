import React, { FunctionComponent } from "react";

import { NavLink, useParams } from "react-router-dom";

//Components
import Layout from "../../components/Layout/Layout";
import Advertisment from "../../components/Advertisment/Advertisment";

const AdvertismentList = () => {
  const { list, name, id } = useParams();
  return (
    <Layout>
      <div className="flex justify-between">
        {list && list === "new" && <div>Новинки</div>}
        {list && list === "recommendations" && <div>Рекомендації</div>}
        {list && list === "category" && (
          <div>
            Категорія: {name} , id: {id}
          </div>
        )}
        {list && list === "my-list" && <div>Мої оголошення</div>}
        {list && list === "my-list" && <NavLink to={"/"}>create new</NavLink>}
      </div>
      <div className="flex justify-start flex-wrap w-full gap-10">
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
      </div>
    </Layout>
  );
};

export default AdvertismentList;
