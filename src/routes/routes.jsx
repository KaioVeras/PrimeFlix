import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header";

import Home from '../containers/Home';
import Movie from '../containers/Movie';

import Error from "../containers/Error";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Movie/:id" element={<Movie />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;   