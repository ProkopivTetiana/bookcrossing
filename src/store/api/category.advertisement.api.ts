import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { UpdateUserRequestType } from "../../types/UserType";
import { CategoryAdvertisementType } from "../../types/CategoryType";

//types

export const categoryAdvertisementApi = createApi({
  reducerPath: "categoryAdvertisementApi",
  baseQuery,
  endpoints: (builder) => ({
    getCategories: builder.mutation({
      query: () => ({
        url: `/categories`,
        method: "GET",
      }),
    }),
    getCategory: builder.mutation({
      query: ({id}) => ({
        url: `/categories/${id}`,
        method: "GET",
      }),
    }),
    getCategoryByAdvertisementId: builder.mutation({
      query: ({advertisementId}) => ({
        url: `/categories/advertisements/${advertisementId}`,
        method: "GET",
      }),
    }),

    addCategoryAdvertisement: builder.mutation<
        MessageResponseType,
        CategoryAdvertisementType
    >({
        query: (body) => ({
        url: "/categories/advertisements",
        method: "POST",
        body,
        }),
    }),

    deleteCategoryAdvertisement: builder.mutation({
      query: ({ id }) => ({
        url: `/categories/advertisements/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoryByAdvertisementIdMutation,
  useAddCategoryAdvertisementMutation,
  useDeleteCategoryAdvertisementMutation,
  useGetCategoriesMutation,
  useGetCategoryMutation,
} = categoryAdvertisementApi;
