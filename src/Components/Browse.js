import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./Secondary";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <div className="relative"></div>
      <MainContainer />
      <SecondaryContainer />
      {/* MainVedioContainer
            Secondary Container
       */}
      <div />
    </div>
  );
};
export default Browse;
