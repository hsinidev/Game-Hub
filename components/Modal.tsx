import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={onClose}
        >
            <div 
                className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6 relative border border-gray-700"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex justify-between items-center pb-3 border-b border-gray-600">
                    <h3 className="text-2xl font-bold text-red-500">{title}</h3>
                    <button 
                        onClick={onClose} 
                        className="text-gray-400 hover:text-white text-3xl leading-none"
                    >
                        &times;
                    </button>
                </div>
                <div className="mt-4 text-gray-300">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
