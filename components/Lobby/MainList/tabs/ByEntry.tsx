import React from 'react'

import { Table, TableRow, TableCell, TableBody } from '@/components/ui/mainlist-table'

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
]


function ByEntry() {
    return (
        <div>  
            <Table>
            <TableBody>
                {myEntries.map((entry) => {
                    return (
                        <TableRow key={entry.id}>
                            <TableCell>{entry.name}({entry.id}/9)</TableCell>
                            <TableCell>{entry.extra}</TableCell>
                            <TableCell className='flex justify-end'>
                                dot code here

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