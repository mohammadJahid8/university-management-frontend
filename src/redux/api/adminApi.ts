import { IAdmin, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const ADMIN_URL = "/admins";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    admins: build.query({
      query: (arg: Record<string, any>) => ({
        url: ADMIN_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IAdmin[], meta: IMeta) => {
        return {
          admins: response,
          meta: meta,
        };
      },
      providesTags: [tagTypes.admin],
    }),

    addAdminWithFormData: build.mutation({
      query: (data) => ({
        url: `/users/create-admin`,
        method: "POST",
        data,
        contentType: "multipart/form-data",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAddAdminWithFormDataMutation, useAdminsQuery } = adminApi;
