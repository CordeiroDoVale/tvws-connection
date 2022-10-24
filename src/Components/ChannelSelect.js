import React from 'react'
import { useState } from 'react';

export default function ChannelSelect() {

    const getInitialState = () => {
        const value = "41";
        return value;
      };

    const [value, setValue] = useState(getInitialState);

    const handleChange = (e) => {
      setValue(e.target.value);
    };

    return (
    <>
    <select 
    className='w-auto lg:w-1/3 text-center font-mono text-3xl lg:text-5xl'
    value={value} onChange={handleChange}>
        <option value="41">Channel 41</option>
        <option value="42">Channel 42</option>
        <option value="43">Channel 43</option>
      </select>
    </>
  )
}
