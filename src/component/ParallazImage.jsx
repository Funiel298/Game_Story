'use client'
import Image from 'next/image';
import Background from '../../public/1.jpg';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Section() {
    const container = useRef(null); // Используем ref с начальным значением null
    const { scrollXProgress } = useScroll({
        target: container, 
        offset: ["start end", "end start"]  // Параметры для горизонтальной прокрутки
    });
    
    // Применяем горизонтальную трансформацию
    const x = useTransform(scrollXProgress, [0, 1], ["-50%", "50%"]);
    return (
        <div
            ref={container} 
            className='relative   flex items-center justify-center h-screen overflow-hidden'
            style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
        >
            <div className='relative z-10 p-20 mix-blend-difference text-white w-full h-full flex flex-col justify-between'>
                <p className='w-[50vw] text-[2vw] self-end uppercase mix-blend-difference'>
                    Beauty and quality need the right time to be conceived and realised even in a world that is in too much of a hurry.
                </p>
                <p className='text-[5vw] uppercase mix-blend-difference'>Background Parallax</p>
            </div>

            {/* Параллакс-изображение */}
            <div className='fixed top-0 left-0 h-[120vh] w-full'>
                <motion.div style={{ x }} className='relative w-full h-full'>
                    <Image src={Background} fill alt="image" style={{objectFit: "cover"}} />
                </motion.div>
            </div>
        </div>
    );
}
