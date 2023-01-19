import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const spotifySlice = createApi({
  reducerPath: "spotify",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://spotify81.p.rapidapi.com`,
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c3e2bac3bdmsh0809d1a9d148a34p159e0ejsn6b5915de7555"
      );
      headers.set("X-RapidAPI-Host", "spotify81.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTop200: builder.query({
      query: ({ country }) => ({
        url: "/charts/top_200_tracks",
        params: { country: country },
      }),
    }),
    searchMusic: builder.query({
      query: ({ options }) => {
        const { q, type, offset } = options;
        return {
          url: "/search",
          params: {
            q,
            type: type || "multi",
            offset: offset || 0,
            limit: 10,
            numberOfTopResults,
          },
        };
      },
    }),
  }),
});
