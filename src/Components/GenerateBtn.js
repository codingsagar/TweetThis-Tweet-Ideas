import React from 'react'

const GenerateBtn = ({fetchSelected}) => {
  return (
    <button className='btn px-10 py-2 rounded-full bg-[#524C4C]
    active:bg-[#807e7e]' onClick={fetchSelected}>
Generate More
    </button>
  )
}

export default GenerateBtn