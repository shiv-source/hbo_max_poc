import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { HeaderComponent } from "./components/Header/Header";
import showRoutes from "./routes/routes";

function App() {
    return (
        <BrowserRouter>
            <HeaderComponent />
            <Routes>{showRoutes}</Routes>
        </BrowserRouter>
    );
}

export default App;
