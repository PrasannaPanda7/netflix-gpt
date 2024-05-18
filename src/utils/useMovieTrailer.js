import { useDispatch } from "react-redux";
import { API_options } from "./constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_options
    );
    const data = await response.json();
    const trailer = data?.results?.filter((ele) => ele.type === "Trailer");
    const finalTrailer = trailer.length ? trailer[0] : data?.results[0];
    dispatch(addTrailerVideo(finalTrailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
