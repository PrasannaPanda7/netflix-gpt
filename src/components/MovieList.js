import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("movies", movies);
  return (
    <div className="px-6">
      <h1 className="text-white text-3xl py-2">{title}</h1>
      <div className="flex overflow-x-scroll space-x-4 py-2">
        <div className="flex gap-2">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;