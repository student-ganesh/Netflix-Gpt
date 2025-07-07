import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addUpcomingMovie } from "../Utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  // Fetch data from tmdb and update store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovie(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
