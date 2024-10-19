import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { active, deActive, deActiveAll } from "./scripts/navbar";
import { ScreenIsGreaterThan, activeScrollToId, observerElements } from "./scripts/script";
import MainImage from "./components/MainImage";
import Skills from "./components/Skills";
import Cursor from "./components/Cursor";
import Projects from "./components/Projects";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [deviceType , setDeviceType] = useState('');
  useEffect(()=>{
    if(ScreenIsGreaterThan(768)){
      setDeviceType('window')
    }
    else{
      setDeviceType('mobile')
    }
    window.addEventListener('resize' , function(){
      if(ScreenIsGreaterThan(768)){
        setDeviceType('window')
      }
      else{
        setDeviceType('mobile')
      }
    })

    observerElements('.section' , (section)=>{
      // deActiveAll();
      active(section.getAttribute("id"));
    }
    , 
    (section)=>{
      deActive(section.getAttribute("id"));
    })
    
    
    activeScrollToId();
  } , []);

  return (
    <>
      {deviceType === 'window' && <Cursor />}
      <NavBar deviceType={deviceType}/>
      <main className="w-[90%] mx-auto pt-60  pb-[500px] md:w-[60%] md:pt-80">
        <MainImage />
        {deviceType === 'window' && <Summary />}
        {deviceType === 'window' && <Skills />}
        {deviceType === 'window' && <Projects />}
      </main>
    </>
  );
}

export default App;
