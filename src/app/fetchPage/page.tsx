"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

const baseulr = "https://rickandmortyapi.com/api/character"

interface IData {
    name: string, 
    id: string,
    image:string
}

const FetchPage = () => {

    const [characters, setCharacters] = useState<IData[]>([]);

    useEffect(() => {
        const load = async() => {
            const res = await fetch(baseulr);
            const data = await res.json();

            console.log(data);

            setCharacters(data.results);
        }
    
        load()

    }, [])
    

    return (
        <>
        <p>Fetch!</p>
        <div className="flex flex-wrap w-full">

            {characters.map( ( item ) => {
                return(

                    <div className="shadow-md p-4 w-52" key={ item.id }>
                        <h2 className="text-medium text-wrap">{ item.name }</h2>
                        <p className="italic text-neutral-500 font-semibold"> # { item.id }</p>
                        <Image src={item.image} alt={item.name} width={200} height={200}/>
                    </div>
                )
            })}

        </div>

        </>
    )
}

export default FetchPage;