import React from "react";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";

export default function LobbyHeader() {
  return (
    <div className="w-screen mt-20 mb-2 overflow-hidden">

      <div className="p-4 w-screen shadow-md">
        <div className="mt-8  text-[19px]">
          <span className="text-primary-foreground">CONTEST SNAPSHOT </span>
          <span className="text-secondary-foreground">CIRCA SURVIVOR</span>
        </div>

        <div className="flex flex-row justify-between items-center">

          <div className="flex flex-col py-2">
            <span>8/15 entries</span>
            <span>4/7 players</span>
            <span>$93.75 avg value</span>
          </div>
          
          <div className="flex flex-col justify-end">
          <Button variant="leftround" size="lobbyheader" className="-mr-10">contest tools <ChevronRightIcon /></Button>
          
          <Button variant="leftround" size="lobbyheader" className="-mr-10">button2</Button>

          </div>
        </div>

        <div className="pt-4 w-2/3">
          <h3 className="font-semibold">Picks due: 00 hrs 00 min</h3>
        
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