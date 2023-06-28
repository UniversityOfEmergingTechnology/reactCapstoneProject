import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// this file defines and API service using Redux toolkit's rtk query

// create api = this function is used to configure api endpoints

// fetchBaseQuery = this is default method of making requests provided by rtk query. It uses fetch under the hood

export const articleApi = createApi({
    // this specifies the key in redux store under which data from this api will be stored
    reducerPath:'articleApi',
    // it will just allow you set base url and headers for your api request .
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders : (headers) => {
            headers.set('X-RapidAPI-Key' , '9d4abb4037mshe981a7a02b226cep1961d5jsn3eefddf38603')
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com')
            return headers
        }
    }),
    // in this we define api endpoints i.e. for our case we are having 2 parameter i.e url and length and we will make a get request to summarize endpoint of our api
    endpoints : (builder) => ({
        getSummary : builder.query({
            // encodeURIComponent
            query : (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
})
// rtk query automatically generates react hooks for your endpoints this is a hook for get summary endpoint.
export const {useLazyGetSummaryQuery} = articleApi