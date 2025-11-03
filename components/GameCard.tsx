import React from 'react';
import { Link } from 'react-router-dom';
import { Game } from '../types';

interface GameCardProps {
    game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    return (
        <Link to={`/game/${game.id}`} className="block group">
            <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 group-hover:scale-105 group-hover:shadow-red-500/30 border border-gray-700">
                <img 
                    src={game.thumbnail} 
                    alt={game.name} 
                    className="w-full h-40 object-cover" 
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // prevent infinite loop
                        target.src = 'https://picsum.photos/400/300?grayscale';
                    }}
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold truncate text-white">{game.name}</h3>
                    <p className="text-sm text-yellow-400">{game.category}</p>
                </div>
            </div>
        </Link>
    );
};

export default GameCard;
