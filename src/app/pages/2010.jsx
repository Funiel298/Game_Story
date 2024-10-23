'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect } from "react"
import { useRef } from "react"

import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function TwoTen() {

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
          <img className="w-screen bg-black opacity-70 h-screen object-cover fixed top-0 left-0 z-0" src="https://i.redd.it/i-remade-this-minecraft-wallpaper-from-2012-in-blender-and-v0-7itly12uma4d1.jpg?width=1080&format=pjpg&auto=webp&s=8cb7a189f6e0e34241df4e8dc69ec5d9c7135c2d" alt="" />
            
            <div ref={triggerRef} className="overflow-hidden">
                <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
                {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-[100vw] h-screen flex justify-center items-center">
                        <h1 id="font-2010">Hello</h1>
                    </div>
                ))}
                </div>
            </div>
            </div>
    )
}
