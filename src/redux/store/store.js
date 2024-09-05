import { configureStore } from '@reduxjs/toolkit'
import { boostedDataFetcher } from '@/redux/api/reduxAPI'
import { dataSliceReducer } from '@/redux/reducers/dataSlice'

const reduxStore = configureStore({
    reducer: {
        pokemonsState: dataSliceReducer,
        [boostedDataFetcher.reducerPath]: boostedDataFetcher.reducer
    },
    middleware: (getDefaultMiddleware) => {
        getDefaultMiddleware()
        .concat(boostedDataFetcher.middleware)
    }
})

export { reduxStore }