

"use client"

import React, { useState } from 'react'; // Import React and useState hook
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


const inter = Inter({ subsets: ["latin"] });


export default function Page() {
  // State to manage active tab
  const [activeTab, setActiveTab] = useState(0);

  // Function to change the active tab
  const handleTabClick = (index) => {
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
        <nav  className=" absolute top-0 right-0 mt-0 mb-8 mr-3 h-full">
          <ul className="flex space-x-4">
            <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md font-sansfont"><a href="#" className="text-cool">Probst Bets</a></li>
            <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md  font-sansfont"><a href="#" className="text-cool">Circa Survivor History</a></li>
            <li className="bg-offwhite hover:bg-highlight p-2 pt-3  rounded-bl-md rounded-br-md  font-sansfont"><a href="https://www.youtube.com/results?search_query=chillest+dogs" className="text-cool">Find the chillest dogs</a></li>
          </ul>
        </nav>
      </header>

      <div className="clear-both w-full h-4/5 mx-0 mt-26 mb-0.5 p-1">

         {/* Main content area with tabs */}
         <div className="flex flex-col items-center w-full h-4/5 mt-20 mb-0 mx-0 p-8">
        <div className="w-11/12  p-5 mt-5 rounded-lg shadow-lg">
          {/* Tab Navigation */}
          <div className="grid grid-cols-4 w-full h-auto justify-between mb-4">
            <button className="tab-button block mr-3 p-2 bg-offwhite hover:bg-highlight rounded-tl-lg rounded-tr-lg text-center font-sansfont" onClick={() => handleTabClick(0)}>CURRENT</button>
            <button className="tab-button block mr-3 p-2 bg-offwhite hover:bg-highlight rounded-tl-lg rounded-tr-lg text-center font-sansfont" onClick={() => handleTabClick(1)}>Upcoming</button>
            <button className="tab-button block mr-3 p-2 bg-offwhite hover:bg-highlight rounded-tl-lg rounded-tr-lg text-center font-sansfont" onClick={() => handleTabClick(2)}>Leaderboard</button>
            <button className="tab-button block mr-3 p-2 bg-offwhite hover:bg-highlight rounded-tl-lg rounded-tr-lg text-center font-sansfont" onClick={() => handleTabClick(3)}>Community</button>
          </div>


          {/* Tab Content */}
          <div className="text-left p-5 w-full min-h-7/8 bg-offwhite">
            <div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
<p className="font-sansfont leading-8 text-m mb-20">
How does it feel<br/>
To treat me like you do?<br/>
When you've laid your hands upon me<br/>
And told me who you are</p>
            </div>
            <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
<p className="font-sansfont leading-8 text-m mb-20">
I thought I was mistaken<br/>
I thought I heard your words<br/>
Tell me how do I feel<br/>
Tell me now, how do I feel</p>
            </div>
            <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
<p className="font-sansfont leading-8 text-m mb-20">
Those who came before me<br/>
Lived through their vocations<br/>
From the past until completion<br/>
They'll turn away no more</p>
            </div>
            <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
<p className="font-sansfont leading-8  text-m mb-20">
I see a ship in the harbor<br/>
I can and shall obey<br/>
But if it wasn't for your misfortune<br/>
I'd be a heavenly person today</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="flex justify-center w-full px-8 my-auto">
    <div className="flex items-center space-x-2">
        <Checkbox id="terms1" />
        <div className="flex flex-col text-left">
            <label htmlFor="terms1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
                (check if you agree to them)
            </p>
        </div>
    </div>
</div>

        <Button className="my-8 text-offwhite bg-dkgray hover:bg-highlight">JOIN A CONTEST</Button>

      </div>
      </div>
  );
}
