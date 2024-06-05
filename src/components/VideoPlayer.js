import React from "react";
import useMovieTrailer from "../utils/useMovieTrailer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useGetRelatedMovies from "../utils/useGetRelatedMovies";
import MovieList from "./MovieList";

function VideoPlayer() {
  const { movieId } = useParams();
  useMovieTrailer(movieId, false);
  useGetRelatedMovies(movieId);
  const trailer = useSelector(
    (store) => store?.movie?.trailerVideo?.trailerVideo
  );
  const relatedMovies = useSelector((store) => store?.movie?.related);
  return (
    <>
      <iframe
        className="w-full aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key}
        frameBorder="0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <MovieList title={"You may also like"} movies={relatedMovies} />
    </>
  );
}

export default VideoPlayer;
