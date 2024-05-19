import Lobby from "@/components/Lobby";
import React from "react";
import NavBar from "@/components/NavBar";

export default function Page() {
    return <div>
       {/*  Layout~~~   */}
       <NavBar />

        <Lobby />
    </div>;
    }