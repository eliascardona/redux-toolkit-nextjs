import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const boostedDataFetcher = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://pokeapi.co/api/v2"
    }) ,
    endpoints: (builder) => ({
        getPokemons: builder.query({
            query: (queryParams)=> `/pokemon/?offset=${queryParams.offset}&limit=${queryParams.limit}`
        }),
        getPokemonObj: builder.query({
            query: (name)=> `/pokemon/${name}/`
        }),
    }) 
})


export const { useGetPokemonsQuery, useGetPokemonObjQuery } = boostedDataFetcher