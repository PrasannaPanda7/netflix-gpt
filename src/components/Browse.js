import Header from "./Header";
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRated";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import { useEffect } from "react";
import { addTrailerVideo } from "../redux/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useEffect(() => {
    dispatch(addTrailerVideo({ finalTrailer: null, mainTrailer: false }));
  }, []);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <>
      <Header />
      {showGptSearch ? (
        <GptSearch />
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
