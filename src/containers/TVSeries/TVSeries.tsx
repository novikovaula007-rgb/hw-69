import {Box, CircularProgress, InputAdornment, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelect} from "../../hooks.ts";
import {
    fetchSearch,
    selectTVCurrentShow,
    selectTVLoading,
    selectTVSearchShows
} from "../../features/TVSeries/TVSeriesSlice.ts";
import {Outlet} from "react-router-dom";
import {useState} from "react";
import React from "react";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const TvSeries = () => {
    const dispatch = useAppDispatch();
    const searchShows = useAppSelect(selectTVSearchShows);
    const currentShow = useAppSelect(selectTVCurrentShow);
    const loading = useAppSelect(selectTVLoading);

    const [isFocused, setIsFocused] = useState(false);
    const [formText, setFormText] = useState('');

    const fetchShows = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormText(event.target.value);
        await dispatch(fetchSearch(event.target.value));
        console.log(loading)
    }

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
                value={formText}
                onChange={fetchShows}
                InputProps={{
                    endAdornment: (
                        <React.Fragment>
                            {loading.loadingFetchSearch ? <CircularProgress color="inherit" size={20}/> : null}
                        </React.Fragment>
                    ),
                }}
            />
            <Box
                sx={searchBlockStyles}
            >
                {searchShows.map(show => {
                    return <Typography key={show.id}>{show.name}</Typography>;
                })}
            </Box>
            <Outlet/>
        </Box>
    );
};

export default TvSeries;