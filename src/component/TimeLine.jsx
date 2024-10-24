import React from 'react';
import { motion } from 'framer-motion';

const timeMarkers = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

const Timeline = ({ time, setTime }) => {
    const animationVariants = {
        initial: { x: -10, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: 10, opacity: 0 }
    };

    return (
        <div className="fixed z-50 bottom-0 mix-blend-difference left-0 w-full p-10 flex flex-row items-center justify-around shadow-md">
            {timeMarkers.map((marker,index) => (
                <motion.button
                    key={marker}
                    onClick={() => setTime(marker)}
                    className={`w-[4rem] flex h-[4rem] duration-300 mix-blend-difference rounded-full ${
                        marker === time ? 'bg-black text-white' : 'text-black/60 hover:text-black'
                    }`}
                    initial="initial" 
                    animate="animate" 
                    exit="exit"
                    variants={animationVariants} 
                    transition={{ duration: index*0.25}}
                >
                    <span className="font-medium m-auto  z-50 hover:text-white duration-200 ">
                        {marker}
                    </span>
                </motion.button>
            ))}
        </div>
    )
}

export default Timeline
