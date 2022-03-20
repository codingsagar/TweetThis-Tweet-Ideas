import React from 'react'
import Twitter from "../Images/twitter.png";

const Header = () => {
  return (
    <div className='flex items-center'>
        <img src={Twitter} alt="" />
        <h2 className='font-bold'><span className='text-white ml-2'>Tweet</span> <span className='text-[#1DA1F2]'>This</span></h2>
    </div>
  )
}

export default Header