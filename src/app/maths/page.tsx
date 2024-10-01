"use client"

import { log } from "console";
import React, { use, useState} from "react";

interface IMath {
    a: string, 
    b: string, 
    op: string,
}

const Maths: React.FC = () => {

    const [num1, setNum1] =  useState< string >(" ");
    const [num2, setNum2] =  useState< string >(" ");
    const [result, setResult] =  useState< number | undefined >();
    const [opperation, setOpperation] = useState< string >(" ");
    const [resultString, setResultString] = useState< string >("Result");

    const errMessage = "Invalid input. Try again with numbers, please.";

    const handleSum = ( {a, b, op }:IMath) => {
        const parsedNum1 = parseFloat(a);
        const parsedNum2 = parseFloat(b);
        const opParse = parseInt(op);

        if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {

            switch(opParse) {
                case 1:
                    
                    setResult(parsedNum1 + parsedNum2);
                    setResultString("Sum");
                    console.log(result);
                    
                    
                    break;

                case 2:
                    setResult(parsedNum1 - parsedNum2);
                    setResultString("Subtraction");
                    console.log(result);


                    break;

                case 3:
                    setResult(parsedNum1 * parsedNum2);
                    setResultString("Multiplication");
                    console.log(result);


                    break;

                case 4:
                    setResultString("Division");
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
            <div className="w-64 max-w-64 flex flex-col items-center gap-8 bg-purple-300 p-8">

                <div className="flex flex-col">
                    <label className="text-purple-800 font-semibold" htmlFor="num1Input">First number</label>
                    <input id="num1Input" className="bg-stone-100 p-1 placeholder:text-stone-400" placeholder="Type..." type="text" value={num1} onChange={ (e) => { setNum1(e.target.value) }}/>
                </div>
                <div className="flex gap-3">
                    <input onClick={ (e:any) => {setOpperation(e.target.value);  handleSum( {a: num1, b: num2, op: opperation} ) } } className="hidden" id="op1" type="radio" name="op" value={1}/>
                    <label htmlFor="op1">➕</label>

                    <input onClick={ (e:any) => {setOpperation(e.target.value); handleSum( {a: num1, b: num2, op: opperation} ) } } className="hidden" id="op2" type="radio" name="op" value={2}/>
                    <label htmlFor="op2">➖</label>
                    
                    <input onClick={ (e:any) => {setOpperation(e.target.value); handleSum( {a: num1, b: num2, op: opperation} ) } } className="hidden" id="op3" type="radio" name="op" value={3}/>
                    <label htmlFor="op3">✖</label>

                    <input onClick={ (e:any) => {setOpperation(e.target.value); handleSum( {a: num1, b: num2, op: opperation} ) } } className="hidden" id="op4" type="radio" name="op" value={4}/>
                    <label htmlFor="op4">➗</label>
                </div>
                <div className="flex flex-col">
                    <label className="text-purple-800 font-semibold" htmlFor="num2Input">Second number</label>
                    <input id="num2Input" className="bg-stone-100 p-1 placeholder:text-stone-400" placeholder="Type..." type="text" value={num2} onChange={ (e) => { setNum2(e.target.value) }}/>
                </div>
                <b>❔</b>
                {/* <button className="bg-orange-600 text-white font-bold p-1 hover:bg-cyan-600 h-8 w-8 leading-4" onClick={ () =>  handleSum({a: num1, b: num2, op: opperation} )  }>❔</button> */}
                {/* <b>{resultString}: { !isNaN(result ?? NaN)? result : errMessage }</b> */}
                <b className="text-purple-800 text-center" >{ !isNaN(result ?? NaN)? result : errMessage }</b>

            </div>
        </>
    )
}

export default Maths