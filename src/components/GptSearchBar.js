import { BG_URL } from "../utils/constants";

const GptSearchBar = () => {
  return (
    <div>
      <div className="absolute">
        <img src={BG_URL} alt="body" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex align-middle justify-center relative top-40 pt-[25%]k"
      >
        <input
          type="text"
          className="p-4 m-4 opacity-85 border-black bg-black w-1/2 text-white"
          placeholder="What you want to see today?"
        ></input>
        <button
          onClick={null}
          className="mt-5 py-2 h-12 px-4 bg-red-700 text-white rounded-lg "
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
