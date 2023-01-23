import React from "react";
import OwlCarousel from "react-owl-carousel";
import { Movie } from "../../interfaces/Movie";
import { MovieListComponent } from "../MovieList/MovieList";

export const CategoryComponent: React.FC<{ categoryName: string; data: Array<Movie> | undefined; handleMovieClick?:Function}> = ({
    categoryName,
    data,
    handleMovieClick
}) => {
    if (data?.length) {
        return (
            <div className="movie-category pt-5">
                <div className="title"><h4>{categoryName}</h4></div>
                <div className="crousel mt-3">
                    <OwlCarousel
                        items={8}
                        className="owl-theme"
                        nav={true}
                        margin={10}
                        dots={false}
                        lazyLoad={true}
                        loop={true}
                        mouseDrag={false}
                    >
                        {<MovieListComponent data={data} handleMovieClick={handleMovieClick}/>}
                    </OwlCarousel>
                </div>
            </div>
        );
    }
    else{
        return <React.Fragment></React.Fragment>
    }
};
