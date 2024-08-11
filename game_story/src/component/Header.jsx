import { FaPlay, FaPause } from "react-icons/fa";

export default function Header({ musicName, isPaused, togglePause }) {
  return (
    <header className='fixed z-50 top-0 left-0 w-full p-10 flex flex-row items-center justify-around'>
      <div>{musicName}</div>
      <button onClick={togglePause}>
        {isPaused ? <FaPlay /> : <FaPause />}
      </button>
    </header>
  );
}
