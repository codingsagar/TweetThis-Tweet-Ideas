import React, { useState ,useEffect,useContext} from 'react';
import DataContext from '../Context/DataContext';

const TweetBtn = () => {

  const {tweetText,author} = useContext(DataContext);
  const [time,setTime] = useState("");

  const getTime = () =>{
    let t = new Date();
    t = t.toLocaleTimeString() + " | " + t.toLocaleDateString().replaceAll("/","-");
    setTime(t);
  };

  useEffect(() => {
    getTime();
  }, [])
  

  return (
    <div className='flex items-center justify-between'>
        <p className="text-gray-400 font-semibold text-xs sm:text-base">{time}</p>
        <button className="btn bg-[#1DA1F2] rounded-full px-8">
        <a href={`https://twitter.com/intent/tweet?text=${tweetText} ${
          author ? `- ${author}`: ""
        }`} target="_blank" rel="noreferrer">Tweet</a>
        </button>
    </div>
  )
}

export default TweetBtn