import React,{useContext} from "react";
import DataContext from "../Context/DataContext";

const TweetText = () => {

  const {tweetText, author } = useContext(DataContext);
  return (
    <div>
      <p className="font-bold text-[16px] text-white min-h-[100px] md:text-lg">
        {tweetText}
        {author && <span className="text-gray-300"> - {author}</span>}
      </p>
    </div>
  );
};

export default TweetText;
