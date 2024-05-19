import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRated";
import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearchBar />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
