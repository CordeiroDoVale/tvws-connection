import React from 'react'
import logo from '../imgs/logo.svg'

export default function Logo() {
  return (
    <div className='h-1/6 w-full flex flex-row content-center justify-center'>
        <div className='w-auto'> 
          <img src={logo} alt="TV With a Wi-Fi symbol inside"/> 
        </div>
        <div className='w-auto flex justify-center items-center text-white font-mono text-3xl lg:text-5xl'>
          TVWS Connection
        </div>
    </div>
  )
}
