import React from 'react';
import Logo from './Logo';
import Searchbar from './Searchbar';
import Menubar from './Menubar' 

const Navbarcontainer= () => {
    return (
        <><div id="navbar">
            <Logo/>
            <Searchbar/>
            <Menubar/></div>
            </>
    )
}
export default Navbarcontainer