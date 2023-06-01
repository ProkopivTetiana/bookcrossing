import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

//Components
import Layout from "../../components/Layout/Layout";
import Paper from "../../components/Paper/Paper";
import AdvertisementCard from "../../components/AdvertisementCard/AdvertisementCard";
import useAdvertisementList from "../AdvertisementList/hooks/useAdvertisementList";
import TitleSticker from "../../components/TitleSticker/TitleSticker";

const Home = () => {

  const {
    advertisementList,
    getAllAdvertisementsHandler,
  } = useAdvertisementList();

  useEffect(() => {
    getAllAdvertisementsHandler();
  }, []);

  return (
    <Layout>
      <h1>
        Книги - це мости між людьми та світами. Давайте будувати їх разом!
      </h1>
      <Paper title="Новинки" paperClassName="bg-orange-100" navLink="new">
        {advertisementList && advertisementList.map((item, index) => 
          <AdvertisementCard key={index} advertisement={item}/>
        )}
        {advertisementList.length < 1 && 
          <div>Список пустий</div>
        }
      </Paper>

      <div className="flex flex-col gap-8">
        <TitleSticker text="Популярні категорії книг" />
        <div className="flex justify-around flex-wrap gap-8 w-full">
          <NavLink
            to={"/advertisements/category/Фантастика%20і%20фентезі/0"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Фантастика і фентезі
          </NavLink>
          <NavLink
            to={"/advertisements/category/Детективи/1"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Детективи
          </NavLink>
          <NavLink
            to={"/advertisements/category/Триллер/2"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Триллер
          </NavLink>
          <NavLink
            to={"/advertisements/category/Класична%20проза/3"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Класична проза
          </NavLink>
          <NavLink
            to={"/advertisements/category/Сучасна%20проза/4"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Сучасна проза
          </NavLink>
          <NavLink
            to={"/advertisements/category/Романтика/5"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Романтика
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
