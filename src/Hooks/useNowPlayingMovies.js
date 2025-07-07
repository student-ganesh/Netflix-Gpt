import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constant";
import { addNowPlayingMovie } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  // Fetch data from tmdb and update store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
