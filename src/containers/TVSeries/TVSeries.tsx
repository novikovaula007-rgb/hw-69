import {Box, TextField} from "@mui/material";
import {useAppDispatch, useAppSelect} from "../../hooks.ts";
import {selectTVCurrentShow, selectTVLoading, selectTVSearchShows} from "../../features/TVSeries/TVSeriesSlice.ts";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const TvSeries = () => {
    const dispatch = useAppDispatch();
    const searchShows = useAppSelect(selectTVSearchShows);
    const currentShow = useAppSelect(selectTVCurrentShow);
    const loading = useAppSelect(selectTVLoading);

    const [isFocused, setIsFocused] = useState(false);

    const searchBlockStyles = {
        height: 300,
        width: '40%',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderTop: 'none',
        display: 'none',
        p: 2,
        borderRadius: 2,
        position: 'absolute',
    }

    if (isFocused) {
        searchBlockStyles.display = 'block'
    }

    return (
        <Box sx={{position: 'relative'}}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                sx={{width: '40%'}}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            <Box
                sx={searchBlockStyles}
            >
                {searchShows.map(show => {
                    return show.name;
                })}
            </Box>
            <Outlet/>
        </Box>
    );
};

export default TvSeries;