import { useEffect } from "react";
import { API_options } from "./constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";

const usePopularMovies = () => {
  useEffect(() => {
    getPopularMovies();
  }, []);

  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );
    const respData = await data.json();
    dispatch(addPopularMovies(respData?.results));
  };
};

export default usePopularMovies;
