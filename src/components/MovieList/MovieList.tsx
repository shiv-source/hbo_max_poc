import React from "react";
import "./MovieList.scss";
import { getMovieImageUrl, TmdbImageWidth } from "../../api/api";
import { Movie } from "../../interfaces/Movie";

export const MovieListComponent: React.FC<{
    data: Movie[] | undefined;
    width?: TmdbImageWidth;
    isBanner?: boolean;
    handleMovieClick?: Function;
}> = ({ data, width, isBanner, handleMovieClick }) => {
    if (isBanner) width = TmdbImageWidth.WIDTH_1280;

    const list = data?.map((movie) => {
        if (isBanner) {
            return (
                <div className="banner" key={movie.id} onClick={() => handleMovieClick && handleMovieClick(movie)}>
                    <img src={getMovieImageUrl(movie.backdrop_path, width)} alt={movie.title}/>
                    <div className="text-overlay">
                        <span>{movie?.title}</span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="movie" key={movie.id} onClick={() => handleMovieClick && handleMovieClick(movie)}>
                    <img src={getMovieImageUrl(movie.poster_path, width)} alt={movie.title}/>
                </div>
            );
        }
    });
    return <React.Fragment>{list}</React.Fragment>;
};

MovieListComponent.defaultProps = {
    isBanner: false,
    width: TmdbImageWidth.WIDTH_200,
};
