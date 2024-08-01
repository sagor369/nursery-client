import { baseApi } from "../api/Api";
type Tquery = {
  title: string 
  value : string
}

const PlantsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlants: build.query({
      query: (query) => {
        const params = new URLSearchParams()
        if(query){
          query.forEach((element:Tquery) => {
            params.append(element.title, element.value)
          });
        }
       
        return {
          url: "/plants",
          method: "GET",
          params
        };
      },
    }),
    getSinglePlant: build.query({
      query: ( id ) => {
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