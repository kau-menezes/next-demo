"use client"

import React, { useState } from "react";

interface HandleProps {
    a: string, 
    b: string
}

const GeneralFunction:React.FC = () => {

    const [num1, setNum1] = useState<string>("");
    const [num2, setNum2] = useState<string>("");

    const [answSum, setSum] = useState<number | undefined>();
    const [answMult, setMult] = useState<number | undefined>();
    const [answSub, setSub] = useState<number | undefined>();
    const [answDiv, setDiv] = useState<number | undefined>();

    const handleAll = ({a, b}: HandleProps) => {
        const parsedNum1 = parseFloat(a);
        const parsedNum2 = parseFloat(b);

        console.log(parsedNum1);
        console.log(parsedNum2);
        

        if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {
            
            setSum(parsedNum1 + parsedNum2);
            setSub(parsedNum1 - parsedNum2);
            setMult(parsedNum1 * parsedNum2);
            setDiv(parsedNum1 / parsedNum2);
               

        } else {
            setSum(undefined);
            setSub(undefined);
            setMult(undefined);
            setDiv(undefined);

        }

    }


    const error = "Type a valid number miss";


  return (
    <>
      <h3>função</h3>
      <div className="flex flex-col items-center w-full">
            <div className="md:w-1/4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2 w-full">
                    <label htmlFor="n1" className="block text-sm font-medium leading-6 text-gray-900">Number 1</label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input onChange={(e) => {setNum1(e.target.value)}} value={num1} type="text" name="n1" id="n1" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
            </div>
            <div className="md:w-1/4">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2 w-full">
                    <label htmlFor="n2" className="block text-sm font-medium leading-6 text-gray-900">Number 2</label>
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input onChange={(e) => {setNum2(e.target.value)}} value={num2} type="textc" name="n2" id="n2" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleAll({a: num1, b: num2})} >Result!</button>
            </div>
            <div>
                <p>{ !isNaN(answSum ?? NaN) ? answSum : error}</p>
                <p>{ !isNaN(answSub ?? NaN) ? answSub : error}</p>
                <p>{ !isNaN(answMult ?? NaN) ? answMult : error}</p>
                <p>{ !isNaN(answDiv ?? NaN) ? answDiv : error}</p>
            </div>
        </div>
    </> 
  )
};

export default GeneralFunction;