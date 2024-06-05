import React from 'react'

import { Table, TableRow, TableCell, TableBody } from '@/components/ui/mainlist-table'

import TeamIcon from '@/components/ui/teamicon';

interface EntryData {
    name: string
    id: string
    extra: string
}

//generate a few fake players
const myEntries: EntryData[] = [
    { name: 'entry1', id: '1', extra: 'extra1' },
    { name: 'entry2', id: '2', extra: 'extra2' },
    { name: 'entry3', id: '3', extra: 'extra3' },
    { name: 'entry4', id: '4', extra: 'extra4' },
    { name: 'entry5', id: '5', extra: 'extra5' },
]


function ByEntry() {
    return (
        <div>

            <Table>
            <TableBody>
            <TableRow>
                    <TableCell>large</TableCell>
                    <TableCell>
                        <TeamIcon color1='red' color2='blue' size='large' />
                        <TeamIcon color1='pink' color2='black' size='large' />
                    </TableCell>
                    <TableCell>
                        <TeamIcon color1='red' color2='blue' size='large' textMode={true} text="TXT" />
                        <TeamIcon color1='pink' color2='black' size='large' textMode={true} text="PNK" />
                        </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>medium</TableCell>
                    <TableCell>
                        <TeamIcon color1='red' color2='blue' size='medium' />
                        <TeamIcon color1='pink' color2='black' size='medium' />
                    </TableCell>
                    <TableCell>
                        <TeamIcon color1='red' color2='blue' size='medium' textMode={true} text="TXT" />
                        <TeamIcon color1='pink' color2='black' size='medium' textMode={true} text="PNK" />
                        </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>small</TableCell>
                    <TableCell>
                        <TeamIcon color1='red' color2='blue' size='small' />
                        <TeamIcon color1='pink' color2='black' size='small' />
                    </TableCell>
                    <TableCell>
                        <TeamIcon color1='red' color2='blue' size='small' textMode={true} text="TXT" />
                        <TeamIcon color1='pink' color2='black' size='small' textMode={true} text="PNK" />
                        </TableCell>
                </TableRow>

                {myEntries.map((entry) => {
                    return (
            <TableRow key={entry.id}>
                 <TableCell>{entry.name}({entry.id}/99) </TableCell>
                 <TableCell>{entry.extra}  </TableCell>
                 <TableCell className='justify-center break-words whitespace-normal'>
                    <div className='flex flex-row items-center'>
                        <TeamIcon color1='red' color2='blue' size='small' textMode={true} text="ATL" />
                        <TeamIcon color1='red' color2='blue' size='large' />
                        <TeamIcon color1='orange' color2='brown' size='small' />
                    </div>

                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
        </div>
    )
}

export default ByEntry