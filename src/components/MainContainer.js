import { useSelector } from "react-redux";
import VideoDataSection from "./VideoDataSection";
import VideoPlayBackSection from "./VideoPlayBackSection";

const MainContainer = () => {
  const movieData = useSelector((store) => store.movie?.nowPlayingMovies);

  if (!movieData) return;

  const displayedMovie = movieData[8];
  return (
    <>
      <VideoDataSection
        title={displayedMovie.title}
        overview={displayedMovie.overview}
      />
      <VideoPlayBackSection movieId={displayedMovie.id} />
    </>
  );
};

export default MainContainer;
