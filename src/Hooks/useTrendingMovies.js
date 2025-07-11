import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addTrendingMovie } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const trendingMovies = useSelector((store) => store.movies.trendingMovie);
  // Fetch data from tmdb and update store
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTrendingMovie(json.results));
  };

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
