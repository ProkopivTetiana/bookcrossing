import { createApi } from "@reduxjs/toolkit/query/react";
import { FieldValues } from "react-hook-form";
import { baseQuery } from "../baseQuery";
import { MessageResponseType } from "../../types/GlobalType";
import { UpdateUserRequestType } from "../../types/UserType";

//types

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery,
  endpoints: (builder) => ({
    getUser: builder.mutation({
        query: () => ({
          url: "/profile",
          method: "GET",
        }),
      }),
      getUserName: builder.mutation({
        query: () => ({
          url: "/profile/name/{id}",
          method: "GET",
        }),
      }),
      
    updateUser: builder.mutation<
      MessageResponseType,
      UpdateUserRequestType
    >({
      query: ({ id, body }) => ({
        url: `/profile`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useGetUserMutation,
  useGetUserNameMutation,
  useUpdateUserMutation,
} = profileApi;
