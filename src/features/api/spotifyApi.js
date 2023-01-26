import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const spotifyApi = createApi({
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
      query: (options) => ({
        url: "/top_200_tracks",
        params: { country: "GLOBAL", period: "daily" },
      }),
    }),
    searchMusic: builder.query({
      query: (options) => {
        const { search, type } = options;
        return {
          url: "/search",
          params: {
            q: search || "omah",
            type: type || "multi",
            offset: 0,
            limit: "20",
            numberOfTopResults: 15,
          },
        };
      },
    }),
  }),
});
export const { useGetTop200Query, useSearchMusicQuery } = spotifyApi;
