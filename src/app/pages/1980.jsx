'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { useRef } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Eighty() {

    const sectionRef = useRef(null)
    const triggerRef = useRef(null)


    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{

        const pin = gsap.fromTo(sectionRef.current,{
            translateX:0
        },{
            translateX: '-300vw',
            ease:'none',
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: 'top top',
                end: '2000 top',
                scrub: true,
                pin: true
            }
        })

        return()=>{
            pin.kill()
        }

    }, [])

    return (
        <div>
          <img className="w-screen bg-black opacity-70 h-screen object-cover fixed top-0 left-0 z-0" src="https://t4.ftcdn.net/jpg/02/14/34/73/360_F_214347350_KKVhELdCHRvr87Nrslhc7G3qn42w3UJE.jpg" alt="" />
            
            <div ref={triggerRef} className="overflow-hidden">
                <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-[100vw] h-screen  flex justify-center items-center">
                        <h1 classname="font-1980">Hello</h1>
                    </div>
                ))}
                </div>
            </div>
            </div>
    )
}
