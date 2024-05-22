import React from 'react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import Tabs components
import ByPlayer from './tabs/ByPlayer';
import ByEntry from './tabs/ByEntry';
import SearchBox from './SearchBox';

function MainList() {



  return (
    <div>
        <div className="flex flex-col mx-3 bg-background">
            <div>
               <SearchBox />
            </div>
            <div> 
                <Tabs defaultValue='players'> 
                
                    <TabsList >
                        <div className="flex justify-between">
                            <span className='flex items-center justify-center uppercase text-sm'>view by</span>
                        <TabsTrigger value="players">by players</TabsTrigger>
                        <TabsTrigger value="entries">by entry</TabsTrigger>
                        <TabsTrigger value="ad">ads</TabsTrigger>
                        </div>
                    </TabsList>
                    <TabsContent value="players">
                        <ByPlayer />
                        {/* players */}
                    </TabsContent>
                    <TabsContent value="entries">
                        <ByEntry />
                    
                    </TabsContent>
                    <TabsContent value="ad">
                        ads
                    </TabsContent>
                </Tabs>
            </div>


        </div>

    </div>
  )
}

export default MainList