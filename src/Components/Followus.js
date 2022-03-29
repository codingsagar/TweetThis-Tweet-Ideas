import React,{useContext} from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import DataContext from "../Context/DataContext";

const Followus = () => {

  const {theme} = useContext(DataContext);
  
  return (
    <div className="flex flex-col justify-center items-center h-[75vh] gap-y-9">
      <h2
        className={`text-2xl font-bold ${
          theme === "dark" ? "text-gray-300" : null
        }`}
      >
        You can follow me on :
      </h2>
      <div className="flex gap-x-10">
        <a
          className={`text-6xl ${
            theme === "dark" ? "text-gray-200" : null
          } hover:cursor-pointer`}
          href="https://www.instagram.com/codingsagar"
          target="_blank" rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          className="text-6xl text-[#1DA1F2] hover:cursor-pointer"
          href="https://www.twitter.com/codingsagar"
          target="_blank" rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Followus;
