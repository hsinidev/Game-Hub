import React, { useState, useMemo } from 'react';
import { GAMES, CATEGORIES } from '../constants';
import GameCard from '../components/GameCard';
import Sidebar from '../components/Sidebar';

const GAMES_PER_PAGE = 24;

const HomePage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleCount, setVisibleCount] = useState(GAMES_PER_PAGE);

    const featuredGames = useMemo(() => [...GAMES].sort(() => 0.5 - Math.random()).slice(0, 10), []);

    const filteredGames = useMemo(() => {
        return GAMES
            .filter(game => {
                if (selectedCategory === 'All') return true;
                return game.category === selectedCategory;
            })
            .filter(game => {
                return game.name.toLowerCase().includes(searchQuery.toLowerCase());
            });
    }, [searchQuery, selectedCategory]);
    
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
        setVisibleCount(GAMES_PER_PAGE); // Reset visible count on category change
        document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
    }

    const loadMoreGames = () => {
        setVisibleCount(prevCount => prevCount + GAMES_PER_PAGE);
    };

    return (
        <div className="flex-grow space-y-12">
            <section className="text-center py-8 sm:py-12">
                <div className="flex justify-center items-center mb-4">
                    <img src="/favicon.svg" alt="PvePlay Logo" className="w-16 h-16 sm:w-20 sm:h-20"/>
                </div>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl sm:text-5xl font-bold text-white mb-3">
                        PvePlay: Your Ultimate <span className="text-red-500">Unblocked</span> Gaming Universe
                    </h1>
                    <p className="text-gray-300 mx-auto mb-6 text-lg">
                        Dive into a massive collection of free-to-play browser games. No downloads, no ads, just pure, unadulterated fun! Your next gaming adventure starts here.
                    </p>
                </div>
                <div className="relative max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search for your favorite game..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-900/80 border-2 border-gray-600 focus:border-red-500 focus:ring-red-500 rounded-full py-3 px-6 text-white text-lg transition-colors"
                        aria-label="Search for a game"
                    />
                     <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </section>

             <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-6 text-center sm:text-left">Featured Games</h2>
                <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
                    {featuredGames.map(game => (
                        <div key={game.id} className="flex-shrink-0 w-48 sm:w-56 md:w-64">
                            <GameCard game={game} />
                        </div>
                    ))}
                </div>
            </section>
            
            <div id="games" className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <main className="lg:col-span-3 space-y-8">
                    <section>
                         <div className="flex overflow-x-auto space-x-3 pb-2 scrollbar-hide">
                            {CATEGORIES.map(category => (
                                <button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-colors shrink-0 ${
                                        selectedCategory === category
                                            ? 'bg-red-600 text-white'
                                            : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                                    }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </section>
                        
                    <section>
                         <h2 className="text-2xl font-bold text-red-500 mb-6">{selectedCategory} Games</h2>
                        {filteredGames.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                                {filteredGames.slice(0, visibleCount).map(game => (
                                    <GameCard key={game.id} game={game} />
                                ))}
                            </div>
                        ) : (
                             <div className="text-center py-12">
                                <h3 className="text-2xl font-bold text-red-500">No Games Found</h3>
                                <p className="text-gray-400 mt-2">Try adjusting your search or selecting a different category.</p>
                            </div>
                        )}

                        {visibleCount < filteredGames.length && (
                            <div className="mt-8 text-center">
                                <button
                                    onClick={loadMoreGames}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full transition-colors text-lg"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </section>
                </main>
                <aside className="hidden lg:block lg:col-span-1">
                     <div className="sticky top-28">
                        <Sidebar games={featuredGames.slice(0,5)} />
                    </div>
                </aside>
            </div>

            <section className="bg-gray-900/50 p-8 rounded-lg border border-gray-700 space-y-8">
                <h2 className="text-3xl font-bold text-center text-yellow-400">Why Choose PvePlay?</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 mb-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">Vast Library of Games</h3>
                        <p className="text-gray-300">Explore hundreds of titles across every genre. Our collection is constantly updated to ensure there's always something new to play.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 mb-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">No Downloads, Instant Play</h3>
                        <p className="text-gray-300">Jump straight into the action! All our games are browser-based, meaning no downloads or installations are required. Just click and play.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg className="w-12 h-12 mb-4 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                        <h3 className="text-xl font-semibold text-red-500 mb-2">Optimized for School & Work</h3>
                        <p className="text-gray-300">Our platform is designed to be accessible anywhere, including networks with restrictions. Enjoy your favorite unblocked games without hassle.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;