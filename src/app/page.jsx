'use client';
import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import TimeLine from '@/component/TimeLine';
import Forty from '@/app/pages/1940';
import Fifty from '@/app/pages/1950';
import Sixtee from '@/app/pages/1960';
import Seventee from '@/app/pages/1970';
import Eightee from '@/app/pages/1980';
import Ninetee from '@/app/pages/1990';
import TwoThousand from '@/app/pages/2000';
import TwoTen from '@/app/pages/2010';
import TwoTwenty from '@/app/pages/2020';
import { FaPause, FaPlay } from "react-icons/fa";

const musicTracks = {
  1940: { src: '/assets/AprilShower.mp3', name: 'April Shower' },
  1950: { src: '/assets/1950.mp3', name: 'Music 1950' },
  1960: { src: '/assets/1960.mp3', name: 'Music 1960' },
  1970: { src: '/assets/1970.mp3', name: 'Music 1970' },
  1980: { src: '/assets/1980.mp3', name: 'Music 1980' },
  1990: { src: '/assets/1990.mp3', name: 'Music 1990' },
  2000: { src: '/assets/2000.mp3', name: 'Music 2000' },
  2010: { src: '/assets/2010.mp3', name: 'Music 2010' },
  2020: { src: '/assets/2020.mp3', name: 'Music 2020' },
};

export default function Home() {
  const [time, setTime] = useState(1940);
  const [isPaused, setIsPaused] = useState(false);
  const audioRef = useRef(null);

  const { src, name } = useMemo(() => musicTracks[time], [time]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = src;
      if (isPaused) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }

  }, [src]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  }, [isPaused]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  });

  const renderContent = () => {
    switch (time) {
      case 1940: return <Forty />;
      case 1950: return <Fifty />;
      case 1960: return <Sixtee />;
      case 1970: return <Seventee />;
      case 1980: return <Eightee />;
      case 1990: return <Ninetee />;
      case 2000: return <TwoThousand />;
      case 2010: return <TwoTen />;
      case 2020: return <TwoTwenty />;
      default: return <div>Select a year</div>;
    }
  };

  return (
    <div className="flex w-full h-[90svh] justify-center">
      <TimeLine time={time} setTime={setTime} />
      
      <header className='fixed z-50 mix-blend-difference  top-0 left-0 w-full p-10 flex flex-row items-center justify-around'>
        <span>{name}</span>
          <button onClick={togglePause}>
            {isPaused ? <FaPause /> : <FaPlay />}
          </button>
      </header>

      <div className=" z-0">
        
        {renderContent()}
        <audio ref={audioRef} loop />
      </div>
    </div>
  );
}
