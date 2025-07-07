import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./Secondary";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import GptSearchBar from "./GptSearchBar";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
