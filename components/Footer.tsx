import React, { useState } from 'react';
import Modal from './Modal';

const Footer: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });

    const pages = {
        'About': `
            <h2 class="text-2xl font-bold mb-4 text-red-500">About FighterPlay</h2>
            <p class="mb-4">FighterPlay is a premier gaming hub designed for everyone. We offer a vast collection of unblocked games that can be played directly in your browser, providing an ad-free and enjoyable experience.</p>
            <p>Our mission is to make gaming accessible and fun for people of all ages, whether you're at school, at home, or on the go.</p>
        `,
        'Contact': `
            <h2 class="text-2xl font-bold mb-4 text-red-500">Contact Us</h2>
            <p class="mb-4">Have questions or feedback? We'd love to hear from you!</p>
            <p>Email us at: <a href="mailto:hsini.web@gmail.com" class="text-yellow-400 hover:underline">hsini.web@gmail.com</a></p>
        `,
        'Guide': `
            <h2 class="text-2xl font-bold mb-4 text-red-500">How to Play</h2>
            <p class="mb-4">Playing games on FighterPlay is simple:</p>
            <ol class="list-decimal list-inside space-y-2">
                <li>Browse our extensive library of games on the home page.</li>
                <li>Click on any game card to go to the game page.</li>
                <li>The game will load automatically. Click the fullscreen button for an immersive experience.</li>
                <li>Enjoy!</li>
            </ol>
        `,
        'Privacy Policy': `
            <h2 class="text-2xl font-bold mb-4 text-red-500">Privacy Policy</h2>
            <p class="mb-4">Your privacy is important to us. This policy explains what information we collect and how we use it.</p>
            <p class="mb-4">We do not collect any personal information from our users. We may use cookies to enhance your browsing experience, but these can be disabled in your browser settings.</p>
            <p>Our website, fighterplay.com, is committed to protecting your privacy.</p>
        `,
        'Terms of Service': `
            <h2 class="text-2xl font-bold mb-4 text-red-500">Terms of Service</h2>
            <p class="mb-4">By using fighterplay.com, you agree to these terms.</p>
            <p class="mb-4">All games on this site are the property of their respective owners. We provide a platform to play these games but do not claim ownership.</p>
            <p>You agree not to use our service for any illegal or unauthorized purpose.</p>
        `,
        'DMCA': `
            <h2 class="text-2xl font-bold mb-4 text-red-500">DMCA</h2>
            <p class="mb-4">FighterPlay respects the intellectual property of others. If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please contact us at <a href="mailto:hsini.web@gmail.com" class="text-yellow-400 hover:underline">hsini.web@gmail.com</a> with the following information:</p>
            <ul class="list-disc list-inside space-y-2">
                <li>A description of the copyrighted work that you claim has been infringed.</li>
                <li>The URL of the location on our website containing the material.</li>
                <li>Your contact information.</li>
            </ul>
        `,
    };

    const openModal = (page: keyof typeof pages) => {
        setModalContent({ title: page, content: pages[page] });
        setIsModalOpen(true);
    };

    return (
        <>
            <footer className="bg-black bg-opacity-50 py-6 mt-8">
                <div className="container mx-auto px-4 text-center text-gray-400">
                    <p>FighterPlay &copy; {new Date().getFullYear()}</p>
                    <div className="mt-4 flex justify-center items-center space-x-4">
                        <button onClick={() => openModal('About')} className="hover:text-yellow-400 transition-colors">About</button>
                        <button onClick={() => openModal('Contact')} className="hover:text-yellow-400 transition-colors">Contact</button>
                        <button onClick={() => openModal('Guide')} className="hover:text-yellow-400 transition-colors">Guide</button>
                        <button onClick={() => openModal('Privacy Policy')} className="hover:text-yellow-400 transition-colors">Privacy Policy</button>
                        <button onClick={() => openModal('Terms of Service')} className="hover:text-yellow-400 transition-colors">Terms</button>
                        <button onClick={() => openModal('DMCA')} className="hover:text-yellow-400 transition-colors">DMCA</button>
                    </div>
                     <div className="mt-4 text-sm">
                        Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:underline font-bold">HSINI MOHAMED</a>
                    </div>
                </div>
            </footer>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={modalContent.title}>
                 <div dangerouslySetInnerHTML={{ __html: modalContent.content }} />
            </Modal>
        </>
    );
};

export default Footer;
