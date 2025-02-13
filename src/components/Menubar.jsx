import React from "react";
import { useTheme } from './ThemeContext';
// import { MdDarkMode,MdOutlineDarkMode } from "react-icons/md";
const Menubar=()=>{
    const { isDarkMode, toggleTheme } = useTheme();
    return(<>
        <div>contact</div>
        <button onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

        </>
    )
}
export default Menubar