'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useRef } from "react"

export default function TwoTwenty() {

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
                <LazyLoadImage  loading="lazy" className="w-screen bg-black opacity-60 h-screen object-cover fixed top-0 left-0 z-0" src="https://i.pinimg.com/originals/71/de/86/71de863e48b9f3c25419ae7f3ad3e5e7.jpg" alt="" />
            </div> 
            <div ref={triggerRef} className="overflow-hidden">
            <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
                {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-[100vw] h-screen  flex justify-center items-center">
                    <h1 id="font-2020">Hello</h1>
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}
