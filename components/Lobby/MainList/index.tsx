import React from 'react'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"; // Import Tabs components
import ByPlayer from './tabs/ByPlayer';
import ByEntry from './tabs/ByEntry';
import SearchBox from './SearchBox';

function MainList() {
    const [searchTerm, setSearchTerm] = React.useState('')


  return (
    <div>
        <div className="flex flex-col w-full">
            <div>
               <SearchBox />
            </div>
            <div>
                <Tabs>
                    <TabsList>
                        <TabsTrigger value="players">by playres</TabsTrigger>
                        <TabsTrigger value="entries">by teams</TabsTrigger>
                    </TabsList>
                    <TabsContent value="players">
                        <ByPlayer />
                    </TabsContent>
                    <TabsContent value="entries">
                        <ByEntry />
                    </TabsContent>
                </Tabs>
            </div>
        </div>

    </div>
  )
}

export default MainList