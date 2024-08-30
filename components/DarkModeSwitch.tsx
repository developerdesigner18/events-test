'use client';
import { useState } from 'react'

const DarkModeSwitch = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
        else {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }

    return (
        <div className="flex items-center justify-between">
            <label className="inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                />
                <div className="relative w-11 h-6 bg-gray-200 outline-none rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-black dark:text-white">Dark Mode</span>
            </label>

        </div>
    )
}

export default DarkModeSwitch