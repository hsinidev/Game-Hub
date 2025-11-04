import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const GamePage = React.lazy(() => import('./pages/GamePage'));

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-grow w-full container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-screen-xl mx-auto py-8 lg:py-12">
              <Suspense fallback={<div className="text-center text-white text-xl py-10">Loading...</div>}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/game/:gameId" element={<GamePage />} />
                </Routes>
              </Suspense>
            </div>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;