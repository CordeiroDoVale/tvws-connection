import React, { useState, useEffect } from 'react'

export default function Timer(totalTime) {
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(15 * 60)
  
  const seconds = totalTimeSeconds % 60
  const minutes = Math.floor(totalTimeSeconds / 60)
  const hours = Math.floor(totalTimeSeconds/ 3600)

  useEffect(() => {
    if(totalTimeSeconds === 0){
        alert("Tempo alocado esgotado!")
        return
      }
    setTimeout(() => {
        setTotalTimeSeconds(totalTimeSeconds - 1)
    }, 1000)
  }, [totalTimeSeconds])

    return (
    <>
        <div className='bg-gray-400 px-7 py-2 h-auto w-auto lg:w-1/4 flex flex-row content-center justify-center items-center [&>span]:text-3xl md:[&>span]:text-5xl lg:[&>span]:text-7xl rounded-xl'>
            <span>{hours.toString().padStart(2, "0")}</span>
            <span> : </span>
            <span>{minutes.toString().padStart(2, "0")}</span>
            <span> : </span>
            <span>{seconds.toString().padStart(2, "0")}</span>
        </div>
    </>
  )
}
