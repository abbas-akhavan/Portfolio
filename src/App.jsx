import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Summary from "./components/Summary";
import { active, deActive, deActiveAll , observerElements } from "./scripts/navbar";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(()=>{
    observerElements('.section' , (section)=>{
      deActiveAll();
      debugger
      active(section.getAttribute("id"));
    })
  } , []);

  return (
    <>
      <NavBar />
      <main className="h-[2000px] w-[60%] pt-[1000px] mx-auto">
        <Summary />
      </main>
    </>
  );
}

export default App;
