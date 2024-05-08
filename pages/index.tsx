

"use client"

import React, { useState } from 'react'; // Import React and useState hook
import Image from "next/image";
/* import { Inter } from "next/font/google";  */
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import Tabs components
import { MapViewer } from '@/components/MapViewer';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



/* const inter = Inter({ subsets: ["latin"] }); */


export default function Page() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to change the active tab
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };





  return (
    <div className=" bg-left-bottom bg-no-repeat" style={{ backgroundImage: `url('/big-arrow-750.png')` }}>

      <div className="flex flex-col items-center justify-center h-screen pt-36 text-center">

        {/* Fixed Header */}
        <header className="w-full py-4 px-8 flex items-center justify-between bg-white shadow-lg fixed top-0 z-10">
          <div className="flex items-center space-x-8">
            <Image src="/man-atlas-900w.png" alt="Logo" width={50} height={50} />
            <h2 className="text-2xl float-left leading-normal tracking-[0.6px] text-dkgray font-fun">Salt Days</h2>
          </div>
          <nav className=" absolute top-0 right-0 mt-0 mb-8 mr-3 h-full">
            <ul className="flex space-x-4">
              <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md font-sans"><a href="#" className="text-cool">Props</a></li>
              <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md  font-sans"><a href="#" className="text-cool">History</a></li>
              <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md  font-sans"><a href="https://www.youtube.com/results?search_query=chillest+dogs" className="text-cool" target='_blank'>Chillest dogs</a></li>
            </ul>
          </nav>
        </header>

        <div className="clear-both flex justify-center w-5/6 h-3/4 mx-auto mt-0 mb-0 pt-0 px-0 pb-0  shadow-sm bg-gray-100 bg-opacity-60 overflow-auto border-4 border-offwhite">

          {/*  Wrap around all of table ^^
          vv tabs content starting with header of tabs */}

          <Tabs defaultValue="current" className="w-full h-full mt-0 pb-10 opacity-95  ">
            <TabsList>
              <TabsTrigger value="current"  >Map</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="leaderboard" >Leaderboard</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
            <TabsContent value="current">
             <MapViewer  />

            </TabsContent>
            <TabsContent value="upcoming">
              <p className="font-sans leading-8 text-m mt-10 mb-20">
                I thought I was mistaken<br />
                I thought I heard your words<br />
                Tell me how do I feel<br />
                Tell me now, how do I feel <br/><br/>
                <Button>So... let's play!</Button>
              </p>
            </TabsContent>
            <TabsContent value="leaderboard">
              <p className="font-sans leading-8 text-m mt-10 mb-20">
                Those who came before me<br />
                Lived through their vocations<br />
                From the past until completion<br />
                They'll turn away no more<br/><br/>
                <Button>Learn</Button>
              </p>
            </TabsContent>
            <TabsContent value="community">
              <p className="font-sans leading-8 text-m mt-10 mb-20">
                I see a ship in the harbor<br />
                I can and shall obey<br />
                But if it wasn't for your misfortune<br />
                I'd be a heavenly person today <br/><br/>
                <Button>Join</Button>

              </p>
            </TabsContent>
          </Tabs>

        </div>

<div className="flex flex-wrap justify-between items-start w-5/6  mx-auto mb-5 px-0"> {/* Note the added flex-wrap and mb */}

<Card className="float-left w-1/2  min-h-24 font-fun leading-8 text-m mt-8 mb-4  mx-0 p-6  rounded-lg bg-white shadow-md text-left">
  <CardHeader>
    <CardTitle className="font-fun">Card Title</CardTitle>
    <CardDescription className="mt-2 font-sans text-m">I'm trying to tell you how crazy delicious this cookie is. I feel like I would run 2 miles to find another one.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
</Card>


  <Button className="float-left mx-10 mt-8 px-7 py-9 bg-offwhite text-black hover:bg-cool hover:text-white  rounded-lg uppercase font-sansfont">Wild Area</Button>


</div>






      </div>
    </div>
  );
}
