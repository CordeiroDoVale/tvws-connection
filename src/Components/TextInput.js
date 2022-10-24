import React from 'react'
import enterArrow from '../imgs/enterArrow.svg'
import {Link} from "react-router-dom"

export default function TextInput() {
  return (
    <div className='w-auto m-5 bg-gray-500 flex flex-row justify-center items-center rounded-xl'>
    <form className='p-2 flex flex-row justify-center items-center'>
       <label>
         <input name="password" placeholder='   Password' className='rounded'/>
       </label>
     
      <Link to="/channels">
      <button type="submit">
      <img src={enterArrow} alt="Enter Arrow"/>
     </button>
     </Link>
    </form>
    </div>
  )
}
