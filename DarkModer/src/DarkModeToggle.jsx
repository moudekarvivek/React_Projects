import { useEffect } from "react";
import { useState } from "react";

function DarkModeToggle() {
    const [isDarkMode, setisdarkMode] = useState(
        () => {
            return localStorage.getItem('theme') === 'dark' ? true : false;
        }
    )
    useEffect(() => {
        if(isDarkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
        
    }, [isDarkMode]);

    return(
        <button 
            onClick={() => setisdarkMode(!isDarkMode)}
            className="p-2 dark:bg-gray-900 dark:text-white bg-gray-200 text-gray-800 rounded-md"> 
                Dark Mode
        </button>
    );
}

export default DarkModeToggle;