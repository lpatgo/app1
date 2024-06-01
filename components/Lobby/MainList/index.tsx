import React from 'react'

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import Tabs components
import ByPlayer from './tabs/ByPlayer';
import ByEntry from './tabs/ByEntry';
import SearchBox from './SearchBox';
import { FilterIcon } from 'lucide-react';
import { FilterButton } from './filterpopup/FilterButton';

function MainList() {



    return (
        <div>
            <div className="flex flex-col mx-3 bg-background">
                <div>
                    <SearchBox />
                </div>
                <div>
                    <Tabs defaultValue='players' className='w-full'>


                        <div className="flex flex-row gap-x-1 w-full py-2 px-2">
                            <div className="flex flex-row  w-full ">
                                <span className='flex flex-row items-center text-foreground/40 m-3 w-10'>view</span>

                                <div>
                                    <TabsList >
                                        <TabsTrigger value="players">players</TabsTrigger>
                                        <TabsTrigger value="entries">entry</TabsTrigger>
                                        <TabsTrigger value="ad">ads</TabsTrigger>
                                    </TabsList>
                                </div>
                            </div>


                            <div className='flex items-center justify-end'>
                                <FilterButton onComplete={() => { }} />
                            </div>
                        </div>


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