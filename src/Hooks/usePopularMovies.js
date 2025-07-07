import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addPopularMovie } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  // Fetch data from tmdb and update store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addPopularMovie(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
