'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { useRef } from "react"

import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function TwoThousand() {

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
                <LazyLoadImage  loading="lazy" className="w-screen bg-black opacity-60 h-screen object-cover fixed top-0 left-0 z-0" src="https://i.redd.it/mk19abjmap3c1.jpg" alt="" />
            </div>  
            <div ref={triggerRef} className="overflow-hidden">
                <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-[100vw] h-screen  flex justify-center items-center">
                        <h1 id="font-2000">Hello</h1>
                    </div>
                ))}
                </div>
            </div>
            </div>
    )
}
