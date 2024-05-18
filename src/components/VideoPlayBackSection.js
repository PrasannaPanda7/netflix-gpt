import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";

const VideoPlayBackSection = ({ movieId }) => {
  const trailer = useSelector((store) => store?.movie?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <iframe
      className="w-full aspect-video"
      src={
        "https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"
      }
      frameBorder="0"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default VideoPlayBackSection;
