import { useSelector } from "react-redux";
import useMoviesTrailer from "../Hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMoviesTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video z-0"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&showinfo=0`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        playsInline
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default VideoBackground;
