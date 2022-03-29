import React from 'react'
import MissingPng from "../Images/missing.png";
import { Link } from 'react-router-dom';

export const Missing = () => {
  return (
    <div className='mt-14 mb-8 flex justify-center flex-col items-center gap-y-6'>
        <img src={MissingPng} alt=""  className='h-64 md:h-80'/>
        <Link to="/" className='btn'>Go to Homepage</Link>
    </div>
  )
}
