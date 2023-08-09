// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import { faPlay, faPause, faForward, faRandom, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AudioPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextTrack = () => {
    setCurrentTrack((currentTrack + 1) % audioFiles.length);
    setIsPlaying(true);
  };

  const shuffleTracks = () => {
    setCurrentTrack(Math.floor(Math.random() * audioFiles.length));
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value);
    audioRef.current.volume = volume;
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-semibold mb-4">Audio Player</h1>
      <audio ref={audioRef} src={audioFiles[currentTrack]} onEnded={playNextTrack} />
      <div className="flex items-center mb-4">
        <button
          className="bg-transparent text-white hover:text-gray-300 p-1"
          onClick={togglePlayPause}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button
          className="bg-transparent text-white hover:text-gray-300 p-1 ml-2"
          onClick={playNextTrack}
        >
          <FontAwesomeIcon icon={faForward} />
        </button>
        <button
          className="bg-transparent text-white hover:text-gray-300 p-1 ml-2"
          onClick={shuffleTracks}
        >
          <FontAwesomeIcon icon={faRandom} />
        </button>
        <input
          type="range"
          className="ml-4"
          min="0"
          max="1"
          step="0.01"
          defaultValue="1"
          onChange={handleVolumeChange}
        />
        <FontAwesomeIcon icon={faVolumeUp} className="ml-2" />
      </div>
    </div>
  );
}

