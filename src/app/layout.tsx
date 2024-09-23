// external imports

import { Karla } from "next/font/google"

// internal imports
import "./globals.css";
import  {Menu}  from "@/components/menu";
import { Footer } from "@/components/footer";
import { Form } from "@/components/form";


const karlaFont = Karla({
  weight: ["200", "400", "800"],
  style: "normal",
  variable: "--karlaFont",
  subsets: ["latin"],
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karlaFont.variable} antialiased min-h-screen flex flex-col justify-between`}
      >
        <Menu op1="Home" op2="Carrinho"/>
        {children}
        <Form email="user@email.com" password="123"/>
        <Footer op1="📞" op2="📩"/>
      </body>
    </html>
  );
}
