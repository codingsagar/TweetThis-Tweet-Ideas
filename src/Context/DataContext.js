import { useState, createContext,useCallback } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
  const [theme, setTheme] = useState("light");
  const [tweetText, setTweetText] = useState("");
  const [author, setAuthor] = useState("");
  const [api, setApi] = useState("joke");

  const fetchSelected = useCallback(async () => {
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
      signal: controller.signal,
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

    return () => {
      controller.abort();
    };
  },[api]);

  const themeChange = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#252424";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  };

  return (
    <DataContext.Provider
      value={{
        theme,
        setTheme,
        tweetText,
        setTweetText,
        author,
        setAuthor,
        api,
        setApi,
        fetchSelected,
        themeChange,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
