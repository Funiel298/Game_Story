'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import Images from '../../component/Images'

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
      <img className="w-screen h-screen object-cover fixed top-0 left-0 z-0" src="https://www.shutterstock.com/image-photo/old-newspaper-background-black-white-600nw-2476202121.jpg" alt="" />
      <div ref={triggerRef} className="overflow-hidden flex  flex-row ">

        {/* Menu */}
        <div ref={sectionRef} className="m-80  border-8 p-4 border-black">
          <h1 id="font-1940" className="text-7xl">Menu</h1>
          <div className="flex flex-col">
            {menulist.map((item)=>(
              <a id="font-p-1940" className="mt-1 text-lg" href={`#${item}`}>{item}</a>
            ))}
          </div>
        </div>


        {/* FirstGame */}

        <div ref={sectionRef} className="w-1/3 object-contain h-screen">
          <img src="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg" alt="" />
            
        </div>

        <div ref={sectionRef} className="w-full  object-cover h-screen">
          <img src="https://cdn.yemek.com/mnresize/1250/833/uploads/2023/03/iki-renkli-kek-onecikan.jpg" alt="" />
            
        </div>
      </div>
    </div>
  )
}
