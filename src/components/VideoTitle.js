import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 text-white bg-gradient-to-r from-black absolute">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <div className=" hidden md:inline-block w-1/4 py-6 text-lg max-h-40 overflow-y-auto">
        <p>{overview}</p>
      </div>
      <div>
        <button className="mt-9 bg-white text-black py-1 md:p-3 px-3 md:px-10 text-xl rounded-lg hover:bg-opacity-80">▶️ Play</button>
        <button className="hidden md:inline-block mx-3 bg-gray-500 text-white p-3 px-10 text-xl rounded-lg bg-opacity-50">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
