import { BG_URL } from "../Utils/constant";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className=" md:absolute fixed  -z-10 ">
        <img
          className="object-cover h-screen md:w-screen"
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
