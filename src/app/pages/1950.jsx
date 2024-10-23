'use client'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Fifty() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

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
    <div className="no-scrollbar">
        <div className="blur-load ">
            <LazyLoadImage  loading="lazy" className="w-screen bg-black opacity-60 h-screen object-cover fixed top-0 left-0 z-0" src="https://media.istockphoto.com/id/1445326229/photo/cardboard-tone-vintage-texture-background-cream-paper-old-grunge-retro-rustic-for-wall.jpg?s=612x612&w=0&k=20&c=wf1i7RdtJeIxVBuXlqRa5nelbHW9rsZqDBLBvBX-PwY=" alt="" />
          </div> <div ref={triggerRef} className="overflow-hidden no-scrollbar">
        <div className="w-[400vw] relative overflow-hidden flex flex-row" ref={sectionRef}>
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
  );
}
