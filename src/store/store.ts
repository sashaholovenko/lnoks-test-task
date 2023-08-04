import {combineReducers, configureStore} from "@reduxjs/toolkit";
import newsReducer from "./reducers/NewsSlice.ts"
import {newsAPI} from "../services/news-service.ts";

const rootReducer = combineReducers({
    newsReducer,
    [newsAPI.reducerPath]: newsAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(newsAPI.middleware)

    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']