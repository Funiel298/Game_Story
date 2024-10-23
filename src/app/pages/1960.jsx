'use client'
import gsap from "gsap"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { useRef } from "react"

export default function Sixty() {

    const sectionRef = useRef(null)
    const triggerRef = useRef(null)


    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        // const music = new Audio('/assets/AprilShower.mp3'); // Uncomment to test
        // music.play(); // Uncomment to test
      
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
        });
      
        return () => {
          pin.kill();
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
      }, []);
      

    return (
        <div>
            <div className="blur-load ">
                <LazyLoadImage  loading="lazy" className="w-screen bg-black opacity-60 h-screen object-cover fixed top-0 left-0 z-0" src="https://t4.ftcdn.net/jpg/04/99/22/89/360_F_499228956_ApEv4RwC5CZskNWXZmknA3IpASIr3Ywg.jpg" alt="" />
            </div> <div ref={triggerRef} className="overflow-hidden no-scrollbar">
            <div className="w-[400vw] relative overflow-hidden flex bg-opacity-10 bg-black flex-row" ref={sectionRef}>
                <div   className="w-[100vw] h-screen  text-blue-500 flex justify-center items-center">
                  <h1 classname="font-1950">Hello</h1>
                </div>
                <div   className="w-[100vw] h-screen  text-blue-500 flex justify-center items-center">
                  <h1 classname="font-1950">Hello</h1>
                </div>
                <div   className="w-[100vw] h-screen  text-blue-500 flex justify-center items-center">
                  <h1 classname="font-1950">Hello</h1>
                </div>
                <div   className="w-[100vw] h-screen  text-blue-500 flex justify-center items-center">
                  <h1 classname="font-1950">Hello</h1>
                </div>
            </div>
          </div>
        </div>
    )
}
