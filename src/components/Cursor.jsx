import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from './Cursor.module.scss';

const Cursor = () => {
    useGSAP(()=>{
        const root = document.querySelector('#root');

        root.addEventListener('mousemove' , function(event){
            // gsap.to('#cursor' , {
            //     y : event.y - 15,
            //     x : event.x - 15,
            //     duration : 0,
            // })

            gsap.to('#dummy' , {
              y : event.y,
                x : event.x,
              duration : 2,
              ease : "power4.out"
          })
        })
        
    } , [])
  return (
    <>
    <img id='dummy' src="/images/dummy.png" alt="" className='hidden z-50 fixed w-[35px] none-event md:block' />
    {/* <div id='cursor' className={` none-event z-50 fixed w-[30px] h-[30px] border border-slate-400 rounded-full text-white`}>
      <span className='bg-blurBgColor  backdrop-blur-sm absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full'></span>
    </div> */}
    </>
    
  )
}

export default Cursor