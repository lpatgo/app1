import React from 'react'

function lobbytop() {
    const size = "large"

  return (

    <div className='px-2 sm:px-4 max-w-7xl'>
    <div className="flex flex-col sm:flex-row mt-2  text-[19px] justify-start gap-x-2">
      {size === 'large' && (
      <span className="text-primary-foreground font-medium">CONTEST SNAPSHOT </span>
      )}
      <span className="text-secondary-foreground font-light uppercase">CIRCA SURVIVOR</span>
    </div>

    <div className="flex flex-row justify-between items-center">

      <div className="flex flex-col py-1 text-sm ">
        <span>56/75 entries</span>
        <span>{20} / {60} players</span>
        <span>$100000 avg entry value</span>
      </div>
      
    </div>

    {/* <pre>
      {JSON.stringify(contest.config, null, 2)}
    </pre> */}
  </div>

  )
}

export default lobbytop