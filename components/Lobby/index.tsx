import React from "react";
import LobbyHeader from "./LobbyHeader";
import MainList from "./MainList";

export default function Lobby(){
    return (
        <div>
           {/* removed the word Lobby here  */}

            <div className="flex flex-col w-full bg-dotspattern">
                <LobbyHeader />
                <MainList />

                </div>
        </div>
    );
}