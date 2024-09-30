import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsCodeSquare } from "react-icons/bs";
import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="section text-white mt-20">
      <div className="flex gap-2 font-bold items-center">
      <BsCodeSquare /> Projects
      </div>
      <div className="grid grid-cols-4 gap-4 mt-3">
        <div className="flex flex-col gap-2">
            <img className="aspect-video rounded-md shadow-lg border border-gray-700" src="/images/project.png" alt="" />
            <div className="bg-blurBgColor  backdrop-blur-sm shadow-lg origin-center rounded-md border border-gray-700 p-2 flex flex-col gap-6">
                <p>this is my tahlildadeh project</p>
                <a href="#" className="bg-cyan-900 px-2 py-1 rounded-md text-sm text-center w-max self-center">visit project</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects