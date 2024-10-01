import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";

interface IMenu{
    op1?: string,
    op2?: string,
    op3?: string;
}

/* export const Menu = ({ op1, op2, op3, op4 }{
    op1: string, 
    op2: string,
    op3: String,
    op4: string
}) => { return... */


// export const Menu: React.FC<IMenu> = ({ op1, op2, op3, op4 }) => {

export const Menu = ({ op1, op2, op3 }: IMenu) => {
    return(
        <>
        <nav className="font-semibold flex flex-row gap-x-5 bg-cyan-800 justify-center p-3 font-karlaFont">
          <Link href={ROUTES.home} className="font-semibold hover:cursor-pointer hover:bg-cyan-600 text-center min-w-24 py-1 px-2 text-white bg-cyan-700">{op1}</Link>
          <Link href={ROUTES.maths} className="font-semibold hover:cursor-pointer hover:bg-cyan-600 text-center min-w-24 py-1 px-2 text-slate-200 bg-cyan-700">{op2}</Link>
          <Link href={ROUTES.generalFunction} className="font-semibold hover:cursor-pointer hover:bg-cyan-600 text-center min-w-24 py-1 px-2 text-slate-200 bg-cyan-700">{op3}</Link>
        </nav>
        </>
    )
}

