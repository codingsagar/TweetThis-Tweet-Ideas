import React,{useContext} from 'react'
import NightIcon from "../Images/dark.png"
import LightIcon from "../Images/light.png"
import { Link } from 'react-router-dom'
import DataContext from '../Context/DataContext'

const Navbar = () => {
  
  const {theme,setTheme,themeChange}= useContext(DataContext);

  const handleTheme = ()=>{
    theme==="light"?setTheme("dark"):setTheme("light");
    themeChange();
  }
  return (
    <nav className={`md:flex-row flex items-center justify-between px-16 flex-col py-5 gap-y-6 ${theme==="dark"?"shadow-white":"shadow-md"}  h-[100%]`}>
        <Link to="/" className="text-2xl font-extrabold"><span className={`${theme==="dark"?"text-white":""}`}>Tweet</span><span className='text-[#1DA1F2] cursor-pointer'>This</span></Link>
        <ul className='md:justify-end flex md:gap-x-12 font-medium text-[#524C4C] items-center justify-around w-[90vw]'>
            <Link to="about" className={`cursor-pointer ${theme==="dark"?"text-gray-300":""}`}>About</Link>
            <Link to="follow-us" className={`cursor-pointer ${theme==="dark"?"text-gray-300":""}`}>Follow Us</Link>
            <li className='rounded-full bg-[#524C4C] h-10 w-10 cursor-pointer grid place-content-center' onClick={handleTheme}>
                <img src={theme==="light"?NightIcon:LightIcon} alt="" className='h-[25px] w-[25px]' style={theme==="dark"?{filter:'invert(100%)'}:null}/>
            </li>
        </ul> 
    </nav>
  )
}

export default Navbar