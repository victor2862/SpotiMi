import React from 'react';
import { Bell, Clock, Settings } from 'lucide-react';

const HomeView: React.FC = () => {
  const generateCards = (count: number) => Array.from({ length: count }).map((_, i) => ({
    id: i,
    img: `https://picsum.photos/300/300?random=${i + 10}`,
    title: i === 0 ? "Nossa Playlist" : `Mix ${i + 1}`,
    desc: i === 0 ? "Músicas que lembram você" : "Ed Sheeran, Coldplay e mais"
  }));

  const quickPicks = generateCards(6);
  const madeForYou = generateCards(4);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#330000] to-spotify-base pb-24">
      {/* Header */}
      <div className="flex justify-between items-center px-4 pt-12 pb-6">
        <h1 className="text-2xl font-bold text-white">Boa tarde</h1>
        <div className="flex gap-4 text-white">
          <Bell size={24} />
          <Clock size={24} />
          <Settings size={24} />
        </div>
      </div>

      {/* Grid of Quick Picks */}
      <div className="grid grid-cols-2 gap-2 px-4 mb-8">
        {quickPicks.map((item) => (
          <div key={item.id} className="bg-white/10 rounded overflow-hidden flex items-center pr-2 hover:bg-white/20 transition-colors cursor-pointer group">
            <img src={item.img} alt={item.title} className="w-14 h-14 object-cover shadow-lg" />
            <span className="ml-3 text-xs font-bold text-white line-clamp-2 leading-tight">
              {item.title}
            </span>
          </div>
        ))}
      </div>

      {/* Wrapped Banner */}
      <div className="px-4 mb-8">
         <div className="relative rounded-lg overflow-hidden h-32 bg-gradient-to-r from-pink-600 to-purple-700 flex items-center p-4 shadow-xl">
           <div className="z-10">
             <h2 className="text-2xl font-black text-white italic tracking-tighter mb-1">#Wrapped</h2>
             <p className="text-xs text-white/90 font-medium">Os momentos que passamos juntos.</p>
           </div>
           <div className="absolute right-0 bottom-0 top-0 w-32 bg-gradient-to-l from-black/20 to-transparent"></div>
         </div>
      </div>

      {/* Horizontal Scroll Section */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-white mb-4">Feito para Nós</h2>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {madeForYou.map((item) => (
            <div key={`mfy-${item.id}`} className="min-w-[150px] cursor-pointer">
              <img src={item.img} alt={item.title} className="w-full aspect-square object-cover mb-3 rounded-md shadow-md" />
              <h3 className="text-white font-bold text-sm mb-1 line-clamp-1">{item.title}</h3>
              <p className="text-spotify-lightgray text-xs line-clamp-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;