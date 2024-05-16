import React from "react";
import LobbyHeader from "./LobbyHeader";
import MainList from "./MainList";

export default function Lobby(){
    return (
        <div>
            <h1>Lobby</h1>

            <div className="flex flex-col w-full">
                <LobbyHeader />
                <MainList />

                </div>
        </div>
    );
}