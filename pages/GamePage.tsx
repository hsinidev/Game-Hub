import React, { useState, useEffect, useRef, useMemo } from 'react';
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
        const iframe = iframeRef.current as any; // Use 'any' to access vendor-prefixed methods
        if (iframe) {
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen().catch((err: Error) => {
                     console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                });
            } else if (iframe.mozRequestFullScreen) { // Firefox
                iframe.mozRequestFullScreen();
            } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari & Opera
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE/Edge
                iframe.msRequestFullscreen();
            }
        }
    };

    const hotGames = useMemo(() => {
         if (!game) return []; // Don't recalculate until the game is loaded
        return [...GAMES].sort(() => 0.5 - Math.random()).slice(0, 10);
    }, [game]);


    if (!game) {
        return (
            <div className="flex-grow text-center py-20 bg-gray-800/50 p-6 rounded-lg shadow-lg backdrop-blur-sm border border-gray-700 max-w-md mx-auto">
                <h2 className="text-3xl font-bold text-red-500">Game not found!</h2>
                <Link to="/" className="text-yellow-400 hover:underline mt-4 inline-block">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-4 gap-8">
            <main className="lg:col-span-3 space-y-12">
                <div>
                    <div className="aspect-square bg-black rounded-lg overflow-hidden shadow-2xl shadow-red-500/20 border border-gray-700">
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
                
                 <section className="lg:hidden">
                    <h2 className="text-2xl font-bold text-red-500 mb-4">Hot Games</h2>
                    <div className="flex overflow-x-auto space-x-4 pb-4 -mx-4 px-4 scrollbar-hide">
                        {hotGames.map(game => (
                            <div key={game.id} className="flex-shrink-0 w-48 sm:w-56">
                                <GameCard game={game} />
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <aside className="hidden lg:block lg:col-span-1">
                <div className="sticky top-28">
                    <Sidebar games={hotGames.slice(0,5)} />
                </div>
            </aside>
        </div>
    );
};

export default GamePage;