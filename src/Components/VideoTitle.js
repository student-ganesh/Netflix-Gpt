const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-20 md:pt-36 p-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block text-lg py-2 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-2 mt-2 md:p-4 my-5 text-xl rounded-md hover:bg-gray-500 bg-opacity-90">
          ▶Play
        </button>
        <button className="hidden md:inline-block bg-gray-400 mx-2 text-white py-4 my-5 px-5 text-xl rounded-md  hover:bg-gray-700 bg-opacity-60">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
