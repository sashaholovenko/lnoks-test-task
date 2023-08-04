import {Article} from "../../components/news-section/news-section.tsx";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface NewsState {
    news: Article[];
    isLoading: boolean;
    error: boolean,
    count: number
}

const initialState: NewsState = {
    news: [],
    isLoading: false,
    error: false,
    count: 0
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.count += action.payload
        }
    }
})

export default newsSlice.reducer;