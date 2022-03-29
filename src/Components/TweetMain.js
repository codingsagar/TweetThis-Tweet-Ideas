import React, {useEffect ,useContext} from "react";
import Options from "./Options";
import TweetIdea from "./TweetIdea";
import GenerateBtn from "./GenerateBtn";
import Twitter from "../Images/twitter.svg";
import DataContext from "../Context/DataContext";

const TweetMain = () => {

  const {fetchSelected} = useContext(DataContext);

  useEffect(() => {
    fetchSelected();
  }, [fetchSelected]);


  

  

  return (
    <div className="md:mt-16 flex justify-center flex-col items-center mt-16 gap-y-5">
      <Options/>
      <TweetIdea/>
      <GenerateBtn/>
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
