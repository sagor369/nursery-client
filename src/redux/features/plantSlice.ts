import { baseApi } from "../api/Api";

const PlantsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlants: build.query({
      query: (query) => {
        return {
          url: "/plants",
          method: "GET",
          params: query,
        };
      },
    }),
    getSinglePlant: build.query({
      query: ( id ) => {
        console.log(id)
        return {
          url: `/plants/${id}`,
          method: "GET",
        };
      },
    }),
    createPlant: build.mutation({
      query: (body) => {
        return {
          url: `/plants/create-plant`,
          method: "POST",
          body,
        };
      },
    }),
    updatePlant: build.mutation({
      query: ({ id, body }) => {
        return {
          url: `/plants/${id}`,
          method: "PATCH",
          body,
        };
      },
    }),
    deletePlant: build.mutation({
      query: ({ id }) => {
        return {
          url: `/plants/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {useGetPlantsQuery, useGetSinglePlantQuery, useCreatePlantMutation, useUpdatePlantMutation, useDeletePlantMutation} =PlantsApi