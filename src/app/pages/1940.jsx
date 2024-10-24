'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import Images from '../../component/Images'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Section from "@/component/ParallazImage"
import Menu from "@/component/Menu"

export default function Forty() {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {

    const pin = gsap.fromTo(sectionRef.current, {
      translateX: 0
    }, {
      translateX: '-300vw',
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: '2000 top',
        scrub: true,
        pin: true
      }
    })

    return () => {
        pin.kill(); 
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
  }, [])

  const menulist=[
    'First_Game',
    'Innovations',
    'Future_Geniuses'
  ]

  return (
    <div className="no-scrollbar">
      <div className="blur-load ">
        <LazyLoadImage  loading="lazy" className="w-screen bg-black opacity-60 h-screen object-cover fixed top-0 left-0 z-0" src="https://www.shutterstock.com/image-photo/old-newspaper-background-black-white-600nw-2476202121.jpg" alt="" />
      </div> 
      <div ref={triggerRef} className="overflow-hidden flex  flex-row ">
        <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
            <div   className="w-[100vw] h-screen   flex ">
              
              <Menu></Menu>

            </div>

            
            <div   className="w-[100vw] z-0 h-screen  text-blue-500 flex justify-center items-center">
            
              <Images></Images>
            
            </div>
            <div   className="w-[100vw] h-screen  text-blue-500 flex justify-center items-center">
              <h1 className="font-1950">Hello</h1>
            </div>
            <div   className="w-[100vw] h-screen  text-blue-500 flex justify-center items-center">
              <h1 className="font-1950">Hello</h1>
            </div>
        </div>
       
      </div>
    </div>
  )
}
