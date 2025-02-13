import Navbarcontainer from "./components/Navbarcontainer"
import './App.css'
// import Menubar from "./components/Menubar";
import Footercontainer from "./components/Footercontainer"
// import Parent from "../props/Parent";  // ❌ Incorrect path
// App.jsx
import { useTheme } from './components/ThemeContext';  // ✅ Correct path
import Parent from "../props/parent";
const App=()=>{
    const { isDarkMode } = useTheme();
    return(
        
        <div data-theme={isDarkMode ? 'dark' : 'light'}>
            
          
            {/* <Navbarcontainer/> */}
            <Parent/>
            {/* <Footercontainer/> */}
            
            

            
        </div>
    )

}

export default App