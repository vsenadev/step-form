import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import {useEffect, useState} from "react";
import HomeMobile from "./Pages/HomeMobile/HomeMobile";

export default function AppRouter() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <BrowserRouter>
            <Routes>
                {
                    windowWidth > 475 ?
                        <Route path='/' element={<Home/>}/>
                    :
                        <Route path='/' element={<HomeMobile/>}/>
                }
            </Routes>
        </BrowserRouter>
    )
}