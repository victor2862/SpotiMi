import React, { useState } from 'react';
import { Search as SearchIcon, Camera } from 'lucide-react';

const SearchView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: "Romântico", color: "bg-red-500" },
    { name: "Ao Vivo", color: "bg-blue-600" },
    { name: "Pop", color: "bg-green-600" },
    { name: "Brasil", color: "bg-yellow-600" },
    { name: "Relax", color: "bg-purple-600" },
    { name: "Indie", color: "bg-orange-600" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-spotify-base pb-24 px-4 pt-12">
      <h1 className="text-3xl font-bold text-white mb-6">Buscar</h1>

      {/* Search Bar */}
      <div className="relative mb-6 group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="text-black/70" size={24} />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="O que você quer ouvir?"
          className="block w-full pl-11 pr-3 py-3 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none font-medium"
        />
      </div>

      {/* Conditional Content */}
      {searchTerm.length > 0 ? (
        <div className="flex flex-col items-center justify-center mt-10 animate-fade-in">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-8 border-4 border-white/10">
            <img 
              src="https://picsum.photos/800/800?grayscale" 
              alt="Found You" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-white text-center px-8 leading-relaxed">
            “Tudo que procuro encontrei em você ❤️”
          </h2>
        </div>
      ) : (
        /* Browse Categories (Static) */
        <div className="flex-1">
          <h2 className="text-white font-bold mb-4 text-sm">Navegar por todas as seções</h2>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className={`${cat.color} h-24 rounded-lg p-4 relative overflow-hidden cursor-pointer hover:opacity-90 transition-opacity`}
              >
                <span className="font-bold text-white text-lg">{cat.name}</span>
                <div className="absolute -right-3 -bottom-2 w-16 h-16 bg-black/20 rotate-[25deg] rounded-md" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchView;