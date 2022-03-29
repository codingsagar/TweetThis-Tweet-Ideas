import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Followus from "./Components/Followus";
import TweetMain from "./Components/TweetMain";
import About from "./Components/About";
import { Missing } from "./Components/Missing";
import { Routes, Route} from "react-router-dom";

function App() {

  
  return (
    <div className="App font-[poppins]">
      <Navbar/>
      <Routes>
        <Route path="/" element={<TweetMain/>} />
        <Route path="/follow-us" element={<Followus/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
