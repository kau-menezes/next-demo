import { ApiCard } from "@/components/apiCard";
import Link from "next/link";
import { Suspense } from "react"

const baseurl = "https://rickandmortyapi.com/api/character";

type TData = {
    results: {
        id: string,
        name: string,
        species: string,
        status: string,
        gender: string,
        origin: {
            name: string
        }
    }[]
}

const ServerSidePage = async () => {
    
    const res = await fetch(baseurl);

    const data : TData = await res.json();

    console.log(data);
    

    return(
        <>
            <h1>aa</h1>
            <Suspense fallback={<div>loading...</div>}>
                {data.results.map( ( item ) => {
                    return(
                        <div key={ item.id }>
                            <h2> { item.name } </h2>
                            <Link href={`/person/${item.id}`}>ABRIR</Link>
                            {/* <ApiCard name={item.name} species={item.species} status={item.status} image={item.image} gender={item.gender} id={item.id} origin={item.origin.name}/> */}
                        </div>
                    )
                })}
            </Suspense>
        </>
    )
}

export default ServerSidePage;