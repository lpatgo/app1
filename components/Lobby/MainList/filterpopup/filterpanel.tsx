import React from 'react'
import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ChoiceDrawer } from './ChoiceDrawer'

export default function FilterPanel() {
    const [hideTheDead, setHideTheDead] = useState(true)
  return (
    <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-1">
                            <Label>Burned</Label>
                            <div>
                            [] <ChoiceDrawer label="Burned" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <Label>In Pocket</Label>
                            []  <ChoiceDrawer label="In Pocket" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label>Hide the Dead</Label>
                        <Checkbox checked={hideTheDead} onChange={() => setHideTheDead(!hideTheDead)} />

                    </div>
                </div>
  )
}
