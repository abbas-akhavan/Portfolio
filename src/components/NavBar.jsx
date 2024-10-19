import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BsCardList } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsCodeSquare } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { IconContext } from "react-icons";
import SplitType from "split-type";
import React, { useEffect, useRef } from "react";
import { ScreenIsGreaterThan } from "../scripts/script";
import { useState } from "react";

const NavBar = ({deviceType}) => {
  console.log('render shod')
  const classes = ['.line'] //this classes will be added later (in runtime)
  const resMenuBtn = useRef();
  
  useEffect(()=>{
    // debugger
    const menuItems = document.querySelectorAll("#menu > li , #menu > a");

    if (menuItems && menuItems.length >= 1) {
      menuItems.forEach((item) => {
        const itemSplit = new SplitType(item);
        const itemSplitTimeLine = gsap.timeline();

        item.addEventListener("mouseenter", () => {
          itemSplitTimeLine.to(itemSplit.chars, {
            yPercent: -30,
            duration: 0.1,
            stagger: 0.03,
          })
          .to(itemSplit.chars, {
            yPercent: 0,
            duration: 0.1,
            stagger: 0.03,
          } , '-=.1');

          // document.querySelector('#cursor').classList.add('hover')
        });


        item.addEventListener("mouseleave", () => {
          gsap.set(itemSplit.chars , {
            yPercent : 0,
            opacity : 1,
          })
        });
      });
    }
    
    resMenuBtn.current.addEventListener('click' , function(){
      if(this.open === true){
        this.open = false;
        gsap.to('#menu' , {
          height  : '0',
          autoAlpha  : 0,
          duration : .3
        })
      }
      else{
        
        this.open = true;
        gsap.to('#menu' , {
          height  : 'auto',
          autoAlpha  : 1,
          duration : .3
        })
      }
    })
  } , [])
  
  useEffect(() => {
    // debugger
    const navTL = gsap.timeline();

    if(deviceType === 'window'){
      resMenuBtn.current.open = false;
      gsap.set('#menu' , {
        height  : 'auto',
        overflow : 'visible',
        autoAlpha  : 1
      })
      navTL
      .from("#navbar", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "elastic.out(1,0.5)",
      })
      .from(
        "#menu > li , #menu a",
        {
          duration: 0.5,
          opacity: 0,
          yPercent: -100,
          stagger: 0.05,
        },
        "-=.5"
      )
      .from("#logo", {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: "elastic.out(1,0.5)",
      });
    }
    else if(deviceType === 'mobile'){
      resMenuBtn.current.open = false;
      gsap.set('#menu' , {
        height  : 0,
        overflow : 'hidden',
        autoAlpha  : 0
      })

      navTL
      .from("#navbar", {
        delay : 1,
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "elastic.out(1,0.5)",
      })
      .from("#logo", {
        duration: 1,
        scale: 0,
        opacity: 0,
        ease: "elastic.out(1,0.5)",
      });
      
    }
  } , [deviceType]);

  return (
    <nav
      id="navbar"
      className="z-40 fixed top-10 left-1/2 -translate-x-1/2 w-[90%] rounded-xl border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg flex items-center justify-between gap-8 px-4 py-2 md:w-[60%] md:justify-start"
    >
      <span id="logo" className="logo text-white font-black select-none">
        Abbas.Akhavan
      </span>
      <span ref={resMenuBtn} className="text-white text-lg md:hidden">
      <IconContext.Provider value={{size : '1.5rem'}}>
        <BsList />
      </IconContext.Provider>
      </span>
      <ul
        id="menu"
        className="text-white flex flex-col absolute top-[calc(100%+10px)] left-0 w-full rounded-xl border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg p-2 gap-2 md:gap-14 md:flex-row  md:grow md:static md:bg-transparent md:border-0 md:p-0 md:backdrop-blur-none md:shadow-none *:flex *:items-center *:gap-1   md:*:cursor-pointer "
      >
        <li
          data-scrolltoid="summary"
          className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md "
        >
          <BsCardList /> Summary
        </li>
        <li data-scrolltoid="skills" className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md ">
          <BsLightbulb /> Skills
        </li>
        <li data-scrolltoid='projects' className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md ">
          <BsCodeSquare /> Projects
        </li>
        <li className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md ">
          <BsBook /> Education
        </li>
        <a href="#" className=" py-1 px-2 rounded-md bg-green-800 md:ml-auto">
          <BsDownload /> My Resume
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
