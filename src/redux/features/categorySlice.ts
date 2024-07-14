import { baseApi } from "../api/Api";

const CategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getcategory: build.query({
      query: (query) => {
        return {
          url: "/category",
          method: "GET",
          params: query,
        };
      },
      providesTags: ["categorys"]
    }),
    getSingleCategory: build.query({
      query: ({ id }) => {
        return {
          url: `/category/${id}`,
          method: "GET",
        };
      },
    }),
    createCategory: build.mutation({
      query: (body) => {
        console.log(body)
        return {
          url: `/category/create-category`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["categorys"]
    }),
    updateCategory: build.mutation({
      query: ({ id, body }) => {
        return {
          url: `/category/${id}`,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["categorys"]
    }),
    deleteCategory: build.mutation({
      query: ({ id }) => {
        return {
          url: `/category/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["categorys"]
    }),
  }),
});

export const {useGetcategoryQuery, useGetSingleCategoryQuery, useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation} =CategoryApi