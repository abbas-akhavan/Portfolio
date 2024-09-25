import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BsCardList } from "react-icons/bs";
import { BsLightbulb } from "react-icons/bs";
import { BsCodeSquare } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import SplitType from "split-type";
import React, { useEffect, useRef } from "react";

const NavBar = () => {
  const classes = ['.line'] //this classes will be added later (in runtime)
  useGSAP(() => {
    const navTL = gsap.timeline();
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
  });

  return (
    <nav
      id="navbar "
      className="z-40 fixed top-10 left-1/2 -translate-x-1/2 w-[60%] rounded-xl border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg flex items-center gap-8 px-4 py-2"
    >
      <span id="logo" className="logo text-white font-black select-none">
        ABBAS AKHAVAN
      </span>
      <ul
        id="menu"
        className="flex text-white gap-14 grow *:cursor-pointer *:flex *:items-center *:gap-1"
      >
        <li
          data-sectionid="summary"
          className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md "
        >
          <BsCardList /> Summary
        </li>
        <li data-sectionid="skills" className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md ">
          <BsLightbulb /> Skills
        </li>
        <li className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md ">
          <BsCodeSquare /> Projects
        </li>
        <li className="transition-colors bg-transparent duration-300 py-1 px-2 isActive:bg-blue-700 rounded-md ">
          <BsBook /> Education
        </li>
        <a href="#" className=" ml-auto py-1 px-2 rounded-md bg-green-800">
          <BsDownload /> My Resume
        </a>
      </ul>
    </nav>
  );
};

export default NavBar;
