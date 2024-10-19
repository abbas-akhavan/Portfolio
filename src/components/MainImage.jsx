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
        mainImageTextsSplits.push(new SplitType(text));
      })
      gsap.set('#mainImageTexts' , {
        opacity : 1
      })
      gsap.to('#mainImageTexts .char' , {
        duration : .7,
        opacity : 1,
        stagger : .05,
      })
    } , 1000)


  } , []);
  return (
    <div id='mainImageContainer' className='flex flex-col gap-8 md:gap-0 md:items-start md:justify-between md:flex-row'>
        <div id='mainImage' className='relative'>
          <div className='triangle bg-[rgba(0,0,0,.6)] backdrop-blur-sm shadow-lg w-[20em] h-[14em] m-auto md:w-[26em] md:h-[19em] origin-bottom'></div>
          <img width='623' height='934' className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[14em] md:w-[18em]' src="/images/AbbasMainImg.png" alt="" />
        </div>
        <div id='mainImageTexts' className='text-[#bfc9e8] text-[5.5rem] leading-none font-bold  font-mango main-image-text select-none md:text-8xl'>
            <div className='text *:justify-center'>Abbas Akhavan</div>
            <div className='text *:justify-center'>Creative</div>
            <div className='text *:justify-center'>Front End Developer</div>
        </div>
    </div>
  )
}

export default MainImage