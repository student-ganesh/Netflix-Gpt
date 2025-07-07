import { IMG_CDN_URL } from "../Utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 py-4 inline-block">
      <img
        alt="Movie card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
