import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovies } from "../../api/api";
import { MovieCardComponent } from "../../components/MovieCard/MovieCard";
import { ApiResponse } from "../../interfaces/ApiResponse";
import { Movie } from "../../interfaces/Movie";
import "./Movies.scss";

function MoviesPageComponent() {
    const [checkedPopularMovie, setCheckedPopularMovie] = useState<boolean>(true);
    const [checkedUpcomingMovie, setcheckedUpcomingMovie] = useState<boolean>(true);
    const [checkedTopRatedMovie, setcheckedTopRatedMovie] = useState<boolean>(true);
    const [movies, setMovies] = useState<Movie[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        getPopularMovies();
        getUpComingMovies();
        getTopRatedMovie();
    }, []);

    const getPopularMovies = async () => {
        const endPoint = "/movie/popular";
        const response = await getMovies<ApiResponse<Movie[]>>(endPoint);
        setMovies(movies ? [...response.results, ...movies] : [...response.results]);
    };

    const getUpComingMovies = async () => {
        const endPoint = "/movie/upcoming";
        const response = await getMovies<ApiResponse<Movie[]>>(endPoint);
        setMovies(movies ? [...response.results, ...movies] : [...response.results]);
    };

    const getTopRatedMovie = async () => {
        const endPoint = "/movie/top_rated";
        const response = await getMovies<ApiResponse<Movie[]>>(endPoint);
        setMovies(movies ? [...response.results, ...movies] : [...response.results]);
    };
    const handleMovieClick = (movie: Movie) => {
        if (movie) {
            navigate(`/movie/${movie.id}`);
        }
    };

    const renderMoviesList = () => {
        const moviesList = movies?.map((movie, index) => {
            return (
                <div className="col-2" key={index}>
                    <MovieCardComponent movie={movie} handleMovieClick={handleMovieClick} />
                </div>
            );
        });
        return moviesList;
    };

    const handleClick = () => {
        console.log(checkedPopularMovie);
        console.log(checkedUpcomingMovie);
        console.log(checkedTopRatedMovie);
        if (checkedPopularMovie && checkedUpcomingMovie && checkedTopRatedMovie) {
            setMovies([]);
            getPopularMovies();
            getUpComingMovies();
            getTopRatedMovie();
        } else if (checkedPopularMovie && checkedUpcomingMovie) {
            setMovies([]);
            getPopularMovies();
            getUpComingMovies();
        } else if (checkedUpcomingMovie && checkedTopRatedMovie) {
            setMovies([]);
            getUpComingMovies();
            getTopRatedMovie();
        } else if (checkedTopRatedMovie && checkedPopularMovie) {
            setMovies([]);
            getPopularMovies();
            getTopRatedMovie();
        } else if (checkedPopularMovie) {
            setMovies([]);
            getPopularMovies();
        } else if (checkedUpcomingMovie) {
            setMovies([]);
            getUpComingMovies();
        } else if (checkedTopRatedMovie) {
            setMovies([]);
            getTopRatedMovie();
        }
    };

    return (
        <div className="movies-page">
            <div className="filter">
                <div className="title">
                    {" "}
                    <h4>Filter</h4>{" "}
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={() => {setCheckedPopularMovie(!checkedPopularMovie); handleClick();} }
                        checked={checkedPopularMovie}
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Popular
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={() => {setcheckedUpcomingMovie(!checkedUpcomingMovie); handleClick();}}
                        checked={checkedUpcomingMovie}
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Top Rated
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        onChange={() => {setcheckedTopRatedMovie(!checkedTopRatedMovie); handleClick();}}
                        checked={checkedTopRatedMovie}
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                    />
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Upcoming
                    </label>
                </div>
            </div>
            <div className="movies-list">
                <div className="row">{renderMoviesList()}</div>
            </div>
        </div>
    );
}

export default MoviesPageComponent;
