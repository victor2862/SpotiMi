import React, { useState } from 'react';
import { Tab, Song } from './types';
import BottomNav from './components/BottomNav';
import HomeView from './components/HomeView';
import SearchView from './components/SearchView';
import LibraryView from './components/LibraryView';
import PlayerOverlay from './components/PlayerOverlay';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const handleSongSelect = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setIsPlayerOpen(true);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return <HomeView />;
      case Tab.SEARCH:
        return <SearchView />;
      case Tab.LIBRARY:
        return <LibraryView onSongSelect={handleSongSelect} />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center overflow-hidden">
      {/* Main Content Area - Constrained to mobile width, full height */}
      <main className="w-full max-w-md h-full bg-spotify-base relative shadow-2xl overflow-hidden flex flex-col">
        
        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto no-scrollbar w-full relative">
          {renderTabContent()}
        </div>

        {/* Bottom Navigation - Absolute positioned within main */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Full Screen Player - Absolute positioned over main */}
        {isPlayerOpen && (
          <PlayerOverlay 
            song={currentSong} 
            onClose={() => setIsPlayerOpen(false)}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
          />
        )}
      </main>
    </div>
  );
};

export default App;