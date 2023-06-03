import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { UpdateUserRequestType } from "../../types/UserType";
import { AddAdvertisementType, AdvertisementType, UpdateAdvertisementRequestType } from "../../types/Advertisement";

//types
type LocalType = {
  title: string;
};

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllAdvertisements: builder.mutation({
        query: () => ({
          url: "/advertisements",
          method: "GET",
        }),
      }),
    getAdvertisementById: builder.mutation({
      query: (id) => ({
        url: `/advertisements/${id}`,
        method: "GET",
      }),
    }),
    getAdvertisementsByCategory: builder.mutation({
      query: (categoryId) => ({
        url: `/advertisements/categories/${categoryId}`,
        method: "GET",
      }),
    }),
    getAdvertisementsByUserId: builder.mutation({
      query: (userId) => ({
        url: `/advertisements/profile/${userId}`,
        method: "GET",
      }),
    }),
    searchAdvertisementsByName: builder.mutation<
      AdvertisementType[],
      LocalType
    >({
      query: (body) => ({
        url: `/advertisements/search`,
        method: "GET",
        body,
      }),
    }),

    addNewAdvertisement: builder.mutation<
        MessageResponseType,
        AddAdvertisementType
    >({
        query: (body) => ({
        url: "/advertisements",
        method: "POST",
        body,
        }),
    }),

    deleteAdvertisement: builder.mutation({
      query: ({ id }) => ({
        url: `/advertisements/${id}`,
        method: "DELETE",
      }),
    }),

    updateAdvertisement: builder.mutation<
      MessageResponseType,
      UpdateAdvertisementRequestType
    >({
      query: ({ id, body }) => ({
        url: `/advertisements/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllAdvertisementsMutation,
  useGetAdvertisementByIdMutation,
  useGetAdvertisementsByCategoryMutation,
  useGetAdvertisementsByUserIdMutation,
  useSearchAdvertisementsByNameMutation,
  useAddNewAdvertisementMutation,
  useDeleteAdvertisementMutation,
  useUpdateAdvertisementMutation,
} = advertisementApi;
