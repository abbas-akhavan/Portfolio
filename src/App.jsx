import { useState } from "react";
import gsap from "gsap";
import NavBar from "./components/NavBar";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FaRegListAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const deActiveAll = ()=>{
    const navLitag = document.querySelectorAll('#navbar li');
    navLitag.forEach(li =>{
      li.classList.remove('isActive');
    });
  }
  const active = (query)=>{
    document.querySelector(`[data-id='${query}']`).classList.add('isActive')
  }
  const deActive = (query)=>{
    document.querySelector(`[data-id='${query}']`).classList.remove('isActive')
  }
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const summaryTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#summary",
        start: "top 65%",
        end: "bottom 85%",
        toggleActions: "play none none reverse",
        onEnter : ()=>{
          deActiveAll();
          active('summary')
        },
        onEnterBack : ()=>{
          active('summary')
        },
        onEnterBack : ()=>{
          deActiveAll();
          active('summary')
        }
      },
    });

    summaryTL
      .from("#summary > div", {
        duration: 1,
        scaleY: 0.5,
        opacity: 0,
        ease: "elastic.out(1,0.4)",
      })
      .from(
        "#summary img",
        {
          duration: 0.5,
          opacity: 0,
          yPercent: 30,
        },
        "-=.5"
      )
      .from("#summary  p", {
        duration: 0.5,
        opacity: 0,
        yPercent: 30,
      });
 
      // ScrollTrigger.create({
      //   trigger : '#summary',
      //   start : 'top center',
      //   end : 'bottom 30%',
      //   onEnter : (self) =>{
      //     alert(self.getAttribute('id'));
      //   }
      // });
  });
  return (
    <>
      <NavBar />
      <main className="h-[2000px] w-[60%] pt-[1000px] mx-auto">
        <section
          id="summary"
          className="text-white "
        >
          <div className="flex gap-2 font-bold items-center">
            <FaRegListAlt /> Summary
          </div>
          <div className="bg-blurBgColor  backdrop-blur-sm shadow-lg origin-center rounded-xl p-4 overflow-hidden  mt-3">
            <div className="grid  gap-6 grid-cols-[1fr_3fr]">
              <img src="/images/Abbas.jpg" alt="" className="rounded-full" />
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                totam odit qui distinctio omnis aut. Qui laudantium et quaerat
                minima molestias modi blanditiis ratione, asperiores, dolorum
                illum exercitationem pariatur reiciendis.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
