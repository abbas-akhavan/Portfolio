import { useState } from "react";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import { useGSAP } from "@gsap/react";

function App() {
  const [darkMode,setDarkMode] = useState(true);
  // useGSAP(()=>{
  //   gsap.to('#logo', {
  //     duration: 1, 
  //     scrambleText: {
  //       text: "THIS IS NEW TEXT", 
  //       chars: "XO", 
  //       revealDelay: 0.5, 
  //       speed: 0.3, 
  //       newClass: "myClass"
  //     }
  //   }); 
  // })
  return (
    <>
    <NavBar/>
      <main>
        
      </main>
    </>
  );
}

export default App;
