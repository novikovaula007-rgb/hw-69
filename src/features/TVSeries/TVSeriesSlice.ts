import type {IShow, IShowAPI, IShowAPIMutation} from "../../types";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import type {RootState} from "../../app/store.ts";
import {axiosAPI} from "../../axiosAPI.ts";

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

export const fetchSearch = createAsyncThunk<IShow[], string>(
    'TVSeries/fetchSearch',
    async (name) => {
        const response = await axiosAPI.get<IShowAPIMutation[]>(`/search/shows?q=${name}`);
        return response.data.map(showSearch => {
            return {
                id: showSearch.show.id,
                name: showSearch.show.name
            }
        })
    }
)

export const fetchShow = createAsyncThunk<IShowAPI, number>(
    'TVSeries/fetchShow',
    async (id) => {
        const response = await axiosAPI.get<IShowAPIMutation>(`shows/${id}`);
        const showData = response.data;
        return {
            id: showData.show.id,
            name: showData.show.name,
            image: showData.show.image.medium,
            description: showData.show.summary,
            genres: showData.show.genres,
        };
    }
)

const TVSeriesSlice = createSlice({
    name: 'TVSeries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.shows = action.payload;
                state.loading.loadingFetchSearch = false;
            })
            .addCase(fetchSearch.pending, (state) => {
                state.loading.loadingFetchSearch = true;
            })
            .addCase(fetchSearch.rejected, (state) => {
                state.loading.loadingFetchSearch = false;
            })
            .addCase(fetchShow.fulfilled, (state, action) => {
                state.currentShow = action.payload;
                state.loading.loadingFetchShow = false;
            })
            .addCase(fetchShow.pending, (state) => {
                state.loading.loadingFetchShow = true;
            })
            .addCase(fetchShow.rejected, (state) => {
                state.loading.loadingFetchShow = false;
            })
    }
})

export const selectTVSearchShows = (state: RootState) => state.TVSeries.shows;
export const selectTVCurrentShow = (state: RootState) => state.TVSeries.currentShow;
export const selectTVLoading = (state: RootState) => state.TVSeries.loading;

export const TVSeriesReducer = TVSeriesSlice.reducer;
