import React, { FunctionComponent } from "react";

import { NavLink, useParams } from "react-router-dom";

//Components
import Layout from "../../components/Layout/Layout";
import AdvertismentCard from "../../components/AdvertismentCard/AdvertismentCard";

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
        {list && list === "history" && <div>Історія обміну</div>}
      </div>
      {list === "history" && (
        <div className="flex justify-start flex-wrap w-full gap-10">
          <AdvertismentCard
            id="0"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
            status="Закритий"
          />
          <AdvertismentCard
            id="1"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
            status="Відкритий"
          />
          <AdvertismentCard
            id="2"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
            status="Закритий"
          />
          <AdvertismentCard
            id="3"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
            status="Відкритий"
          />
          <AdvertismentCard
            id="4"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
            status="Відкритий"
          />
          <AdvertismentCard
            id="5"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
            status="Закритий"
          />
        </div>
      )}
      {list !== "history" && (
        <div className="flex justify-start flex-wrap w-full gap-10">
          <AdvertismentCard
            id="6"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="7"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="8"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="9"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="10"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="11"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="12"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="13"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
          <AdvertismentCard
            id="14"
            name="Нік користувача"
            rating="Рейтинг"
            time="на 3 місяця"
          />
        </div>
      )}
    </Layout>
  );
};

export default AdvertismentList;
