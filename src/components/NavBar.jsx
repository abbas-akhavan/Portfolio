import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import React, { useEffect, useRef } from 'react';


const NavBar = () => {
    useGSAP(()=>{

      const navTL = gsap.timeline();
      navTL.from('#menu li' , {
        duration : .5,
        opacity : 0,
        yPercent : -100,
        stagger : .05,
      })
      .from('#logo' , {
        duration : 1.5,
        scale : 0,
        opacity : 0,
        ease : "elastic.out(1,0.5)"
      })
      .from('#navbar' , {
        duration : 1.5,
        y : -50,
        opacity : 0,
        ease : "elastic.out(1,0.5)"
      })

      })
  return (
    <nav id="navbar" className="fixed top-10 left-1/2 -translate-x-1/2 w-[60%] rounded-xl bg-blurBgColor  backdrop-blur-sm shadow-lg flex gap-8 p-4">
      <span id="logo" className="text-white font-black">ABBAS AKHAVAN</span>
      <ul id="menu" className="flex text-white gap-14">
        <li>Summary</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Education</li>
        <li>My Resume</li>
      </ul>
    </nav>
  )
}

export default NavBar

// scrambleText: {
//   text: "THIS IS NEW TEXT", 
//   chars: "XO", 
//   revealDelay: 0.5, 
//   speed: 0.3, 
//   newClass: "myClass"
// }