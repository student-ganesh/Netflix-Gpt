import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addPopularMovie } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovie);
  // Fetch data from tmdb and update store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
