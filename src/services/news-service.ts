import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {ServerResponse} from "../models/types.ts";


export const newsAPI = createApi({
    reducerPath: "newsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://newsapi.org/v2"}),
    endpoints: (build) => ({
        fetchAllNews: build.query<ServerResponse, number>({
            query: (limit: number = 10) => ({
                url: `/top-headlines`,
                params: {
                    country: 'us',
                    pageSize: limit,
                    apiKey: "c8e2c2fd02db4618853590ef8e92c64c"
                }
            })
        })
    })
})