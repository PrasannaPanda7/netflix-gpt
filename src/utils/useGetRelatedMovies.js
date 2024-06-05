import { useEffect } from "react";
import { API_options } from "./constants";
import { useDispatch } from "react-redux";
import { addRelatedMovies } from "../redux/movieSlice";

const useGetRelatedMovies = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchRelatedMovies();
  }, []);

  const fetchRelatedMovies = async () => {
    const resp = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
      API_options
    );
    const relatedMovies = await resp.json();
    dispatch(addRelatedMovies(relatedMovies?.results));
  };
};

export default useGetRelatedMovies;
