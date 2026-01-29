import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import {store} from "./app/store.ts";
import {Provider} from "react-redux";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <CssBaseline/>
                <App/>
                <ToastContainer/>
            </Provider>
        </BrowserRouter>
    </StrictMode>,
)
