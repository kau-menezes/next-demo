import Link from "next/link";
import React from "react";

interface IFooter{
    op1: string;
    op2: string;
}

export const Footer = ({ op1, op2 }: IFooter) => {
    return(
        <>
        <div className="bg-neutral-400 h-[4vh] flex flex-col items-center text-white p-2">
            <p className="font-medium">No rights reserved, this is just a study!</p>
        </div>
        </>
    )
}