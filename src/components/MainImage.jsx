import React from 'react'
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MainImage = () => {

  useGSAP(()=>{
    const mainImageTimeLine = gsap.timeline();

    mainImageTimeLine.from('#mainImage > div' , {
      scale : 0,
      duration : 1,
    })
    .from('#mainImage > img' , {
      xPercent : -70,
      opacity : 0,
      duration : 1
    })

    setTimeout(()=>{
      const mainImageTexts = document.querySelectorAll('#mainImageTexts > .text');
      const mainImageTextsSplits = [];

      mainImageTexts.forEach(text =>{
        mainImageTextsSplits.push(new SplitType(text).chars);
      })
      gsap.from('#mainImageTexts .char' , {
        delay : 1,
        duration : .5,
        yPercent : 70,
        skewX : -30,
        opacity : 0,
        stagger : .02,
      })
    } , 0)


  } , []);
  return (
    <div id='mainImageContainer' className='flex items-start justify-between'>
        <div id='mainImage' className='relative'>
          <div className='triangle bg-[rgba(0,0,0,.6)] backdrop-blur-sm shadow-lg w-[26em] h-[19em] origin-bottom'></div>
          <img width='623' height='934' className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[18em]' src="/images/AbbasMainImg.png" alt="" />
        </div>
        <div id='mainImageTexts' className='text-sky-100 text-8xl font-medium  font-mango '>
            <div className='text'>Abbas Akhavan</div>
            <div className='text'>Creative</div>
            <div className='text'>Front End Developer</div>
        </div>
    </div>
  )
}

export default MainImage