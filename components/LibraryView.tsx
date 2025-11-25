import React from 'react';
import { Plus, Search, List, ArrowDownCircle, MoreVertical } from 'lucide-react';
import { Song } from '../types';
import { SONGS } from '../constants';

interface LibraryViewProps {
  onSongSelect: (song: Song) => void;
}

const LibraryView: React.FC<LibraryViewProps> = ({ onSongSelect }) => {
  return (
    <div className="flex flex-col min-h-screen bg-spotify-base pb-24 px-4 pt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center text-black font-bold text-sm">
            M
          </div>
          <h1 className="text-2xl font-bold text-white">Sua Biblioteca</h1>
        </div>
        <div className="flex gap-4 text-white">
          <Search size={24} />
          <Plus size={24} />
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar">
        {['Playlists', 'Artistas', 'Álbuns'].map((filter) => (
          <button key={filter} className="border border-white/30 rounded-full px-4 py-1 text-sm text-white font-medium whitespace-nowrap hover:bg-white/10 active:bg-white/20 transition-colors">
            {filter}
          </button>
        ))}
      </div>

      {/* Sort Row */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 text-white text-sm font-medium">
          <ArrowDownCircle size={16} />
          <span>Recentes</span>
        </div>
        <List size={20} className="text-white" />
      </div>

      {/* Static List - Liked Songs + Defined Songs */}
      <div className="flex flex-col gap-2">
         {/* Fake Liked Songs Entry */}
         <div className="flex items-center p-2 rounded-md hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer mb-2">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-700 to-blue-300 flex items-center justify-center rounded-sm mr-4">
              <ArrowDownCircle className="text-white fill-white" size={24} />
            </div>
            <div className="flex-1">
               <h3 className="text-white font-bold text-base">Músicas Curtidas</h3>
               <p className="text-spotify-lightgray text-sm font-medium flex items-center gap-1">
                 <span className="text-spotify-green rotate-45">📌</span> 420 músicas
               </p>
            </div>
         </div>

         {/* Actual Song List */}
         {SONGS.map((song) => (
           <div 
             key={song.id} 
             onClick={() => onSongSelect(song)}
             className="flex items-center p-2 rounded-md hover:bg-white/5 active:bg-white/10 transition-colors cursor-pointer group"
           >
              <img src={song.coverUrl} alt={song.title} className="w-16 h-16 rounded-sm object-cover mr-4" />
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-bold text-base truncate leading-tight mb-1 group-hover:text-spotify-green transition-colors">{song.title}</h3>
                <p className="text-spotify-lightgray text-sm truncate">{song.artist}</p>
              </div>
              <button className="text-spotify-lightgray p-2">
                <MoreVertical size={20} />
              </button>
           </div>
         ))}
      </div>
    </div>
  );
};

export default LibraryView;