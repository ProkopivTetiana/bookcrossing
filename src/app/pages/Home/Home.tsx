import React from "react";
import { NavLink } from "react-router-dom";

//Components
import Layout from "../../components/Layout/Layout";
import Paper from "../../components/Paper/Paper";
import Advertisment from "../../components/Advertisment/Advertisment";

const Home = () => {
  return (
    <Layout>
      <h1>
        Книги - це мости між людьми та світами. Давайте будувати їх разом!
      </h1>
      <Paper title="Новинки" paperClassName="bg-orange-100" navLink="new">
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на завжди"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 6 місяців"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на завжди"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 1 місяць"
        />
      </Paper>
      <Paper title="Рекомендації" navLink="recommendations" isSky>
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 3 місяця"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на завжди"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 6 місяців"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на завжди"
        />
        <Advertisment
          name="Нік користувача"
          rating="Рейтинг"
          time="на 1 місяць"
        />
      </Paper>

      <div className="flex flex-col gap-8">
        <div>
          <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block">
            <span className="relative text-white">
              Популярні категорії книг
            </span>
          </span>
        </div>
        <div className="flex justify-around flex-wrap gap-8 w-full">
          <NavLink
            to={"/advertisments/category/name/0"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Категорія
          </NavLink>
          <NavLink
            to={"/advertisments/category/name/1"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Категорія
          </NavLink>
          <NavLink
            to={"/advertisments/category/name/2"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Категорія
          </NavLink>
          <NavLink
            to={"/advertisments/category/name/3"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Категорія
          </NavLink>
          <NavLink
            to={"/advertisments/category/name/4"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Категорія
          </NavLink>
          <NavLink
            to={"/advertisments/category/name/5"}
            className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100"
          >
            Категорія
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
