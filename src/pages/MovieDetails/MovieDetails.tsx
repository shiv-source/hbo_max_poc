import React, { useEffect, useState } from "react";
import './MovieDetails.scss';
import { useParams } from "react-router-dom";
import { getMovieImageUrl, getMovies, TmdbImageWidth } from "../../api/api";
import { CategoryComponent } from "../../components/Category/CategoryComponent";
import { ApiResponse } from "../../interfaces/ApiResponse";
import { Movie, MovieDetails } from "../../interfaces/Movie";

function MovieDetailsComponent() {
    const [movie, setMovie] = useState<MovieDetails>();
    const [similarMovie, setSimilarMovie] = useState<ApiResponse<Movie[]>>();
    const params = useParams();

    useEffect(() => {
        if (params?.id) {
            getMovieDetails(params.id);
            getSimilarMovies(params.id);
        }
    }, []);

    const getMovieDetails = async (id: string) => {
        const endPoint = `/movie/${id}`;
        const response = await getMovies<MovieDetails>(endPoint);
        setMovie(response);
    };

    const getSimilarMovies = async (id: string) => {
        const endPoint = `/movie/${id}/similar`;
        const response = await getMovies<ApiResponse<Movie[]>>(endPoint);
        setSimilarMovie(response);
    };

    return (
        <React.Fragment>
            <div className="movieDetails">
                <div className="poster">
                    <img
                        src={
                            movie?.backdrop_path
                                ? getMovieImageUrl(movie?.backdrop_path, TmdbImageWidth.WIDTH_1280)
                                : ""
                        }
                        alt={movie?.title}
                    />
                    <div className="text-overlay"><span>{movie?.title}</span></div>
                </div>
                <div className="info">
                    <div className="description">
                        <h2>Overview</h2>
                        <p>{movie?.overview}</p>
                    </div>
                    <div className="status">
                        <h2>Status</h2>
                        <p>{movie?.status}</p>
                    </div>
                    <div className="budget">
                        <h2>Budget</h2>
                        <p>{movie?.budget}</p>
                    </div>
                </div>
            </div>
            <div className="similar-movies">
                <CategoryComponent data={similarMovie?.results} categoryName="Similar Movies" />
            </div>
        </React.Fragment>
    );
}
//https://api.themoviedb.org/3/movie/{movie_id}/similar?api_key=<<api_key>>&language=en-US&page=1
export default MovieDetailsComponent;