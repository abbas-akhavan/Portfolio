import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaRegFile } from "react-icons/fa";
import { active, deActive, deActiveAll } from "../scripts/navbar";

const Summary = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const summaryTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#summary",
        start: "top 25%",
        end: "bottom 85%",
        toggleActions: "play none none reverse",
        onEnter: (self) => {
          deActiveAll();
          active(self.trigger.getAttribute("id"));
        },
        onLeave: (self) => {
          deActive(self.trigger.getAttribute("id"));
        },
        onEnterBack: (self) => {
          deActiveAll();
          active(self.trigger.getAttribute("id"));
        },
        onLeaveBackBack: (self) => {
          deActive(self.trigger.getAttribute("id"));
        },
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
    <section id="summary" className="text-white ">
      <div className="flex gap-2 font-bold items-center">
        <FaRegListAlt /> Summary
      </div>
      <div className="bg-blurBgColor  backdrop-blur-sm shadow-lg origin-center rounded-xl p-4 overflow-hidden  mt-3">
        <div className="grid  gap-6 grid-cols-[1fr_3fr]">
          <img src="/images/Abbas2.jpg" alt="" className="rounded-full" />
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel totam
            odit qui distinctio omnis aut. Qui laudantium et quaerat minima
            molestias modi blanditiis ratione, asperiores, dolorum illum
            exercitationem pariatur reiciendis.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
