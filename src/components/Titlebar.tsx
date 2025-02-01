import React from 'react';
import {FaFileInvoiceDollar, FaMoon, FaSun} from "react-icons/fa";

interface TitlebarProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

const Titlebar: React.FC<TitlebarProps> = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <div className="flex flex-col justify-between bg-gray-800 text-white p-4 md:p-6 md:w-24 md:h-screen">
            {/* Logo at the Top */}
            <div className="flex items-center justify-center">
                <FaFileInvoiceDollar className="w-10 h-10 text-teal-500" />
            </div>

            {/* Theme Switcher at the Bottom */}
            <div className="flex items-center justify-center">
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                >
                    {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-300" />}
                </button>
            </div>
        </div>
    );
};

export default Titlebar;