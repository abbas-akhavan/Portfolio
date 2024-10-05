import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from 'react'
import { BsLightbulb } from "react-icons/bs";

const Skills = () => {
    useGSAP(()=>{
        gsap.registerPlugin(ScrollTrigger);

    const skillsTL = gsap.timeline({
      scrollTrigger: {
        trigger: "#skills",
        start: "top 80%",
        end: "bottom 90%",
        toggleActions: "play none none reverse",
        scrub : 4
      },
      defaults : {
        stagger : .1,
        opacity : 0,
      }
    });

    skillsTL.from('#leftSection > .left > div' , {
        xPercent : -70,
    })
    .from('#rightSection > .left > div' , {
        xPercent : -70,
    },  '<')
    .from('#leftSection > .right > div' , {
        xPercent : 70,
    },  '<')
    .from('#rightSection > .right > div' , {
        xPercent : 70,
    },  '<')


    } , [])
    

  return (
    <section id="skills" className="section text-white mt-20">
      <div className="flex gap-2 font-bold items-center text-xl">
      <BsLightbulb /> Skills
      </div>
      <div className='grid grid-cols-2 gap-6 mt-3'>
        <div id='leftSection' className='overflow-hidden grid grid-cols-2 gap-6'>
            <div className='left flex flex-col gap-4'>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
            </div>
            <div className='right flex flex-col gap-4'>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
            </div>
        </div>
        <div id='rightSection' className='overflow-hidden grid grid-cols-2 gap-6'>
            <div className='left flex flex-col gap-4'>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
            </div>
            <div className='right flex flex-col gap-4'>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
               <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg rounded-md py-2 px-3">skill 1</div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills