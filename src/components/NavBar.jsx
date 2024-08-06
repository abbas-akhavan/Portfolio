import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
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
      .from("#menu li", {
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
      className="fixed top-10 left-1/2 -translate-x-1/2 w-[60%] rounded-xl bg-blurBgColor  backdrop-blur-sm shadow-lg flex gap-8 p-4"
    >
      <span id="logo" className="text-white font-black">
        ABBAS AKHAVAN
      </span>
      <ul id="menu" className="flex text-white gap-14 grow *:cursor-pointer *:flex *:items-center *:gap-1">
        <li ><FaRegListAlt /> Summary</li>
        <li ><FaRegLightbulb /> Skills</li>
        <li ><FaLaptopCode /> Projects</li>
        <li ><FaBookOpen /> Education</li>
        <a href="#" className=" ml-auto"><FaRegFile /> My Resume</a>
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
