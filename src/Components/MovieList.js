import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0)
    return <p className="text-white">No movies available</p>;
  console.log(movies);
  return (
    <div className="text-white text-xl font-bold px-4 py-2">
      <h1 className="mb-2">{title}</h1>
      <div className="flex overflow-x-auto scroll-smooth whitespace-nowrap hide-scrollbar">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
