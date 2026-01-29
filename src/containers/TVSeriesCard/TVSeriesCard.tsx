import {Grid, Typography} from "@mui/material";
import {fetchShow, selectTVCurrentShow, selectTVLoading} from "../../features/TVSeries/TVSeriesSlice.ts";
import {useAppDispatch, useAppSelect} from "../../hooks.ts";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import Spinner from "../../components/UI/Spinner/Spinner.tsx";

const TvSeriesCard = () => {
    const currentShow = useAppSelect(selectTVCurrentShow);
    const dispatch = useAppDispatch();
    const loading = useAppSelect(selectTVLoading);
    const {idShow} = useParams()

    useEffect(() => {
        dispatch(fetchShow(Number(idShow)))
    }, [dispatch, idShow])

    if (currentShow && !loading.loadingFetchShow) {
        return (
            <Grid container spacing={5}>
                <Grid size={5}>
                    <img alt={currentShow.name} src={currentShow.image}/>
                </Grid>
                <Grid size={7}>
                    <Typography variant='h4'>{currentShow.name}</Typography>
                    <Typography variant='h6'>{currentShow.genres.map(genre => {
                        return <Typography sx={{display: 'inline', marginRight: '5px', color: 'gray'}}>{genre}</Typography>
                    })}</Typography>
                    <Typography dangerouslySetInnerHTML={{__html: currentShow.description}}></Typography>
                </Grid>
            </Grid>
        );
    } else if (loading.loadingFetchShow) {
        return <Spinner/>
    } else {
        return 'There is no show with that name.'
    }


};

export default TvSeriesCard;