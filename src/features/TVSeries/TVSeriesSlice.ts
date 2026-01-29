import type {IShow, IShowAPI} from "../../types";
import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";

interface TVSeriesState {
    currentShow: IShowAPI | null,
    shows: IShow[],
    loading: {
        loadingFetchSearch: boolean,
        loadingFetchShow: boolean,
    }
}

const initialState: TVSeriesState = {
    currentShow: null,
    shows: [],
    loading: {
        loadingFetchSearch: false,
        loadingFetchShow: false,
    }
}

const TVSeriesSlice = createSlice({
    name: 'TVSeries',
    initialState,
    reducers: {}
})

export const selectTVSearchShows = (state: RootState) => state.TVSeries.shows;
export const selectTVCurrentShow = (state: RootState) => state.TVSeries.currentShow;
export const selectTVLoading = (state: RootState) => state.TVSeries.loading;

export const TVSeriesReducer = TVSeriesSlice.reducer;
