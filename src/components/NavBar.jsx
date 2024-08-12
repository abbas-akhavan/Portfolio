import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BsCardList } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsCodeSquare } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import React, { useEffect, useRef } from "react";


const NavBar = () => {
  useGSAP(() => {
    const navTL = gsap.timeline();
    navTL
      .from("#navbar", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "elastic.out(1,0.5)",
      })
      .from("#menu li , #menu a", {
        duration: 0.5,
        opacity: 0,
        yPercent: -100,
        stagger: 0.05,
      },'-=.5')
      .from("#logo", {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: "elastic.out(1,0.5)",
      });

      


  });
  return (
    <nav
      id="navbar"
      className="z-50 fixed top-10 left-1/2 -translate-x-1/2 w-[60%] rounded-xl bg-blurBgColor  backdrop-blur-sm shadow-lg flex gap-8 px-4 py-2"
    >
      <span id="logo" className="logo text-white font-black">
        ABBAS AKHAVAN
      </span>
      <ul id="menu" className="flex text-white gap-14 grow *:cursor-pointer *:flex *:items-center *:gap-1">
        <li data-id='summary' className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md "><BsCardList /> Summary</li>
        <li className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md "><BsLightbulb /> Skills</li>
        <li className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md "><BsCodeSquare /> Projects</li>
        <li className="isActive transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md "><BsBook /> Education</li>
        <a href="#" className=" ml-auto py-1 px-2 rounded-md bg-green-800"><BsDownload /> My Resume</a>
      </ul>
    </nav>
  );
};

export default NavBar;

// scrambleText: {
//   text: "THIS IS NEW TEXT",
//   chars: "XO",
//   revealDelay: 0.5,
//   speed: 0.3,
//   newClass: "myClass"
// }
