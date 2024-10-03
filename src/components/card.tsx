import Image from "next/image"

import img1 from "@/assets/img/amora.jpg";
import img2 from "@/assets/img/romeu.jpg";
import img3 from "@/assets/img/marie.jpg";
import img4 from "@/assets/img/koda.jpg";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

interface IPets{
    name: string, 
    age: number,
    breed: string, 
    pic: string, 
    friends: number,
    mainColor: string,
    subColor: string,
    textColor: string,

}

export const Card = ({ name, age, breed, pic, friends, mainColor: color, subColor, textColor }: IPets) => {

    return(
        <>
        <div className={"flex flex-col items-center w-[320px] bg-white rounded-[8px] shadow-xl hover:shadow-2xl overflow-hidden hover:scale-105 hover:cursor-pointer transition-transform duration-150"}>
            <Image className=" w-[320px] h-[224px] object-cover mb-3" src={ pic === "img1" ? img1 : pic === "img2" ? img2 : pic === "img3" ? img3 : img4 } alt={name}/>
            <p className={`font-small ${textColor} font-semibold`}>{breed}</p>
            <p className="text-large font-medium text-gray-800 leading-[1]">{name}</p>
            <p className="max-w-60 text-gray-700 my-4">{description}</p>
            <div className={`flex justify-center ${subColor} divide-x-4 w-full rounded border-solid border-t-2 `}>
                <div className={` flex flex-col items-center p-2 w-1/3 ${color} `}>
                    <b className="text-white text-center">{age}</b>
                    <p className="text-white text-center">years old</p>
                </div>
                <div className={` flex flex-col items-center p-2 w-1/3 ${color} `}>
                    <b className="text-white text-center">4</b>
                    <p className="text-white text-center">Paws</p>
                </div>
                <div className={` flex flex-col items-center p-2 w-1/3 ${color} `}>
                    <b className="text-white text-center">{friends}</b>
                    <p className="text-white text-center">Friends</p>
                </div>
            </div>
        </div>
        </>
    )
}