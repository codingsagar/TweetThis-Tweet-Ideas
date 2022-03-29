import React,{useContext} from 'react'
import Header from './Header'
import TweetBtn from './TweetBtn'
import TweetText from './TweetText'
import DataContext from '../Context/DataContext'

const TweetIdea = () => {

  const {theme} = useContext(DataContext);
  return (
    <main className={`sm:w-[520px] flex flex-col bg-[rgb(58,54,54)] min-h-[240px]  w-[95vw] md:px-8 justify-evenly gap-y-6 rounded-xl py-5 px-4 ${theme==="dark"?"bg-[#565454]":""}`}>
        <Header/>
        <TweetText/>
        <TweetBtn/>      
    </main>
  )
}

export default TweetIdea