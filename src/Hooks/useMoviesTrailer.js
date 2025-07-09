import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useMoviesTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  // Fetching trailer Video and updating store with trailer vdo data

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    if (!json?.results || !Array.isArray(json.results)) {
      console.warn("No video results found for movie ID:", movieId);
      return;
    }

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideo(movieId);
  }, []);
};

export default useMoviesTrailer;
