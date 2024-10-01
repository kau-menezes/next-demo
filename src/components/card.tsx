import Image from "next/image"

import img1 from "@/assets/img/amora.jpg";
import img2 from "@/assets/img/romeu.jpg";
import img3 from "@/assets/img/marie.jpg";
import img4 from "@/assets/img/koda.jpg";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

interface IPets{
    name: string, 
    age: number,
    breed: string, 
    pic: string, 
    friends: number,
    mainColor: string,
    subColor: string,

}

export const Card = ({ name, age, breed, pic, friends, mainColor: color, subColor }: IPets) => {

    return(
        <>
        <div className={"flex flex-col items-center w-full bg-gray-200 rounded hover:scale-105	"}>
            <Image className=" rounded w-80 h-56 object-cover" src={ pic === "img1" ? img1 : pic === "img2" ? img2 : pic === "img3" ? img3 : img4 } alt={name}/>
            <p className="font-small">{breed}</p>
            <p className="text-medium">{name}</p>
            <p className="max-w-80">{description}</p>
            <div className={`flex justify-center gap-1 ${subColor} w-full rounded`}>
                <div className={` rounded flex flex-col items-center p-2 w-1/3 ${color} `}>
                    <b className="text-white text-center">{age}</b>
                    <p className="text-white text-center">years old</p>
                </div>
                <div className={` rounded flex flex-col items-center p-2 w-1/3 ${color} `}>
                    <b className="text-white text-center">4</b>
                    <p className="text-white text-center">Paws</p>
                </div>
                <div className={` rounded flex flex-col items-center p-2 w-1/3 ${color} `}>
                    <b className="text-white text-center">{friends}</b>
                    <p className="text-white text-center">Friends</p>
                </div>
            </div>
        </div>
        </>
    )
}