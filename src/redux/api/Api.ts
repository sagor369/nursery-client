import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseapi",
  tagTypes: ["categorys"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nursery-server-site.vercel.app/v1/api/",
  }),
  endpoints: () => ({}),
});
