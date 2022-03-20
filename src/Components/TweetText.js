import React from "react";

const TweetText = ({ text, author }) => {
  return (
    <div>
      <p className="font-bold text-[16px] text-white min-h-[100px] md:text-lg">
        {text}
        {author && <span className="text-gray-300"> - {author}</span>}
      </p>
    </div>
  );
};

export default TweetText;
