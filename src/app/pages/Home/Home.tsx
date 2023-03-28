import React from "react";

import { NavLink } from "react-router-dom";

//hooks

//Components
import Layout from "../../components/Layout/Layout";
import Paper from "../../components/Paper/Paper";
import Advertisment from "../../components/Advertisment/Advertisment";


const Home = () => {
  return (
    <Layout>
        <h1>Книги - це мости між людьми та світами. Давайте будувати їх разом!</h1>
        <Paper title="Новинки" paperClassName="bg-orange-100">
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на 3 місяця"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на завжди"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на 6 місяців"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на завжди"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на 1 місяць"/> 
        </Paper>
        <Paper title="Рекомендації" paperClassName="bg-sky-100 shadow-sky-400">
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на 3 місяця"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на завжди"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на 6 місяців"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на завжди"/>    
            <Advertisment  paperClassName="" name="Нік користувача" rating="Рейтинг" time="на 1 місяць"/> 
        </Paper>

        <div className="flex flex-col gap-8">
            <div>
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-400 relative inline-block">
                  <span className="relative text-white">Популярні категорії книг</span>
                </span>
            </div>
            
            <div className="flex justify-around flex-wrap gap-8 w-full">
                <NavLink to={""} className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100">Категорія</NavLink>
                <NavLink to={""} className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100">Категорія</NavLink>
                <NavLink to={""} className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100">Категорія</NavLink>
                <NavLink to={""} className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100">Категорія</NavLink>
                <NavLink to={""} className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100">Категорія</NavLink>
                <NavLink to={""} className="flex justify-center rounded-xl border-dashed cursor-pointer border-2 border-orange-600 py-4 w-3/12 hover:bg-orange-100">Категорія</NavLink>
            </div>
        </div>
        

    </Layout>
  );
};

export default Home;
