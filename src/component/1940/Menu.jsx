export default function Menu(){

    const menu = ['#new machine', '#something else'  ]

    return(
        <div className=" w-60 h-[96] flex flex-col  font-bold">
            <div className="">
                {menu.map((item)=>(
                    <a key={item} className="bg-blue-500" href={item}>{item}</a>
                ))}
            </div>
        </div>
    )
}