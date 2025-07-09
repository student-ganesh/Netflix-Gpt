import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 md:-mt-60 relative z-20">
        <MovieList title={"Now  Playing"} movies={movies?.nowPlayingMovie} />
        <MovieList title={"Top Rated"} movies={movies?.trendingMovie} />
        <MovieList title={"Popular"} movies={movies?.popularMovie} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
