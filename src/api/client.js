import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export async function client(endpoint, params) {
  const headers = {
    "X-RapidAPI-Key": "c3e2bac3bdmsh0809d1a9d148a34p159e0ejsn6b5915de7555",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  };

  const api = axios.create({
    baseURL: `https://spotify81.p.rapidapi.com/${endpoint}`,
    headers: { ...headers },
  });
  const options = {
    params: params ? { ...params } : null,
  };

  let data;
  try {
    const response = await api.request(options);
    const { url, status, headers } = response;
    data = response.data;
    if (response.statusText === "OK") {
      return {
        data,
        headers,
        status,
        url,
      };
    }
    throw new Error(response.statusText);
  } catch (err) {
    return Promise.reject(err.message ? err.message : data);
  }
}

export default client;
