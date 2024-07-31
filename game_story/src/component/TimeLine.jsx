import React from 'react';
import TimeCircle from './TimeCircle';

const timeMarkers = [1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

const Timeline = ({time, setTime}) => {
    return (
        <div className="fixed z-50 bottom-0 left-0 w-full p-10 flex flex-row items-center justify-around  shadow-md">
            {timeMarkers.map((marker) => (
                <button onClick={()=>setTime(marker)} className={`w-[4rem] flex h-[4rem] duration-300 rounded-full ${marker == time ? 'bg-black text-white' : ' text-black/60 hover:text-black'}`}>
                    <span className=" font-light m-auto  ">
                        {marker}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default Timeline;
