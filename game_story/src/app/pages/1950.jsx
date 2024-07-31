'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { useRef } from "react"

export default function Fifty() {

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
            <div  ref={triggerRef} className="overflow-hidden ">
                <div className="w-[400vw]  relative overflow-hidden flex flex-row" ref={sectionRef}>
                    <div className="w-[100vw] h-screen bg-black text-blue-500 flex justify-center items-center">
                        <h1>Hello</h1>
                    </div>
                    <div className="w-[100vw] h-screen bg-black text-blue-500 flex justify-center items-center">
                        <h1>Hello</h1>
                    </div>
                    <div className="w-[100vw] h-screen bg-black text-blue-500 flex justify-center items-center">
                        <h1>Hello</h1>
                    </div>
                    <div className="w-[100vw] h-screen bg-black text-blue-500 flex justify-center items-center">
                        <h1>Hello</h1>
                    </div>
                    
                </div>
            </div>
    )
}
