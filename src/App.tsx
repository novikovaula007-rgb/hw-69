import {Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import TVSeries from "./containers/TVSeries/TVSeries.tsx";
import TVSeriesCard from "./containers/TVSeriesCard/TVSeriesCard.tsx";
import NotFoundPage from "./containers/NotFoundPage/NotFoundPage.tsx";

const App = () => {
    return (
        <>
            <main>
                <Container maxWidth='lg' sx={{mt: 6}}>
                    <Routes>
                        <Route path='/' element={<TVSeries/>}/>
                        <Route path='/shows' element={<TVSeries/>}>
                            <Route path='/shows/:idShow' element={<TVSeriesCard/>}/>
                        </Route>
                        <Route path='*' element={<NotFoundPage/>}/>
                    </Routes>
                </Container>
            </main>
        </>
    )
}

export default App
