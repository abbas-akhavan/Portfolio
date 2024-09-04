import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { active, deActive, deActiveAll , observerElements } from "./scripts/navbar";
import MainImage from "./components/MainImage";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(()=>{
    observerElements('.section' , (section)=>{
      deActiveAll();
      active(section.getAttribute("id"));
    })
  } , []);

  return (
    <>
      <NavBar />
      <main className="w-[60%] mx-auto pt-80 pb-[500px]">
        <MainImage />
        <Summary />
      </main>
    </>
  );
}

export default App;
