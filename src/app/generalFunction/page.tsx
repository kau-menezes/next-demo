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
    <div className=" flex flex-col bg-white shadow-slate-400 shadow-lg w-10/12 min-w-[900px] p-8 gap-6 rounded-md">
        
      <h3 className="text-sky-900 font-medium text-[28px]">Another calculator!</h3>
      <div className="flex flex-col items-center w-full gap-6">
        <div className="bg-red-100 w-full flex flex-col gap-3 p-4 rounded-md">
            <div className="flex">
                <label htmlFor="n1" className="w-1/3 text-sm font-semibold leading-6 text-sky-900">Number 1 <span className="text-red-500 font-semibold">*</span></label>
                <input onChange={(e) => {setNum1(e.target.value)}} value={num1} type="text" name="n1" id="n1" className="w-2/3 rounded-md block flex-1 border-0 bg-white py-1.5 pl-1  text-sky-900 placeholder:text-sky-900"/>
            </div>
            <div className="flex">
                <label htmlFor="n2" className="w-1/3 text-sm font-semibold leading-6 text-sky-900">Number 2 <span className="text-red-500 font-semibold">*</span></label>      
                <input onChange={(e) => {setNum2(e.target.value)}} value={num2} type="textc" name="n2" id="n2" className="w-2/3 rounded-md block flex-1 border-0 bg-white py-1.5 pl-1 text-sky-900 placeholder:text-sky-900"/>
            </div>
        </div>
            <div>
                <button  className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md" onClick={() => handleAll({a: num1, b: num2})} >Result!</button>
            </div>
            <div className="flex justify-between w-full">
                <div className="flex flex-col items-start gap-8 w-1/2">
                    <div className="flex justify-between w-11/12 items-center">
                        <span className="font-semibold text-sky-900">Sum:</span>
                        <span className="border-solid border-2 border-red-500 py-2 px-4 rounded-md  text-sky-900">{ !isNaN(answSum ?? NaN) ? answSum : error}</span>
                    </div>
                    <div className="flex justify-between w-11/12 items-center">
                        <span className="font-semibold text-sky-900">Subtraction:</span>
                        <span className="border-solid border-2 border-red-500 py-2 px-4 rounded-md  text-sky-900">{ !isNaN(answSub ?? NaN) ? answSub : error}</span>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-8 w-1/2">
                    <div className="flex justify-between w-11/12 items-center">
                        <span className="font-semibold text-sky-900">Multiplication:</span>
                        <span className="border-solid border-2 border-red-500 py-2 px-4 rounded-md  text-sky-900">{ !isNaN(answMult ?? NaN) ? answMult : error}</span>
                    </div>
                    <div className="flex justify-between w-11/12 items-center">
                        <span className="font-semibold text-sky-900">Division:</span>
                        <span className="border-solid border-2 border-red-500 py-2 px-4 rounded-md  text-sky-900">{ !isNaN(answDiv ?? NaN) ? answDiv : error}</span>
                    </div>
                </div>
            </div>
        </div>
      <div className="bg-white border-solid border-2 border-gray-300 hover:border-red-500 w-24 flex items-center justify-center rounded-md text-gray-300 hover:text-red-500">
        <a className="font-semibold text-gray-300 hover:text-red-500 text-[14px] text-center" href="https://www.calculoid.com/images/templates/Calculoid_Cost_Web_Calculator_preview.png" target="_blank">Reference!</a>
      </div>
    </div> 
  )
};

export default GeneralFunction;