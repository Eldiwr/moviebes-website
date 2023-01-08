import { MovieDetail } from "components/MovieDetail/MovieDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetail } from "services/api";

export const MovieReviewPage = () => {

    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMovieDetail(movieId).then(setMovie)
    }, [movieId]);



    return (
        <>
            {movie === null ? <span>Loading...</span> : <MovieDetail movie={ movie } />}   
        </>
    )
};
