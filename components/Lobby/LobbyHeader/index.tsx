import React from "react";
import NavBar from "@/components/Lobby/LobbyHeader/NavBar";
import { Button } from "@/components/ui/button";

export default function LobbyHeader(){
    return (
      <div className="w-screen mt-20 mb-2 overflow-hidden">
      <NavBar />

        <div className="bg-white p-4 w-screen shadow-md">
        <div className="mt-8  text-[19px]">
        <span className="text-[#293241]">CONTEST SNAPSHOT </span>
        <span className="text-[rgba(103,116,131,0.80)]">CIRCA SURVIVOR</span>
      </div>

      <div className="flex flex-col py-2">
        <span>8/15 entries</span>
        <span>4/7 players</span>
        <span>$93.75 avg value</span>
      </div>
      <Button size="lg" variant="default" className="float-right -mt-7 -mr-10 ">Contest Tools &gt; </Button>

      <div className="pt-4 w-2/3">
        <h3 className="font-semibold">Picks due:</h3>
        <span>00 hrs 00 min</span>
      </div>
    </div>

    </div>
    );
}


function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    )
  }