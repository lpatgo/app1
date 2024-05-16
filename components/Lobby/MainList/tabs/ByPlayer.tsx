import React from 'react'

import {Table, TableRow, TableCell} from '@/components/ui/mainlist-table'

interface PlayerData {
    name: string
    id: string
    extra: string
}

//generate a few fake players
const myPlayers: PlayerData[] = [
    {name: 'player1', id: '1', extra: 'extra1'},
    {name: 'player2', id: '2', extra: 'extra2'},
    {name: 'player3', id: '3', extra: 'extra3'},
]


function ByPlayer() {
  return (
    <div>  <Table>
                    
    {myPlayers.map((player) => {
        return (
            <TableRow key={player.id}>
                <TableCell>{player.name}({player.id}/9)</TableCell>
                <TableCell>{player.extra}</TableCell>
            </TableRow>
        )
    })}
</Table></div>
  )
}

export default ByPlayer