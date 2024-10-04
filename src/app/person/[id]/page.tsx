import Image from "next/image"

interface IPerson {
    params: {
        id: string
    }
}

interface IData {
    name: string, 
    status: string, 
    image: string, 
    gender: string, 
    species: string,
    id: string,
    origin: {
        name: string
    }
}

const Person = async ({params: {id}}: IPerson) => {

    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    
    const data : IData = await res.json();

    return(
        <div>
            <h1>{data.id}</h1>
            <p>{data.name}</p>
            <p>{data.status}</p>
            <p>{data.species}</p>
            <Image src={data.image} alt="nome" width={200} height={200} priority={true} />
        </div>
    )
}

export default Person;