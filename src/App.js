import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Followus from "./Components/Followus";
import TweetMain from "./Components/TweetMain";
import About from "./Components/About";
import { useState} from "react";
import { Routes, Route} from "react-router-dom";
function App() {
  const [theme, setTheme] = useState("light");

  const thm = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#252424";
    } else {
      document.body.style.backgroundColor = "#ffffff";
    }
  };

  return (
    <div className="App font-[poppins]">
      <Navbar theme={theme} setTheme={setTheme} thm={thm}/>
      <Routes>
        <Route path="/" element={<TweetMain theme={theme} />} />
        <Route path="/follow-us" element={<Followus theme={theme}/>} />
        <Route path="/about" element={<About theme={theme}/>} />
      </Routes>
      <Footer theme={theme} />
    </div>
  );
}

export default App;
