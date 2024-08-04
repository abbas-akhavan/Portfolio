import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';


const NavBar = () => {
    // useGSAP(()=>{
    //     gsap.registerPlugin(ScrambleTextPlugin);
    //     gsap.to('#logo', {
    //       duration: 1, 
    //       scrambleText: {
    //         text: "THIS IS NEW TEXT", 
    //         chars: "XO", 
    //         revealDelay: 0.5, 
    //         speed: 0.3, 
    //         newClass: "myClass"
    //       }
    //     }); 
    //   })
    const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      duration: 2,
      y : 200
    });
  }, []);
  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-2/4 rounded-xl bg-[#32131c63]  backdrop-blur-sm shadow-lg flex flex-row-reverse p-4">
      <span ref={textRef} className="text-white font-bold">abbas</span>
    </nav>
  )
}

export default NavBar