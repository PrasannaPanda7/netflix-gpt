import { useSelector, useDispatch } from "react-redux";
import MovieList from "./MovieList";
import { clearGptMovieList } from "../redux/gptSlice";
import { useEffect } from "react";

function GPTMovieSuggetions() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(clearGptMovieList());
  }, []);
  const { movieName, gptMovieList } = useSelector((store) => store.gpt);
  if (!movieName) return null;

  return (
    <div className="mt-8 bg-black text-white opacity-60">
      {movieName.map((movie, index) => (
        <MovieList title={movie} key={movie} movies={gptMovieList[index]} />
      ))}
    </div>
  );
}

export default GPTMovieSuggetions;
