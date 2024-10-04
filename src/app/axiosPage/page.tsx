"use client"

import { ApiCard } from "@/components/apiCard";
import { useEffect, useState, Suspense } from "react";
import Image from "next/image";

import { api } from "@/constants/api";

interface IData {
    name: string, 
    status: string, 
    image: string, 
    gender: string, 
    species: string,
    id: string,
    origin:{

      name:string  
    } 
}

const AxiosPage = () => {

    const [data, setData] = useState<IData[]>([]);
    const [characterName, setCharacterName] = useState<string>();
    const [error, setError] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("Character not found!");
    const [page, setPage] = useState<string>("");

    useEffect(() => {
      
        const data = api.get(`/character/?page=${page}`).then( (res) => {
            setError(false);
            console.log(res.data.results);
            setData(res.data.results);

        }).catch( (err) => {
            console.log(err);
            if (err.response.status === 400) {

                setErrorMessage("Erro 400 :(");
            }

            setError(true);
            
        })

        
      
    }, [page])
    

    return (
        <>
        {error && <h1>{errorMessage}</h1>}
        <h1 className="font-bold">axios! </h1>
        <div className="flex gap-3">
            <div className="flex gap-3">
                <label htmlFor="character-search">Character:</label>
                <input placeholder="Type a character name..." className="bg-neutral-100 p-2" id="character-search" type="text" onChange={ (e) => { setCharacterName(e.target.value)}} />
                <p>{characterName}</p>
            </div>
            <div>
                <label htmlFor="page">Page:</label>
                <input placeholder="1/42" value={page} className="bg-neutral-100 p-2" id="page" type="text" onChange={ (e) =>  setPage(e.target.value) } />
                <p>{page}</p>
            </div>
        </div>
        <div className="flex flex-wrap w-10/12 gap-4">
            {data.map( ( item ) => {
                return(
                    <ApiCard name={item.name} species={item.species} status={item.status} image={item.image} gender={item.gender} id={item.id} origin={item.origin.name}/>
                )
            })}
        </div>
        </>
    )
}

export default AxiosPage;