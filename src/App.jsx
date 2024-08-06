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
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const summaryTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#summary",
        start: "top 70%",
        end: "bottom+=50% bottom",
        scrub : 1,
        markers : true
      },
    });

    summaryTL.from("#summary >div", {
      xPercent: -20,
      opacity: 0,
    });
  });
  return (
    <>
      <NavBar />
      <main className="h-[2000px] w-[60%] pt-[1000px] mx-auto">
        <section id="summary">
          <div>
            <div className="flex gap-2 text-white font-bold items-center">
              <FaRegListAlt /> Summary
            </div>
            <div className="grid  gap-6 grid-cols-[1fr_3fr]">
              <img src="/images/Abbas.jpg" alt="" />
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                totam odit qui distinctio omnis aut. Qui laudantium et quaerat
                minima molestias modi blanditiis ratione, asperiores, dolorum
                illum exercitationem pariatur reiciendis.
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
