const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-36 px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="text-lg py-2 w-1/4">{overview}</p>
      <div className="">
        <button className="bg-white text-black py-4 my-5 px-5 text-xl rounded-md hover:bg-gray-500 bg-opacity-90">
          ▶Play
        </button>
        <button className="bg-gray-400 mx-2 text-white py-4 my-5 px-5 text-xl rounded-md  hover:bg-gray-700 bg-opacity-60">
          ℹ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
