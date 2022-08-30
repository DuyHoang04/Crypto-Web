import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  "X-RapidAPI-Key": "abd49d2e9dmshf5e9823b62fa833p145124jsnc840d5371bc9",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeader,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      //useGetCryptosQuery
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptosLineChart: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`/coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),
    getExchanges: builder.query({
      query: () => createRequest("coin/Qwsogvtv82FCd/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptosDetailsQuery,
  useGetCryptosLineChartQuery,
  useGetExchangesQuery,
} = cryptoApi;
