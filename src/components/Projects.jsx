import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsCodeSquare } from "react-icons/bs";
import React from 'react'

const Projects = () => {
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const projectsTL = gsap.timeline({
            scrollTrigger : {
                trigger : '#projects',
                start : 'top 70%',
                end : 'bottom+=50% 80%',
                toggleActions : 'play none none reverse',
                scrub : 2,
            }
        });

        gsap.set('#projects a > img' , {
            clipPath : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            scale : 1.2,
        })

        projectsTL.to('#projects a > img' , {
            clipPath : 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        })
        projectsTL.to('#projects a > img' , {
            scale : 1,
        })
        .from('#projects a > div' , {
            opacity : 0,
            scaleY : 0,
        } , '<')
        .from('#projects a > div > p' , {
            opacity : 0,
            yPercent : 100
        })
    } , []);
    
  return (
    <section id="projects" className="section text-white mt-20">
      <div className="flex gap-2 font-bold items-center text-xl">
      <BsCodeSquare /> Projects
      </div>
      <div className="grid grid-cols-3 gap-4 mt-3">
        <a href="#" className="relative rounded-md overflow-hidden">
            <img className="aspect-video w-full" src="/images/project.png" alt="" />
            <div className="origin-bottom absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-slate-950 ">
                <p className="text-base text-center w-full">this is my tahlildadeh project</p>
            </div>
        </a>
        <a href="#" className="relative rounded-md overflow-hidden">
            <img className="aspect-video w-full" src="/images/project.png" alt="" />
            <div className="origin-bottom absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-slate-950 ">
                <p className="text-base text-center w-full">this is my tahlildadeh project</p>
            </div>
        </a>
        <a href="#" className="relative rounded-md overflow-hidden">
            <img className="aspect-video w-full" src="/images/project.png" alt="" />
            <div className="origin-bottom absolute top-0 left-0 w-full h-full flex items-end p-4 bg-gradient-to-t from-slate-950 ">
                <p className="text-base text-center w-full">this is my tahlildadeh project</p>
            </div>
        </a>
      </div>
    </section>
  )
}

export default Projects