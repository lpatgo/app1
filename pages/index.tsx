import Lobby from "@/components/Lobby";
import React from "react";
import NavBar from "@/components/NavBar";

export default function Page() {
    const [darkMode, setDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    
    return(

     <div className={darkMode ? "dark" : ""}>
       {/*  Layout~~~   */}
       <NavBar darkModeCallback={toggleDarkMode} />

        <Lobby />
    </div>
    )
    }