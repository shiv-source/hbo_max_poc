import axios from "axios";
import { environment } from "../environment/environment";

export const getMovies = async <T extends unknown>(endPoint: string, page?: number) => {
    if (!page) page = 1;
    const url = `${environment.apiUrl}${endPoint}`;
    const response = await axios.get(url, {
        params: {
            api_key: environment.apiKey,
            language: "en-us",
            page,
        },
    });

    return response.data as T;
};

export enum TmdbImageWidth {
    WIDTH_200 = 200,
    WIDTH_500 = 500,
    WIDTH_1280 = 1280,
}

export const getMovieImageUrl = (imagePath: string, width?: TmdbImageWidth):string => {
    if (!width) width = 200;
    const imgWidth = `w${width}`;
    const params = `?api_key=${environment.apiKey}&language=en-US`;
    const url = `${environment.baseImageUrl}/${imgWidth}${imagePath}${params}`;
    return url;
};
