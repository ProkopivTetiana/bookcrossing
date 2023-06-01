import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { useDeleteAdvertisementMutation, useGetAdvertisementsByCategoryMutation, useGetAdvertisementsByUserIdMutation, useGetAllAdvertisementsMutation, useSearchAdvertisementsByNameMutation } from "../../../../store/api/advertisement.api";
import { AdvertisementType } from "../../../../types/Advertisement";

//types


const useAdvertisementList = (
  advertisementId? : string,
  atId? : string,
  Id? : string,
) => {
  const navigate = useNavigate();

  const [backendErrors, setBackendErrors] = useState<null>(
    null
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<AdvertisementType | FieldValues>();

  const { profile } = useTypedSelector((state) => state.profile);
  const { advertisementList } = useTypedSelector((state) => state.advertisement);
  const { setAdvertisementList } = useActions();

  //api
  const [getAllAdvertisements] = useGetAllAdvertisementsMutation();
  const [getAdvertisementsByCategory] = useGetAdvertisementsByCategoryMutation();
  const [getAdvertisementsByUserId] = useGetAdvertisementsByUserIdMutation();
  const [searchAdvertisementsByName] = useSearchAdvertisementsByNameMutation();
  const [deleteAdvertisement] = useDeleteAdvertisementMutation();
  // const [getAdvertisementList] = useGetAdvertisementListMutation();

  const getAllAdvertisementsHandler = async () => {
    try {
      const advertisementList = await getAllAdvertisements(null).unwrap();
      console.log("GET advertisement List ", advertisementList);
      setAdvertisementList(advertisementList);
    } catch (error) {}
  };
  const getAdvertisementsByCategoryHandler = async (categoryId: string) => {
    try {
      const advertisementList = await getAdvertisementsByCategory(categoryId).unwrap();
      console.log("GET advertisement List by categoryId", advertisementList);
      console.log("advertisement categoryId", categoryId);
      setAdvertisementList(advertisementList);
    } catch (error) {}
  };
  const getAdvertisementsByUserIdHandler = async (userId: string) => {
    try {
      const advertisementList = await getAdvertisementsByUserId(userId).unwrap();
      console.log("GET advertisement List by userId", advertisementList);
      console.log("advertisement userId", userId);
      setAdvertisementList(advertisementList);
    } catch (error) {}
  };
  const searchAdvertisementsByNameHandler = async (name: string) => {
    try {
      const advertisementList = await searchAdvertisementsByName(name).unwrap();
      console.log("GET advertisement List by name", advertisementList);
      console.log("advertisement name", name);
      setAdvertisementList(advertisementList);
    } catch (error) {}
  };

  const deleteAdvertisementByIDHandler = async (id: number) => {
    try {
      console.log("DELETE advertisement by id", id);
      await deleteAdvertisement({ id }).unwrap();
    } catch (error) {}
  };

  return {
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    getAllAdvertisementsHandler,
    getAdvertisementsByCategoryHandler,
    getAdvertisementsByUserIdHandler,
    searchAdvertisementsByNameHandler,
    deleteAdvertisementByIDHandler,
    advertisementList,
    profile,
  };
};

export default useAdvertisementList;
