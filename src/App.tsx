import {useAppDispatch, useAppSelect} from "./hooks.ts";
import {
    selectTVCurrentShow,
    selectTVLoading,
    selectTVSearchShows
} from "./features/TVSeries/TVSeriesSlice.ts";

const App = () => {
    const dispatch = useAppDispatch();
    const searchShows = useAppSelect(selectTVSearchShows);
    const currentShow = useAppSelect(selectTVCurrentShow);
    const loading = useAppSelect(selectTVLoading);

    return (
        <>
        </>
    )
}

export default App
