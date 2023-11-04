import { IDepartment, IMeta } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/management-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    departments: build.query({
      query: (arg: Record<string, any>) => ({
        url: DEPARTMENT_URL,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDepartment, meta: IMeta) => {
        return {
          departments: response,
          meta: meta,
        };
      },
      providesTags: [tagTypes.department],
    }),

    department: build.query({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.department],
    }),

    addDepartment: build.mutation({
      query: (data) => ({
        url: `${DEPARTMENT_URL}/create-department`,
        method: "POST",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    updateDepartment: build.mutation({
      query: ({ data, id }) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
    deleteDepartment: build.mutation({
      query: (id) => ({
        url: `${DEPARTMENT_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const {
  useDepartmentsQuery,
  useDepartmentQuery,
  useAddDepartmentMutation,
  useUpdateDepartmentMutation,
  useDeleteDepartmentMutation,
} = departmentApi;
