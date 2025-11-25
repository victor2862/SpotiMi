import React, { useState } from 'react';
import { ChevronDown, MoreHorizontal, Shuffle, SkipBack, Play, Pause, SkipForward, Repeat, Heart } from 'lucide-react';
import { PlayerProps } from '../types';

const PlayerOverlay: React.FC<PlayerProps> = ({ song, onClose, isPlaying, setIsPlaying }) => {
  const [progress, setProgress] = useState(30);

  if (!song) return null;

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-50 flex flex-col animate-slide-up overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-4 pb-4 shrink-0">
        <button onClick={onClose} className="p-2 text-white/90 active:scale-95 transition-transform">
          <ChevronDown size={28} />
        </button>
        <span className="text-xs font-bold tracking-widest uppercase opacity-80">Tocando da Playlist</span>
        <button className="p-2 text-white/90">
          <MoreHorizontal size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-6 overflow-y-auto no-scrollbar">
        {/* Album Art - Large */}
        <div className="w-full aspect-square bg-spotify-highlight shadow-2xl rounded-lg mb-8 mt-4 overflow-hidden relative group shrink-0">
           <img 
             src={song.coverUrl} 
             alt={song.title} 
             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
           />
        </div>

        {/* Track Info */}
        <div className="flex justify-between items-end mb-6 shrink-0">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1 leading-tight">{song.title}</h2>
            <p className="text-lg text-spotify-lightgray">{song.artist}</p>
          </div>
          <button className="text-spotify-green mb-1">
            <Heart size={28} fill="#1db954" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 group shrink-0">
          <div className="w-full h-1 bg-white/20 rounded-full mb-2 cursor-pointer">
            <div 
              className="h-full bg-white rounded-full relative" 
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
          <div className="flex justify-between text-xs text-spotify-lightgray font-medium">
            <span>1:15</span>
            <span>{song.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center mb-8 shrink-0">
          <button className="text-white/70 hover:text-white transition-colors">
            <Shuffle size={24} />
          </button>
          <button className="text-white hover:text-white transition-colors">
            <SkipBack size={32} fill="currentColor" />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 active:scale-95 transition-transform"
          >
            {isPlaying ? (
              <Pause size={32} fill="currentColor" />
            ) : (
              <Play size={32} fill="currentColor" className="ml-1" />
            )}
          </button>
          <button className="text-white hover:text-white transition-colors">
            <SkipForward size={32} fill="currentColor" />
          </button>
          <button className="text-white/70 hover:text-white transition-colors">
            <Repeat size={24} />
          </button>
        </div>

        {/* Lyrics / Message Card */}
        <div className="bg-spotify-highlight rounded-2xl p-6 mb-8 mx-0 shrink-0">
          <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">Letra</h3>
          <p className="text-white text-lg font-medium leading-relaxed whitespace-pre-line">
            {song.lyrics}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerOverlay;