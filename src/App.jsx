import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { active, activesectionAnchors, deActive, deActiveAll , observerElements } from "./scripts/navbar";
import MainImage from "./components/MainImage";
import Skills from "./components/Skills";
import Cursor from "./components/Cursor";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(()=>{
    observerElements('.section' , (section)=>{
      // deActiveAll();
      active(section.getAttribute("id"));
    }
    , 
    (section)=>{
      deActive(section.getAttribute("id"));
    })
    
    
    activesectionAnchors();
  } , []);

  return (
    <>
      <Cursor />
      <NavBar />
      <main className="w-[60%] mx-auto pt-80 pb-[500px]">
        <MainImage />
        <Summary />
        <Skills />
      </main>
    </>
  );
}

export default App;
