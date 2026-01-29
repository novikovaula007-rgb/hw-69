import {configureStore} from "@reduxjs/toolkit";
import {TVSeriesReducer} from "../features/TVSeries/TVSeriesSlice.ts";

export const store = configureStore({
    reducer: {
        TVSeries: TVSeriesReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
