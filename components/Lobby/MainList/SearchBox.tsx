import React from 'react'
import { Input } from '@/components/ui/input'
function SearchBox() {
    const [searchTerm, setSearchTerm] = React.useState('')
  return (
    <div className='bg-secondary w-full h-12 px-4 py-10 flex items-center justify-center'>
    <Input value={'Search Player Name'} onChange={(e) => setSearchTerm(e.target.value)} />
    </div>
  )
}

export default SearchBox