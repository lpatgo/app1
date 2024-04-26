

"use client"

import React, { useState } from 'react'; // Import React and useState hook
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import Tabs components


const inter = Inter({ subsets: ["latin"] });


export default function Page() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to change the active tab
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };



  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/goa-ghatate-desat-2000.jpg')` }}>


      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        {/* Fixed Header */}
        <header className="w-full py-5 px-10 flex items-center justify-between bg-white shadow-lg fixed top-0 z-10">
          <div className="flex items-center space-x-8">
            <Image src="/atlas-200px-warm.png" alt="Logo" width={50} height={50} />
            <h2 className="text-2xl float-left leading-normal tracking-[0.6px] text-dkgray font-funfont">Survivor Atlas</h2>
          </div>
          <nav className=" absolute top-0 right-0 mt-0 mb-8 mr-3 h-full">
            <ul className="flex space-x-4">
              <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md font-sansfont"><a href="#" className="text-cool">Probst Bets</a></li>
              <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md  font-sansfont"><a href="#" className="text-cool">Circa Survivor History</a></li>
              <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md  font-sansfont"><a href="https://www.youtube.com/results?search_query=chillest+dogs" className="text-cool" target='_blank'>Find the chillest dogs</a></li>
            </ul>
          </nav>
        </header>

        <div className="clear-both flex justify-center w-full h-4/5 mx-auto mt-26 mb-3 px-2 py-4 shadow-sm">

          {/* Main content area with tabs */}

          <Tabs defaultValue="current" className="w-5/6  bg-white py-10 opacity-95  rounded-lg shadow-md">
            <TabsList>
              <TabsTrigger value="current" className="bg-offwhite hover:bg-highlight p-2 pt-3" >Current</TabsTrigger>
              <TabsTrigger value="upcoming" className="bg-offwhite hover:bg-highlight p-2 pt-3">Upcoming</TabsTrigger>
              <TabsTrigger value="leaderboard" className="bg-offwhite hover:bg-highlight p-2 pt-3">Leaderboard</TabsTrigger>
              <TabsTrigger value="community" className="bg-offwhite hover:bg-highlight p-2 pt-3">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="current">
              <p className="font-sansfont leading-8 text-m mt-10 mb-20">
                How does it feel<br />
                To treat me like you do?<br />
                When you've laid your hands upon me<br />
                And told me who you are<br/><br/>
                <Button>Previous</Button>
              </p>
            </TabsContent>
            <TabsContent value="upcoming">
              <p className="font-sansfont leading-8 text-m mt-10 mb-20">
                I thought I was mistaken<br />
                I thought I heard your words<br />
                Tell me how do I feel<br />
                Tell me now, how do I feel <br/><br/>
                <Button>So... let's play!</Button>
              </p>
            </TabsContent>
            <TabsContent value="leaderboard">
              <p className="font-sansfont leading-8 text-m mt-10 mb-20">
                Those who came before me<br />
                Lived through their vocations<br />
                From the past until completion<br />
                They'll turn away no more<br/><br/>
                <Button>Learn</Button>
              </p>
            </TabsContent>
            <TabsContent value="community">
              <p className="font-sansfont leading-8 text-m mt-10 mb-20">
                I see a ship in the harbor<br />
                I can and shall obey<br />
                But if it wasn't for your misfortune<br />
                I'd be a heavenly person today <br/><br/>
                <Button>Join</Button>

              </p>
            </TabsContent>
          </Tabs>
        </div>


      </div>
    </div>
  );
}
