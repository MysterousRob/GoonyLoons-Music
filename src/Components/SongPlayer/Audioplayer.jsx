import React, { useState,useRef, useEffect } from "react";


const AudioPlayer = ({src}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress]= useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const duration = 30;
  
  useEffect(() => {
    const audio = audioRef.current;
    const handleTimeUpdate = () => {
      const current = audio.currentTime;
      setCurrentTime(current);
      if (current >= duration) {
        audio.pause();
        setIsPlaying(false);
      }
      setProgress((current / duration) * 100);
    }
  
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, []);
  
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="w-full h-full max-w-xs ms-auto mt-4 bg-white shadow-lg rounded-lg p-4">
      <audio ref={audioRef} preload='metadata'>
        <source src={src} type="audio/mpeg" />
        Your Browser does not support the audio element.
        </audio> 
        <button
        onClick={togglePlayPause}
        className="bg-blue-500 text-white px-4 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <div className="w-full bg-grey-300 h-2 rounded-lg overflow-hidden my-4">
          <div 
          className="bg-blue-500 h-full rounded-lg" 
          style={{width: `${progress}%`}}
          >
          </div>
        </div>
        <div className="text-center">
          {`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)
            .toString()
            .padStart(2, "0")}/${Math.floor(duration / 60)}:${duration % 60}}`}
        </div>
    </div>
  );
};

export default AudioPlayer;