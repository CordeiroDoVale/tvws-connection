import React from 'react'
import Logo from "../Components/Logo"
import ChannelSelect from '../Components/ChannelSelect'
import Timer from '../Components/Timer'

export default function Channels() {
  return (
    <div className="m-0 w-screen h-screen bg-gray-800 flex flex-col  content-center items-center">
      
      <Logo/>
      
      <div className='h-1/4'/>

      <ChannelSelect/>
      
      <div className='h-1/4'/>
      
      <Timer/>
    

    </div>
  )
}
