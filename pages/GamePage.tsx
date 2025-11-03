import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GAMES } from '../constants';
import { Game } from '../types';
import Sidebar from '../components/Sidebar';
import GameCard from '../components/GameCard';

const GamePage: React.FC = () => {
    const { gameId } = useParams<{ gameId: string }>();
    const [game, setGame] = useState<Game | null>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    
    useEffect(() => {
        const foundGame = GAMES.find(g => g.id === gameId);
        setGame(foundGame || null);
        window.scrollTo(0, 0);
    }, [gameId]);

    const handleFullscreen = () => {
        if (iframeRef.current) {
            iframeRef.current.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        }
    };

    if (!game) {
        return (
            <div className="text-center py-20 bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700 max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-red-500">Game not found!</h2>
                <Link to="/" className="text-yellow-400 hover:underline mt-4 inline-block">Back to Home</Link>
            </div>
        );
    }

    const relatedGames = GAMES.filter(g => g.category === game.category && g.id !== game.id).slice(0, 8);
    const hotGames = [...GAMES].sort(() => 0.5 - Math.random()).slice(0, 5);

    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <div className="bg-gray-800/50 p-2 sm:p-4 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
                        <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                            <iframe
                                ref={iframeRef}
                                className="w-full h-full"
                                src={game.src}
                                title={game.name}
                                allowFullScreen
                                scrolling="no"
                                frameBorder="0"
                            ></iframe>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 px-2 gap-4">
                            <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">{game.name}</h1>
                            <button 
                                onClick={handleFullscreen}
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center space-x-2 shrink-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1v4m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5 5" />
                                </svg>
                                <span>Fullscreen</span>
                            </button>
                        </div>
                    </div>
                    
                    <div className="mt-12 bg-gray-800/50 p-4 sm:p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">You might also like</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {relatedGames.map(g => <GameCard key={g.id} game={g} />)}
                        </div>
                    </div>

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

export default GamePage;
