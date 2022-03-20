import React, { useState, useEffect } from "react";
import Options from "./Options";
import TweetIdea from "./TweetIdea";
import GenerateBtn from "./GenerateBtn";
import Twitter from "../Images/twitter.svg";

const TweetMain = ({ theme }) => {
  const [tweetText, setTweetText] = useState(
    "Recommend a book you would want others to check out."
  );
  const [author, setAuthor] = useState("");
  const [api, setApi] = useState("joke");

  const fetchSelected = async () => {
    let controller = new AbortController();
    let new_api;
    switch (api) {
      case "joke":
        new_api = "https://icanhazdadjoke.com/";
        break;
      case "quote":
        new_api = "https://api.quotable.io/random";
        break;
      default:
        new_api = "https://api.adviceslip.com/advice";
        break;
    }
    setTweetText("Loading...");
    setAuthor("");
    let res = await fetch(new_api, {
      signal:controller.signal,
      headers: {
        accept: "application/json",
      },
    });

    switch (api) {
      case "joke":
        let { joke } = await res.json();
        setTweetText(joke);
        setAuthor("");
        break;
      case "quote":
        let { content, author } = await res.json();
        setTweetText(content);
        setAuthor(author);
        break;
      default:
        let { slip } = await res.json();
        setTweetText(slip.advice);
        setAuthor("");
        break;
    }

    return ()=>{
      controller.abort()
    };
  };


  useEffect(() => {
    let controller = new AbortController();
    const fetchSelected = async () => {
      let new_api;
      switch (api) {
        case "joke":
          new_api = "https://icanhazdadjoke.com/";
          break;
        case "quote":
          new_api = "https://api.quotable.io/random";
          break;
        default:
          new_api = "https://api.adviceslip.com/advice";
          break;
      }
      setTweetText("Loading...");
      setAuthor("");
      let res = await fetch(new_api, {
        signal:controller.signal,
        headers: {
          accept: "application/json",
        },
      });
  
      switch (api) {
        case "joke":
          let { joke } = await res.json();
          setTweetText(joke);
          setAuthor("");
          break;
        case "quote":
          let { content, author } = await res.json();
          setTweetText(content);
          setAuthor(author);
          break;
        default:
          let { slip } = await res.json();
          setTweetText(slip.advice);
          setAuthor("");
          break;
      }
    };
    fetchSelected();
    return ()=>{
      controller.abort();
    };
  }, [api]);

  

  

  return (
    <div className="md:mt-16 flex justify-center flex-col items-center mt-16 gap-y-5">
      <Options api={api} setApi={setApi} theme={theme} />
      <TweetIdea text={tweetText} author={author} theme={theme} />
      <GenerateBtn
        api={api}
        fetchSelected={fetchSelected}
      />
      <img
        src={Twitter}
        alt=""
        className="lg:block hidden h-52 absolute right-5 bottom-10 opacity-50 animate-bounce "
      />
      <img
        src={Twitter}
        alt=""
        className="lg:block hidden h-52 absolute left-5 bottom-10 opacity-50 animate-bounce"
      />
    </div>
  );
};

export default TweetMain;
