import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const baseApi = createApi({
  reducerPath: 'baseapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/v1/api/' }),
  endpoints: () => ({})
})