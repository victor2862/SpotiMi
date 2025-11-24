import React from 'react';
import { Home, Search, Library } from 'lucide-react';
import { Tab } from '../types';

interface BottomNavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItemClass = (tab: Tab) => 
    `flex flex-col items-center justify-center space-y-1 transition-colors ${
      activeTab === tab ? 'text-white' : 'text-spotify-lightgray hover:text-white'
    }`;

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-[#121212] bg-opacity-95 border-t border-white/10 px-6 py-3 pb-6 z-40 flex justify-between items-center backdrop-blur-md">
      <button onClick={() => setActiveTab(Tab.HOME)} className={navItemClass(Tab.HOME)}>
        <Home size={24} strokeWidth={activeTab === Tab.HOME ? 3 : 2} />
        <span className="text-xs font-medium">Início</span>
      </button>
      
      <button onClick={() => setActiveTab(Tab.SEARCH)} className={navItemClass(Tab.SEARCH)}>
        <Search size={24} strokeWidth={activeTab === Tab.SEARCH ? 3 : 2} />
        <span className="text-xs font-medium">Buscar</span>
      </button>
      
      <button onClick={() => setActiveTab(Tab.LIBRARY)} className={navItemClass(Tab.LIBRARY)}>
        <Library size={24} strokeWidth={activeTab === Tab.LIBRARY ? 3 : 2} />
        <span className="text-xs font-medium">Sua Biblioteca</span>
      </button>
    </div>
  );
};

export default BottomNav;