import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-black bg-opacity-50 text-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <Link to="/" className="flex items-center space-x-3" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src="/favicon.svg" alt="PvePlay Logo" className="w-10 h-10 sm:w-12 sm:h-12"/>
                        <span className="text-xl sm:text-2xl font-bold text-red-500 hover:text-yellow-400 transition-colors">PvePlay</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-lg font-medium hover:text-yellow-400 transition-colors">Home</Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none" aria-label="Open menu">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                     <nav className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                           <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 text-lg font-medium hover:bg-gray-700 rounded-md transition-colors">Home</Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default React.memo(Header);