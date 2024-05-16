import React from "react";
import { Button } from "@/components/ui/button";
export default function LobbyHeader(){
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">CONTEST SNAPSHOT CIRCA SURVIVOR</h2>
      <div className="flex flex-col py-2">
        <span>8/15 entries</span>
        <span>4/7 players</span>
        <span>$93.75 avg value</span>
      </div>
      <Button className="bg-[#00B2A9] text-white py-2 px-4 rounded-full inline-flex items-center">
        CONTEST TOOLS
        <ChevronRightIcon className="ml-2" />
      </Button>
      <div className="pt-4">
        <h3 className="font-semibold">Picks due:</h3>
        <span>00 hrs 00 min</span>
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