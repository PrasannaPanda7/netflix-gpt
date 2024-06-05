import GptSearchBar from "./GptSearchBar";
import GPTMovieSuggetions from "./GPTMovieSuggetions";
import { BG_URL } from "../utils/constants";

function GptSearch() {
  return (
    <div>
      <div className="fixed -z-10 ">
        <img className=" grayscale-50 " src={BG_URL} alt="background" />
      </div>
      <GptSearchBar />
      <GPTMovieSuggetions />
    </div>
  );
}

export default GptSearch;
