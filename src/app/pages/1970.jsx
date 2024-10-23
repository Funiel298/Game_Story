'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRef } from "react"

export default function Seventy() {

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
            <div className="blur-load ">
                <LazyLoadImage  loading="lazy" className="w-screen bg-black opacity-60 h-screen object-cover fixed top-0 left-0 z-0" src="https://t3.ftcdn.net/jpg/00/14/49/92/360_F_14499247_vvBv2OdQVydJgOPPpPhTUW620p6lpWLb.jpg" alt="" />
            </div> 
            <div ref={triggerRef} className="overflow-hidden">
                <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-[100vw] h-screen bg-black bg-opacity-10  text-blue-500 flex justify-center items-center">
                        <h1 classname="font-1970">Hello</h1>
                    </div>
                ))}
                </div>
            </div>
            </div>
    )
}
