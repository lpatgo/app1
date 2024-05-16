import React from 'react'
import { Input } from '@/components/ui/input'
function SearchBox() {
    const [searchTerm, setSearchTerm] = React.useState('')
  return (
    <Input value={'Search Player Name'} onChange={(e) => setSearchTerm(e.target.value)} />
  )
}

export default SearchBox