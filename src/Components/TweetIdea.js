import React from 'react'
import Header from './Header'
import TweetBtn from './TweetBtn'
import TweetText from './TweetText'

const TweetIdea = ({text,author,theme}) => {
  return (
    <main className={`md:w-[520px] flex flex-col bg-[rgb(58,54,54)] min-h-[240px] w-[95vw] md:px-8 justify-evenly gap-y-6 rounded-xl py-5 px-4 ${theme==="dark"?"bg-[#565454]":""}`}>
        <Header/>
        <TweetText text={text} author={author}/>
        <TweetBtn text={text} author={author}/>      
    </main>
  )
}

export default TweetIdea