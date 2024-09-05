import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    offset:0,
    limit:20,
    pokemonPreSelected:{},
    pokemonObj:null
}

export const dataSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers:{
        nextPage: (state, action) => {
            if(state.offset != 120){
                return { ...state, offset: state.offset + 20, limit: 20 }
            }
            return { ...state, offset: state.offset + 20, limit: 10, metadata: {...action} }
        },
        prevPage: (state, action) => {
            return { ...state, offset: state.offset - 20, limit: 20, metadata: {...action} }
        },
        setPokemonPreSelected: (state, action) => {
            return { ...state, pokemonPreSelected: action.payload, metadata: {...action} }
        },
        setPokemonObj: (state, action) => {
            return { ...state, pokemonObj: action.payload, metadata: {...action} }
        }        
    }

})

const {
    nextPage,
    prevPage,
    setPokemonPreSelected,
    setPokemonObj
} = pokemonSlice.actions

const dataSliceReducer = dataSlice.reducer


export {
    dataSliceReducer,
    nextPage,
    prevPage,
    setPokemonPreSelected,
    setPokemonObj
}