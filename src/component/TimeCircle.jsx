

export default function TimeCircle({span}){
    return(
        <button  className="w-[4rem] flex h-[4rem] bg-black rounded-full">
          <span className=" font-bold m-auto  text-white">
            {span}
          </span>
        </button>
    )
}