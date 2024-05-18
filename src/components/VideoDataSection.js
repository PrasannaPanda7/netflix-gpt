const VideoDataSection = ({ title, overview }) => {
  return (
    <div className="pt-56 px-12 absolute text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-4xl font-bold w-1/2">{title}</h1>
      <p className="mt-12 w-1/2">{overview}</p>
      <div className="flex gap-2 mt-10">
        <button className="px-8 py-2  bg-white bg-opacity-50 rounded-md">
          ▶ Play
        </button>
        <button className="px-8 py-2  bg-gray-500 bg-opacity-50 rounded-md">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoDataSection;
