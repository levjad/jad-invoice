import React from 'react';

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
                <button onClick={onClose} className="float-right text-gray-600 dark:text-gray-400">
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Dialog;