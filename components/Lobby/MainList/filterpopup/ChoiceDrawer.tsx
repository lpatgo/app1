
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
interface ChoiceDrawerProps {
    label: string
}
 
export function ChoiceDrawer({ label }: ChoiceDrawerProps) {
  const [goal, setGoal] = useState(350)
  const [selectedChoicesIds, setSelectedChoicesIds] = useState<string[]>([])
  const nflAbbreviations = ["ARI", "ATL", "BAL", "BUF", "CAR", "CHI", "CIN", "CLE", "DAL", "DEN", "DET", "GB", "HOU", "IND", "JAX", "KC", "LAC", "LAR", "LV", "MIA", "MIN", "NE", "NO", "NYG", "NYJ", "PHI", "PIT", "SEA", "SF", "TB", "TEN", "WAS"]
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }
 
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{label}</DrawerTitle>
            <DrawerDescription>Select</DrawerDescription>
          </DrawerHeader>
          <ToggleGroup value={selectedChoicesIds} type='multiple' onValueChange={(values) => setSelectedChoicesIds(values)} >
              
                    <div className='flex flex-wrap gap-2'>
                        {nflAbbreviations.map((choice, index) => (
                            <ToggleGroupItem key={index} value={choice}>
                                {choice}
                            </ToggleGroupItem>
                        ))}
                    </div>
                </ToggleGroup>


          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}