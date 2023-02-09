import { Route } from "react-router-dom";
import AboutComponent from "../pages/About/About";
import HomeComponent from "../pages/Home/Home";
import MovieDetailsComponent from "../pages/MovieDetails/MovieDetails";
import MoviesPageComponent from "../pages/Movies/Movies";

const routes: Array<{ path: string; component: JSX.Element }> = [
    {
        path: "/",
        component: <HomeComponent />,
    },
    {
        path: "/movies",
        component: <MoviesPageComponent />,
    },
    {
        path: "/movie/:id",
        component: <MovieDetailsComponent />,
    },
    {
        path: "/about",
        component: <AboutComponent />,
    },
];

const showRoutes: JSX.Element[] = routes.map((route, index) => (
    <Route path={route.path} element={route.component} key={index} />
));

export default showRoutes;
