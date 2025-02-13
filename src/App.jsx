import Navbarcontainer from "./components/Navbarcontainer"
import './App.css'
// import Menubar from "./components/Menubar";
import Footercontainer from "./components/Footercontainer"

// App.jsx
import { useTheme } from './components/ThemeContext';  // ✅ Correct path
const App=()=>{
    const { isDarkMode } = useTheme();
    return(
        
        <div data-theme={isDarkMode ? 'dark' : 'light'}>
            
          
            <Navbarcontainer/>
            <Footercontainer/>
            
            

            
        </div>
    )

}

export default App