import React, { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRegListAlt } from "react-icons/fa";


const Summary = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const summaryTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#summary",
        start: "top 70%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        scrub : 1,
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
  });
  return (
    <section id="summary" className="section text-white mt-20">
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
