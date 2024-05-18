import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRated";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
