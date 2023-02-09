import React from "react";
import { getMovieImageUrl, TmdbImageWidth } from "../../api/api";
import { Movie } from "../../interfaces/Movie";

export const MovieCardComponent: React.FC<{ movie: Movie | undefined; handleMovieClick?: Function }> = ({
    movie,
    handleMovieClick,
}) => {
    const width = TmdbImageWidth.WIDTH_200;
    if (movie) {
        return (
            <div className="movie p-2">
                <div className="card" onClick={() => handleMovieClick && handleMovieClick(movie)}>
                    <img className="card-img-top" src={getMovieImageUrl(movie.poster_path, width)} alt={movie.title} />
                </div>
            </div>
        );
    } else {
        return <React.Fragment></React.Fragment>;
    }
};
