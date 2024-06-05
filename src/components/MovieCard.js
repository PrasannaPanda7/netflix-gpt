import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, onclick }) => {
  return (
    <div className="w-48" onClick={onclick}>
      <img alt="movie card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
