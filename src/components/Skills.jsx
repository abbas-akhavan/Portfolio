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
        scrub : 3,
      },
      defaults : {
        stagger : .1
      }
    });

    skillsTL.from('#leftSection > .left > div' , {
        xPercent : -50,
        opacity : 0,
    })
    .from('#rightSection > .left > div' , {
        xPercent : -50,
        opacity : 0,
    },  '-=1')
    .from('#leftSection > .right > div' , {
        xPercent : 50,
        opacity : 0,
    },  '-=1')
    .from('#rightSection > .right > div' , {
        xPercent : 50,
        opacity : 0,
    },  '-=1')


    } , [])
    

  return (
    <section id="skills" className="section text-white mt-20">
      <div className="flex gap-2 font-bold items-center">
      <BsLightbulb /> Skills
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <div id='leftSection' className='overflow-hidden grid grid-cols-2 gap-2'>
            <div className='left flex flex-col gap-2'>
            <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
            </div>
            <div className='right flex flex-col gap-2'>
            <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
            </div>
        </div>
        <div id='rightSection' className='overflow-hidden grid grid-cols-2 gap-2'>
            <div className='left flex flex-col gap-2'>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                
                
            </div>
            <div className='right flex flex-col gap-2'>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
                <div className="border border-gray-700 bg-blurBgColor  backdrop-blur-sm shadow-lg">skill 1</div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Skills