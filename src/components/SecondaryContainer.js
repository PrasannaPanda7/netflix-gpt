import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function SecondaryContainer() {
  const moviesList = useSelector((store) => store.movie);
  return (
    <div className="bg-black">
      <div className="-mt-60 z-10 pl-2 relative">
        <MovieList title={"Now Playing"} movies={moviesList.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={moviesList.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={moviesList.topRated} />
        <MovieList title={"Now Playing"} movies={moviesList.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
