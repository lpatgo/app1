import Lobby from "@/components/Lobby";
import React from "react";
import NavBar from "@/components/NavBar";

export default function Page() {
    const [darkMode, setDarkMode] = React.useState(false);
    const pagetailwind = "bg-background h-screen w-screen overflow-hidden"

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    
    return(

     <div className={darkMode ? `${pagetailwind} dark` : pagetailwind}>
       {/*  Layout~~~   */}
       <NavBar darkModeCallback={toggleDarkMode} />

        <Lobby />
    </div>
    )
    }