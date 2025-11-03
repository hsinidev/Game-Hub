import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const categories = ['Stickman', 'Sports', '2 Player', 'Car', 'Running', 'Puzzle'];
    const moreCategories = ['3D', 'Shooting', 'Moto', 'Skill', 'Adventure', 'Multiplayer', 'Racing'];

    return (
        <header className="bg-black bg-opacity-50 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src="/favicon.svg" alt="Game Hub Logo" className="w-12 h-12"/>
                        <span className="text-2xl font-bold text-red-500 hover:text-yellow-400 transition-colors">FighterPlay</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {categories.map(cat => (
                            <a key={cat} href="#" className="text-lg font-medium hover:text-yellow-400 transition-colors">{cat}</a>
                        ))}
                        <div className="relative group">
                            <button className="text-lg font-medium hover:text-yellow-400 transition-colors flex items-center">
                                More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                                {moreCategories.map(cat => (
                                    <a key={cat} href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">{cat}</a>
                                ))}
                            </div>
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <nav className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                            {categories.map(cat => (
                                <a key={cat} href="#" className="block px-4 py-2 text-lg font-medium hover:bg-gray-700 rounded-md transition-colors">{cat}</a>
                            ))}
                             <div className="px-4 py-2">
                                <h3 className="text-lg font-semibold text-red-500 border-b border-gray-600 pb-1">More</h3>
                                <div className="mt-2 flex flex-col space-y-2">
                                    {moreCategories.map(cat => (
                                        <a key={cat} href="#" className="block px-2 py-1 text-base hover:bg-gray-700 rounded-md transition-colors">{cat}</a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
