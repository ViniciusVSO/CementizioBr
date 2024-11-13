'use client'
import { useRef, useState } from "react";

export default function VideoComponent(){
    const videoRef = useRef<HTMLVideoElement>(null);
    const [playing, setPlaying] = useState(false);

    const togglePlayPause = () => {
    if (playing) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setPlaying(!playing);
  };

  const handleVideoEnd = () => {
    setPlaying(false);
  };

  return (
    <div style={{ position: "relative", width: "450px", height: "450px" }}>
      <video
        className="cursor-pointer"
        ref={videoRef}
        style={{ width: "100%", height: "100%" }}
        preload="none"
        onClick={togglePlayPause} 
        poster="/thumbnail.png"
        onEnded={handleVideoEnd}
      >
        <source src="/202411121603.mp4" type="video/mp4" />
        Seu navegador não suporta esta tag de vídeo.
      </video>
      {!playing && (
        <button
        onClick={togglePlayPause}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-60 p-4 rounded-full flex items-center justify-center cursor-pointer border-none"
        >
          <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
        </button>
      )}
    </div>
  );
};