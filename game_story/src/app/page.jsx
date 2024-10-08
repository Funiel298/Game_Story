'use client';

import { useState, useEffect, useMemo, useCallback } from "react";
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
import Header from "@/component/Header";

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
  const [time, setTime] = useState(1950);
  const [isPaused, setIsPaused] = useState(false);

  const musicTracks = useMemo(() => ({
    1940: { src: '/assets/AprilShower.mp3', name: 'April Shower' },
    1950: { src: '/assets/1950.mp3', name: 'Music 1950' },
    1960: { src: '/assets/1960.mp3', name: 'Music 1960' },
    1970: { src: '/assets/1970.mp3', name: 'Music 1970' },
    1980: { src: '/assets/1980.mp3', name: 'Music 1980' },
    1990: { src: '/assets/1990.mp3', name: 'Music 1990' },
    2000: { src: '/assets/2000.mp3', name: 'Music 2000' },
    2010: { src: '/assets/2010.mp3', name: 'Music 2010' },
    2020: { src: '/assets/2020.mp3', name: 'Music 2020' },
  }), []);

  const { src, name } = musicTracks[time] || { src: '', name: '' };
  const [music, setMusic] = useState(new Audio(src));

  useEffect(() => {
    if (music) {
      music.pause();
    }

    const newMusic = new Audio(src);
    newMusic.loop = true;
    newMusic.play();
    setMusic(newMusic);

    return () => {
      newMusic.pause();
    };
  }, [time]);

  useEffect(() => {
    if (music) {
      if (isPaused) {
        music.pause();
      } else {
        music.play();
      }
    }
  }, [isPaused, music]);

  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  })

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
      <div className="content-area">
        <Header musicName={name} isPaused={isPaused} togglePause={togglePause} />
        {renderContent()}
      </div>
    </div>
  );
}