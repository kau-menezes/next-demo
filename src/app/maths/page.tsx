"use client"

import plus from "@/assets/icons/plus-svgrepo-com.svg";
import minus from "@/assets/icons/minus-svgrepo-com.svg";
import mult from "@/assets/icons/x-svgrepo-com.svg";
import divide from "@/assets/icons/divide-straight-svgrepo-com.svg";


import React, { use, useState} from "react";
import Image from "next/image";

type TOperations = "Sum" | "Subtraction" | "Multiplication" | "Division"

const Maths: React.FC = () => {

    const [num1, setNum1] =  useState< string >(" ");
    const [num2, setNum2] =  useState< string >(" ");
    const [result, setResult] =  useState< number | undefined >();
    const [opperation, setOpperation] = useState< string >(" ");

    const errMessage = "Invalid input. Try again with numbers, please.";

    const handleSum = (opperation:TOperations) => {
        const parsedNum1 = parseFloat(num1);
        const parsedNum2 = parseFloat(num2);
        // const opParse = parseInt(opperation);

        if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {

            switch(opperation) {
                case "Sum":
                    
                    setResult(parsedNum1 + parsedNum2);
                    console.log(result);
                    
                    
                    break;

                case "Subtraction":
                    setResult(parsedNum1 - parsedNum2);
                    console.log(result);


                    break;

                case "Multiplication":
                    setResult(parsedNum1 * parsedNum2);
                    console.log(result);


                    break;

                case "Division":
                    if (parsedNum2 == 0) {
                        setResult(undefined);
                    console.log(result);


                    } else {
                        setResult(parsedNum1 / parsedNum2);
                    console.log(result);


                    }

                    break;

                default:
                    setResult(undefined);
                    console.log(result);


            }

        } else {
            setResult(undefined);

        }

    }

    return(
        <>
            <div className="w-80 max-w-80 flex flex-col items-center gap-8 bg-cyan-800 pt-3">
                <h3 className="text-medium text-lime-300 font-semibold">Custom Calculator</h3>
                <div className="flex flex-col">
                    <label className="text-white font-semibold" htmlFor="num1Input">First number</label>
                    <input id="num1Input" className=" border-solid border-b-2 border-lime-300 bg-inherit p-1 text-white placeholder:white" placeholder="Type..." type="text" value={num1} onChange={ (e) => { setNum1(e.target.value) }}/>
                </div>
                <div className="flex flex-col">
                    <label className="text-white font-semibold" htmlFor="num2Input">Second number</label>
                    <input id="num2Input" className="border-solid border-b-2 border-lime-300 bg-inherit p-1 text-white placeholder:white" placeholder="Type..." type="text" value={num2} onChange={ (e) => { setNum2(e.target.value) }}/>
                </div>
                <div className="flex gap-3">
                    <button onClick={ (e:any) => {handleSum( "Sum" ) } } ><Image className="w-8" src={plus} alt="Plus"/></button>
                    <button onClick={ (e:any) => {handleSum( "Subtraction" ) } } ><Image className="w-8" src={minus} alt="Minus"/></button>
                    <button onClick={ (e:any) => {handleSum( "Multiplication" ) } } ><Image className="w-8 rotate-45" src={plus} alt="Multiplication"/></button>
                    <button onClick={ (e:any) => {handleSum( "Division" ) } } ><Image className="w-8" src={divide} alt="Division"/></button>
                </div>
                <div className="flex flex-col w-full h-1/3 bg-lime-300 p-3">
                    <b className="text-cyan-800 text-sm">Result</b>
                    <b className="text-cyan-800 text-medium" >{ !isNaN(result ?? NaN)? result : errMessage }</b>
                </div>

            </div>
        </>
    )
}

export default Maths