import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "./constants";
import { addNowPlayingMovies } from "../redux/movieSlice";

function useNowPlayingMovies() {
  useEffect(() => {
    getNowPlaying();
  }, []);

  const dispatch = useDispatch();
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_options
    );
    const respData = await data.json();
    dispatch(addNowPlayingMovies(respData?.results));
  };
}

export default useNowPlayingMovies;
