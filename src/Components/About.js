import React from 'react'

const About = ({theme}) => {
  return (
    <div className='px-5 flex flex-col lg:w-2/3 md:px-16 py-16 gap-y-5'>
        <h1 to="/" className="text-2xl font-mono font-bold"><span className={`${theme==="dark"?"text-white":""}`}>Tweet</span><span className='text-[#1DA1F2]'>This</span></h1>
        <p className={`${theme==="dark"?"text-gray-200":""}`}>This web app uses three different API'S to fetch random quotes, jokes and advices for you. So that you can tweet daily and tweet good. This project is 100% made by me and you can feel free to copy or see the souce code on github. You can contact me on twitter and instagram. Links are in the follow us section. Thank you !!
        </p>
    </div>
  )
}

export default About