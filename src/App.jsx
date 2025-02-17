import Navbarcontainer from "./components/Navbarcontainer"
import './App.css'
// import Menubar from "./components/Menubar";
import Footercontainer from "./components/Footercontainer"
// import Parent from "../props/Parent";  // 
// App.jsx
import { useTheme } from './components/ThemeContext';  
import Parent from "../props/parent";
import State1 from "../state/State1";
const App=()=>{
    const { isDarkMode } = useTheme();
    return(
        
        <div data-theme={isDarkMode ? 'dark' : 'light'}>
            
          
            {/* <Navbarcontainer/> */}
            {/* <Parent/> */}
            {/* <Footercontainer/> */}
            <State1/>
            
            

            
        </div>
    )

}

export default App