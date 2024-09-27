import Link from "next/link";
import React from "react";

interface IFooter{
    op1: string;
    op2: string;
}

export const Footer = ({ op1, op2 }: IFooter) => {
    return(
        <>
        <div className="bg-neutral-400 flex flex-col items-center text-white p-2">
            <b>No rights reserved, this is just a study!</b>
        </div>
        </>
    )
}