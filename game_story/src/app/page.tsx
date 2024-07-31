'use client'

import { useState } from "react";
import TimeCircle from '@/component/TimeCircle'; 
import TimeLine from '@/component/TimeLine'
import Forty from '@/app/pages/1940'
import Fifty from '@/app/pages/1950'
import Sixtee from '@/app/pages/1960'
import Seventee from '@/app/pages/1970'
import Eightee from '@/app/pages/1980'
import Ninetee from '@/app/pages/1990'
import TwoThousand from '@/app/pages/2000'
import TwoTen from '@/app/pages/2010'
import TwoTwenty from '@/app/pages/2020'

export default function Home() {

  const [time, setTime] = useState(1940)

  const renderContent = () => {
    switch (time) {
      case 1940:
        return <Forty />;
      case 1950:
        return <Fifty />;
      case 1960:
        return <Sixtee />;
      case 1970:
        return <Seventee />;
      case 1980:
        return <Eightee />;
      case 1990:
        return <Ninetee />;
      case 2000:
        return <TwoThousand />;
      case 2010:
        return <TwoTen/>
      case 2020:
        return <TwoTwenty/>
      default:
        return <div>Select a year</div>;
    }
  };

  return (
    <div className=" flex  w-full h-[90svh] justify-center">
      <TimeLine time={time} setTime={setTime} />
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
}
