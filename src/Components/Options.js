import React from "react";

const Options = ({api,setApi,theme}) => {
  return (
    <div className="flex gap-x-4 md:gap-x-6">
      <button className={`md:px-12 btn active:bg-blue-300  ${theme==="dark"?"bg-[#565454]":""} ${api ==="joke" ? " bg-[#1DA1F2]": null} `} onClick={()=>{setApi("joke")}}>Jokes</button>
      <button className={`md:px-12 btn  active:bg-blue-300  ${theme==="dark"?"bg-[#565454]":""} ${api ==="advice" ? " bg-[#1DA1F2]": null} `} onClick={()=>{setApi("advice")}}>Advices</button>
      <button className={`md:px-12 btn active:bg-blue-300 ${api ==="quote" ? " bg-[#1DA1F2]": null} ${theme==="dark"?"bg-[#565454]":""} `} onClick={()=>{setApi("quote")}}>Quotes</button>
    </div>
  );
};

export default Options;
