import Link from "next/link";
import React from "react";

interface IFooter{
    op1: string;
    op2: string;
}

export const Footer = ({ op1, op2 }: IFooter) => {
    return(
        <>
        <p>No rights reserved, this is just a study!</p>
        <p>Contacts</p>
        <footer className="flex flex-row gap-x-5">
          <p>{op1}</p>
          <p>{op2}</p>
        </footer>
        </>
    )
}