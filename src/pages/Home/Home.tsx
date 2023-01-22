import React, { useState, useEffect } from "react";
import './Home.scss';
import OwlCarousel from "react-owl-carousel";
import { getMovies } from "../../api/api";
import { CategoryComponent } from "../../components/Category/CategoryComponent";
import { MovieListComponent } from "../../components/MovieList/MovieList";
import { ApiResponse } from "../../interfaces/ApiResponse";
import { Movie } from "../../interfaces/Movie";


function HomeComponent() {
    const [popularMovie, setPopularMovie] = useState<ApiResponse<Movie[]>>();
    const [upcomingMovie, setUpcomingMovie] = useState<ApiResponse<Movie[]>>();
    const [topRatedMovie, setTopRatedMovie] = useState<ApiResponse<Movie[]>>();

    useEffect(() => {
        getPopularMovies();
        getUpComingMovies();
        getTopRatedMovie();
    }, []);

    const getPopularMovies = async () => {
        const endPoint = "/movie/popular";
        const response = await getMovies<ApiResponse<Movie[]>>(endPoint);
        setPopularMovie(response);
    };

    const getUpComingMovies = async () => {
        const endPoint = "/movie/upcoming";
        const response = await getMovies<ApiResponse<Movie[]>>(endPoint);
        setUpcomingMovie(response);
    };

    const getTopRatedMovie = async () => {
        const endPoint = "/movie/top_rated";
        const response = await getMovies<ApiResponse<Movie[]>>(endPoint);
        setTopRatedMovie(response);
    };

    const renderUpcomingMovie = () => {
        if (upcomingMovie?.results.length) {
            return <div className="title">UpComing Movies</div>;
        }
    };

    return (
        <div className="home">
            <div className="featured-movies">
                <OwlCarousel
                    items={1}
                    className="owl-theme"
                    nav={true}
                    loop={true}
                    dots={false}
                    center={true}
                    lazyLoad={true}
                    autoplay={true}
                    autoplayTimeout={3000}
                    margin={10}
                >
                    {<MovieListComponent data={popularMovie?.results} isBanner={true} />}
                </OwlCarousel>
            </div>
            <div className="categories">
                <CategoryComponent data={popularMovie?.results} categoryName="Popular Movies" />
                <CategoryComponent data={upcomingMovie?.results} categoryName="Upcoming Movies" />
                <CategoryComponent data={topRatedMovie?.results} categoryName="Top Rated Movies" />
            </div>
        </div>
    );
}

export default HomeComponent;
