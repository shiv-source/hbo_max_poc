import React from "react";
import './CategoryComponent.scss';
import OwlCarousel from "react-owl-carousel";
import { Movie } from "../../interfaces/Movie";
import { MovieListComponent } from "../MovieList/MovieList";

export const CategoryComponent: React.FC<{ categoryName: string; data: Array<Movie> | undefined }> = ({
    categoryName,
    data,
}) => {
    if (data?.length) {
        return (
            <div className={categoryName}>
                <div className="title">{categoryName}</div>
                <div className="crousel">
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
                        {<MovieListComponent data={data} />}
                    </OwlCarousel>
                </div>
            </div>
        );
    }
    else{
        return <React.Fragment></React.Fragment>
    }
};
