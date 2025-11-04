import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface SidebarProps {
    games: Game[];
}

const Sidebar: React.FC<SidebarProps> = ({ games }) => {
    return (
        <aside className="space-y-6">
            <h3 className="text-2xl font-bold text-red-500 border-b-2 border-red-500/50 pb-2">Hot Games</h3>
            <div className="space-y-4">
                {games.map(game => (
                    <Link key={game.id} to={`/game/${game.id}`} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200">
                        <img 
                            src={game.thumbnail} 
                            alt={game.name} 
                            className="w-20 h-16 object-cover rounded-md"
                            loading="lazy"
                            decoding="async"
                             onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.onerror = null;
                                target.src = 'https://picsum.photos/80/64?grayscale';
                            }}
                        />
                        <div>
                            <h4 className="font-semibold text-white leading-tight">{game.name}</h4>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
};

export default React.memo(Sidebar);