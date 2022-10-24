import React from 'react'
import Logo from '../Components/Logo'
import TextInput from '../Components/TextInput'
import lock from '../imgs/lock.svg'

export default function Home() {
  return (
    <div className="m-0 w-full h-full bg-gray-800 flex flex-col justify-center">

      <body className='w-screen h-screen flex flex-col content-center items-center'>
      
      <Logo/>
      
      <div className=' h-3/10 pt-20 flex justify-center items-center'> 
        <img src={lock} alt="Lock Icon" className='w-20 h-20'/>
      </div>

      <TextInput/>

      </body>
    </div>
  )
}
