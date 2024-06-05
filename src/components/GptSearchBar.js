import { useRef } from "react";
import openai from "../utils/openai";
import { API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieList } from "../redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const gptSearchText = useRef();

  const handleGptSearch = async () => {
    const gptQuery =
      "Act as a movie recomendation system and suggest some good movies for the query: " +
      gptSearchText.current.value +
      "Suggest only 5 movies, comma separated, I want my result like the format given ahead. Example result: Sholey, Don, De dana dan, Sita Ramam, Salaar";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    const dummyResult = [
      "Andaz Apna Apna",
      "Hera Pheri",
      "Golmaal: Fun Unlimited",
      "Chupke Chupke",
      "Dhamaal",
    ];
    const searchdMovieListPromises = dummyResult.map((movie) =>
      fetchMovies(movie)
    );

    const searchdMovieList = await Promise.all(searchdMovieListPromises);
    dispatch(
      addGptMovieList({ movieName: dummyResult, movieList: searchdMovieList })
    );
  };

  const fetchMovies = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_options
    );
    const json = await data.json();
    return json.results;
  };

  return (
    <div className="flex justify-center pt-[10%]">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-md"
      >
        <input
          ref={gptSearchText}
          type="text"
          className="p-4 m-2 col-span-9 bg-transparent text-white"
          placeholder="What you want to see today?"
        ></input>
        <button
          onClick={handleGptSearch}
          className="col-span-3 m-2 px-3 py-3 bg-red-700 text-white rounded-md"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
