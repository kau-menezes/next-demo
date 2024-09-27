"use client"

import React, { use, useState} from "react";

const Maths: React.FC = () => {

    const [num1, setNum1] =  useState<string>("");
    const [num2, setNum2] =  useState<string>("");
    const [sum, setResult] =  useState<number | undefined>();
    const [opperation, setOpperation] = useState<number | undefined>();

    const errMessage = "Invalid input. Try again with numbers, please.";

    const handleSum = () => {
        const parsedNum1 = parseFloat(num1);
        const parsedNum2 = parseFloat(num2);

        if (!isNaN(parsedNum1) && !isNaN(parsedNum2)) {

            switch(opperation) {
                case 1:
                    setResult(parsedNum1 + parsedNum2);
                    break;

                case 2:
                    setResult(parsedNum1 - parsedNum2);
                    break;

                case 3:
                    setResult(parsedNum1 * parsedNum2);
                    break;

                case 4:
                    if (parsedNum2 == 0) {
                        setResult(undefined);

                    } else {
                        setResult(parsedNum1 / parsedNum2);
                    }

                    break;

                default:
                    setResult(undefined);

            }

        } else {
            setResult(undefined);

        }

    }

    return(
        <>
            <b>Use client with state managment!</b>
            <div className="w-75 flex flex-col items-center gap-8">

                <div className="flex flex-col">
                    <label htmlFor="num1Input">First number</label>
                    <input id="num1Input" className="bg-stone-200 p-1 placeholder:text-stone-400" placeholder="Type..." type="text" value={num1} onChange={ (e) => { setNum1(e.target.value) }}/>
                </div>
                <div className="flex gap-3">
                    <input onClick={ (e:any) => {setOpperation(e.target.value)} } className="" id="op1" type="radio" name="op" value={1}/>
                    <label htmlFor="op1">➕</label>

                    <input onClick={ (e:any) => {setOpperation(e.target.value)} } className="" id="op2" type="radio" name="op" value={2}/>
                    <label htmlFor="op2">➖</label>
                    
                    <input onClick={ (e:any) => {setOpperation(e.target.value)} } className="" id="op3" type="radio" name="op" value={3}/>
                    <label htmlFor="op3">✖</label>

                    <input onClick={ (e:any) => {setOpperation(e.target.value)} } className="" id="op4" type="radio" name="op" value={4}/>
                    <label htmlFor="op4">➗</label>
                    {/* <input type="checkbox" className="leading-8 bg-slate-200 h-8 w-8 text-center hover:bg-slate-400 hover:cursor-pointer">➕</input>
                    <input type="checkbox" className="leading-8 bg-slate-200 h-8 w-8 text-center hover:bg-slate-400 hover:cursor-pointer">➖</input>
                    <input type="checkbox" className="leading-8 bg-slate-200 h-8 w-8 text-center hover:bg-slate-400 hover:cursor-pointer">✖</input>
                    <input type="checkbox" className="leading-8 bg-slate-200 h-8 w-8 text-center hover:bg-slate-400 hover:cursor-pointer">➗</input> */}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="num2Input">Second number</label>
                    <input id="num2Input" className="bg-stone-200 p-1 placeholder:text-stone-400" placeholder="Type..." type="text" value={num2} onChange={ (e) => { setNum2(e.target.value) }}/>
                </div>

                <button className="bg-cyan-700 text-white font-bold p-1 hover:bg-cyan-600 h-8 w-8 leading-4" onClick={ () => { handleSum() }}>❔</button>
                <b>Sum: { !isNaN(sum ?? NaN)? sum : errMessage }</b>

            </div>
        </>
    )
}

export default Maths