import { useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import { useRef, useState } from "react";
import { generateGeminiResponse } from "../Utils/geminiai";
import { API_OPTIONS } from "../Utils/constant";
import { BG_URL } from "../Utils/constant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [result, setResult] = useState("");
  const [movies, setMovies] = useState([]);

  // Search a movie in TMDB
  const searchTmdb = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movie.trim()
        )}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const json = await response.json();
      return json.results?.[0]; // Return top match
    } catch (err) {
      console.error("TMDB error for", movie, ":", err);
      return null;
    }
  };

  const handleGptSearchClick = async () => {
    const inputQuery = searchText.current.value.trim();
    if (!inputQuery) return;

    const prompt = `
      Act as a Movie Recommendation System. Suggest a Minimum 5 movies for the following query: ${inputQuery}.
      Respond in comma-separated format. Example: Chhava, Pawankhind, Tanhaji, Fatteshikast, Farzand.
    `;

    const gptResponse = await generateGeminiResponse(prompt);
    setResult(gptResponse);
    console.log("Gemini response:", gptResponse);

    const gptMovies = gptResponse.split(",").map((m) => m.trim());
    const movieDataList = [];

    for (const name of gptMovies) {
      const movieData = await searchTmdb(name);
      if (movieData) movieDataList.push(movieData);
    }

    setMovies(movieDataList);
  };

  return (
    <div className="pt-[10%] flex flex-col items-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-500 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>

      {result && (
        <div className="w-1/2 mt-4 bg-white text-black p-4 rounded shadow">
          <h2 className="font-bold mb-2">Gemini Recommendation:</h2>
          <p>{result}</p>
        </div>
      )}

      {movies.length > 0 && (
        <div
          className=" mt-4 grid grid-cols-5  bg-cover bg-repeat bg-fixed px-2"
          style={{ backgroundImage: `url(${BG_URL})` }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className=" bg-gray-800 px-2 m-1 text-white p-4 rounded shadow"
            >
              <h3 className="font-semibold text-xl">{movie.title}</h3>
              {movie.poster_path && (
                <img
                  className="mt-2 rounded"
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                />
              )}
              <p className="mt-2 text-sm">{movie.overview?.slice(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
