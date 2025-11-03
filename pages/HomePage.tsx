import React from 'react';
import { GAMES } from '../constants';
import GameCard from '../components/GameCard';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
    const featuredGames = GAMES.slice(0, 3);
    const popularGames = GAMES.slice(3, 15);
    const moreGames = GAMES.slice(15);
    const hotGames = [...GAMES].sort(() => 0.5 - Math.random()).slice(0, 5); // Randomize for variety

    return (
        <div className="space-y-12 max-w-7xl mx-auto">
            <section className="bg-gray-800/50 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
                <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-6">Featured Games</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {featuredGames.map(game => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3 space-y-12">
                    <section className="bg-gray-800/50 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
                        <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-6">Popular Games</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                            {popularGames.map(game => (
                                <GameCard key={game.id} game={game} />
                            ))}
                        </div>
                    </section>
                    
                    {moreGames.length > 0 && (
                        <section className="bg-gray-800/50 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
                            <h2 className="text-2xl sm:text-3xl font-bold text-red-500 mb-6">More Games</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                                {moreGames.map(game => (
                                    <GameCard key={game.id} game={game} />
                                ))}
                            </div>
                        </section>
                    )}

                </div>
                <div className="lg:col-span-1">
                     <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg shadow-lg sticky top-28 backdrop-blur-sm border border-gray-700">
                        <Sidebar games={hotGames} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
