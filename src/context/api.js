import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: ([path, params]) => {
        if (params) {
          path += "?";
          Object.entries(params).forEach(([a, b]) => {
            path += `${a}=${b}&`;
          });
          return path.slice(0, -1);
        } else {
          return path;
        }
      },
      providesTags: (result) =>
        result?.length
          ? [
              ...result.map(({ id }) => ({ type: "Posts", id })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery } = api;