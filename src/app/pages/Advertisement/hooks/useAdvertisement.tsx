import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { useAddNewAdvertisementMutation, useDeleteAdvertisementMutation, useGetAdvertisementByIdMutation, useUpdateAdvertisementMutation } from "../../../../store/api/advertisement.api";
import { AdvertisementType } from "../../../../types/Advertisement";
import { useAddCategoryAdvertisementMutation, useDeleteCategoryAdvertisementMutation, useGetCategoriesMutation, useGetCategoryByAdvertisementIdMutation, useGetCategoryMutation } from "../../../../store/api/category.advertisement.api";

//types


const useAdvertisement = (
  advertisementId? : string,
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
    reset,
  } = useForm<AdvertisementType | FieldValues>();

  const { profile } = useTypedSelector((state) => state.profile);
  const { advertisement } = useTypedSelector((state) => state.advertisement);
  const { categoryAdvertisement, category, categories } = useTypedSelector((state) => state.categoryAdvertisement);
  const { setAdvertisement, setCategoryAdvertisement, setCategory, setCategories } = useActions();

  //api
  const [getAdvertisementById] = useGetAdvertisementByIdMutation();
  const [addNewAdvertisement] = useAddNewAdvertisementMutation();
  const [deleteAdvertisement] = useDeleteAdvertisementMutation();
  const [updateAdvertisement] = useUpdateAdvertisementMutation();
  const [getCategoryByAdvertisementId] = useGetCategoryByAdvertisementIdMutation();
  // const [addCategoryAdvertisement] = useAddCategoryAdvertisementMutation();
  // const [deleteCategoryAdvertisement] = useDeleteCategoryAdvertisementMutation();
  const [getCategories] = useGetCategoriesMutation();
  const [getCategory] = useGetCategoryMutation();

  const getAdvertisementByIdHandler = async (id:string) => {
    try {
      const advertisement = await getAdvertisementById(id).unwrap();
      setAdvertisement(advertisement);
    } catch (error) {}
  };
  const getCategoriesHandler = async () => {
    try {
      const advertisement = await getCategories(null).unwrap();
      console.log("GET advertisement by id", advertisement);
      console.log("advertisement id", advertisementId);
      setCategories(advertisement);
    } catch (error) {}
  };
  const getCategoryHandler = async (id:string) => {
    try {
      const category = await getCategory({id}).unwrap();
      console.log("GET category by id", category);
      console.log("category id", advertisementId);
      setCategory(category);
    } catch (error) {}
  };
  const getCategoryByAdvertisementIdHandler = async () => {
    try {
      const categoryAdvertisement = await getCategoryByAdvertisementId(advertisementId).unwrap();
      console.log("GET category Advertisement by id", advertisementId);
      console.log("categoryAdvertisement id", categoryAdvertisement);
      setCategoryAdvertisement(categoryAdvertisement);
    } catch (error) {}
  };

  const addNewAdvertisementHandler = async (formData: any) => {
    reset();
    try {
      console.log("POST add New Advertisement {formData}", formData);
      // await addNewAdvertisement({...formData, departmentId: departmentId, teacherId: teacherId, academicYearId : academicYearId }).unwrap();
      await addNewAdvertisement(formData,).unwrap();
      navigate("/advertisements/my-list");
      // getAdvertisementByIdHandler(advertisement.id.toString());
    } catch (error) {}
  };
  // const addCategoryAdvertisementHandler = async (formData: any) => {
  //   reset();
  //   try {
  //     console.log("POST addCategoryAdvertisementHandler {formData}", formData);
  //     // await addNewAdvertisement({...formData, departmentId: departmentId, teacherId: teacherId, academicYearId : academicYearId }).unwrap();
  //     await addCategoryAdvertisement(formData,).unwrap();
  //     // getAdvertisementByIdHandler();
  //   } catch (error) {}
  // };



  const deleteAdvertisementHandler = async () => {
    try {
      await deleteAdvertisement(advertisementId).unwrap();
      navigate("/");
    } catch (error) {}
  };
  // const deleteCategoryAdvertisementHandler = async () => {
  //   try {
  //     await deleteCategoryAdvertisement(advertisementId).unwrap();
  //   } catch (error) {}
  // };
  // const deleteAdvertisementByIDHandler = async (id: number) => {
  //   try {
  //     await deleteAdvertisement({ id }).unwrap();
  //     getAdvertisementByIdHandler();
  //   } catch (error) {}
  // };
  
  const updateAdvertisementHandler = async (formData: any) => {
    reset();
    try {
      console.log("PUT update Advertisement, formData: ", formData);
      console.log("advertisement.id", advertisementId)
        if(advertisementId){
          await updateAdvertisement({ id: advertisement.id.toString(), body: formData});
        }
        getAdvertisementByIdHandler(advertisement.id.toString());
    } catch (error) {}
  };

  return {
    register,
    handleSubmit,
    errors,
    backendErrors,
    getAdvertisementByIdHandler,
    addNewAdvertisementHandler,
    deleteAdvertisementHandler,
    updateAdvertisementHandler,
    getCategoryByAdvertisementIdHandler,
    // addCategoryAdvertisementHandler,
    // deleteCategoryAdvertisementHandler,
    getCategoriesHandler,
    getCategoryHandler,
    advertisement,
    profile,
    categoryAdvertisement,
    categories,
    category,
  };
};

export default useAdvertisement;
