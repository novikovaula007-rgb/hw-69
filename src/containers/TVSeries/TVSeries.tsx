import {Box, TextField} from "@mui/material";
import {useAppDispatch, useAppSelect} from "../../hooks.ts";
import {selectTVCurrentShow, selectTVLoading, selectTVSearchShows} from "../../features/TVSeries/TVSeriesSlice.ts";
import {Outlet} from "react-router-dom";

const TvSeries = () => {
    const dispatch = useAppDispatch();
    const searchShows = useAppSelect(selectTVSearchShows);
    const currentShow = useAppSelect(selectTVCurrentShow);
    const loading = useAppSelect(selectTVLoading);

    return (
        <>
            <TextField id="outlined-basic" variant="outlined"/>
            <Box></Box>
            <Outlet/>
        </>
    );
};

export default TvSeries;