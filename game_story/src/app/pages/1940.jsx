'use client'
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import Header from '@/component/Header'
import Text from '@/component/1940/text'

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

  return (
    <div className="no-scrollbar">
      <Header />
      <div ref={triggerRef} className="overflow-hidden">
        <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} id="font-1940" className="w-[100vw] h-screen bg-red-200 text-blue-500 flex justify-center items-center">
              <Text></Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
