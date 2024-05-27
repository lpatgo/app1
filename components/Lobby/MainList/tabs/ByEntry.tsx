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
]


function ByEntry() {
    return (
        <div>

            <Table>
            <TableBody>
                {myEntries.map((entry) => {
                    return (
            <TableRow key={entry.id}>
                 <TableCell>{entry.name}({entry.id}/99) </TableCell>
                 <TableCell>{entry.extra}  </TableCell>
                 <TableCell className='justify-center'>
                    <td><TeamIcon leftColor="red" rightColor="gold" size={2} /></td>
                    <td><TeamIcon leftColor="green" rightColor="gray" size={2} /></td>
                    <td><TeamIcon leftColor="purple" rightColor="yellow" size={2} /></td>
                    <td><TeamIcon leftColor="orange" rightColor="black" size={2} /></td>
                    <td><TeamIcon leftColor="green" rightColor="yellow" size={2} /></td>
                    <td><TeamIcon leftColor="brown" rightColor="orange" size={2} /></td>
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