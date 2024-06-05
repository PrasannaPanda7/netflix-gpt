import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const navigate = useNavigate();
  const fetchTrailer = (movieId) => {
    navigate(`/player/${movieId}`);
  };
  return (
    <div className="px-6 bg-black opacity-80">
      <h1 className="text-white text-3xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll space-x-4 py-2">
        <div className="flex gap-2">
          {movies?.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard
                  key={movie.id}
                  posterPath={movie.poster_path}
                  onclick={() => fetchTrailer(movie.id)}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
