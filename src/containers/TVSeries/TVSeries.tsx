import {Box, CircularProgress, Grid, TextField, Typography} from "@mui/material";
import {useAppDispatch, useAppSelect} from "../../hooks.ts";
import {
    fetchSearch,
    selectTVLoading,
    selectTVSearchShows
} from "../../features/TVSeries/TVSeriesSlice.ts";
import {NavLink, Outlet} from "react-router-dom";
import {useState} from "react";
import React from "react";

const TvSeries = () => {
    const dispatch = useAppDispatch();
    const searchShows = useAppSelect(selectTVSearchShows);
    const loading = useAppSelect(selectTVLoading);
    const [formText, setFormText] = useState('');

    const fetchShows = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormText(event.target.value);
        await dispatch(fetchSearch(event.target.value));
    }

    const searchBlockStyles = {
        height: 200,
        width: '100%',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderTop: 'none',
        display: 'block',
        p: 2,
        borderRadius: 2,
        position: 'absolute',
    }

    return (
        <Box>
            <Grid container spacing={5}>
                <Grid size={6} sx={{position: 'relative'}}>
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        sx={{width: '100%'}}
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
                        {searchShows.length > 0 && searchShows.map(show => {
                            return <Typography
                                key={show.id}
                                component={NavLink}
                                to={`/shows/${show.id}`}
                                sx={{
                                    display: 'block',
                                    textDecoration: 'none',
                                    color: 'black',
                                }}
                                onClick={() => setFormText(show.name)}
                            >{show.name}</Typography>;
                        })}
                        {searchShows.length === 0 && formText.length > 0 && 'There is no show with that name.'}
                        {searchShows.length === 0 && formText.length === 0 && 'Enter the name of the TV series...'}
                    </Box>
                </Grid>

                <Grid size={6}>
                    <Outlet/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default TvSeries;