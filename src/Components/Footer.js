import React from 'react'

const Footer = ({theme}) => {
  return (
    <footer className={`font-bold text-center mt-6 ${theme==="dark"?"text-gray-200":""}`}>
        <p>Made with ❤️ by <span className='text-[#1DA1F2]'>Sagar</span></p>
    </footer>
  )
}

export default Footer