import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { UpdateUserRequestType } from "../../types/UserType";
import { AddAdvertisementType, UpdateAdvertisementRequestType } from "../../types/Advertisement";

//types

export const advertisementApi = createApi({
  reducerPath: "advertisementApi",
  baseQuery,
  endpoints: (builder) => ({
    getAllAdvertisements: builder.mutation({
        query: () => ({
          url: "/advertisement",
          method: "GET",
        }),
      }),
    getAdvertisementById: builder.mutation({
      query: ({id}) => ({
        url: `/advertisement/${id}`,
        method: "GET",
      }),
    }),
    getAdvertisementsByCategory: builder.mutation({
      query: ({categoryId}) => ({
        url: `/advertisement/categories/${categoryId}`,
        method: "GET",
      }),
    }),
    getAdvertisementsByUserId: builder.mutation({
      query: ({userId}) => ({
        url: `/advertisement/profile/${userId}`,
        method: "GET",
      }),
    }),
    searchAdvertisementsByName: builder.mutation({
      query: ({name}) => ({
        url: `/advertisement/${name}`,
        method: "GET",
      }),
    }),

    addNewAdvertisement: builder.mutation<
        MessageResponseType,
        AddAdvertisementType
    >({
        query: (body) => ({
        url: "/advertisement",
        method: "POST",
        body,
        }),
    }),

    deleteAdvertisement: builder.mutation({
      query: ({ id }) => ({
        url: `/advertisement/${id}`,
        method: "DELETE",
      }),
    }),

    updateAdvertisement: builder.mutation<
      MessageResponseType,
      UpdateAdvertisementRequestType
    >({
      query: ({ id, body }) => ({
        url: `/advertisement/${id}`,
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
