import Image from "next/image"

interface IData {
    name: string, 
    status: string, 
    image: string, 
    gender: string, 
    species: string,
    id: string,
    origin: string
}

export const ApiCard = ( { name, status, image, gender, species, id, origin }:IData) => {
    return(
    <div className=" flex flex-col justify-between shadow-xl w-72 rounded-md overflow-hidden" key={ id }>
        <div className="relative">
            <Image src={image} alt={name} width={200} height={100} className="w-full"/>
            <p className="bg-sky-600 text-white text-small font-extrabold w-12 absolute top-2 right-2 rounded-md text-center">#{id}</p>
        </div>
        <div className="p-2">    
            <h2 className="text-medium font-semibold text-wrap">{ name }</h2>
            <p className="italic text-neutral-500 font-medium">{ id }</p>
        </div>        
        <div className="flex divide-x-2 divide-neutral-700 bg-neutral-400 h-12">
            <div className="w-1/2 flex items-center">
                <span>🗺</span>
                <span className="text-ellipsis w-full">{origin}</span>
            </div>
            <div className="w-1/2 flex items-center">
                <span>👤</span>
                <span>{species}</span>
            </div>
            </div>
    </div>
    )
}