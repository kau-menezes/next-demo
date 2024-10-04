// external imports

import { Karla } from "next/font/google"

// internal imports
import "./globals.css";
import  {Menu}  from "@/components/menu";
import { Footer } from "@/components/footer";

const karlaFont = Karla({
  weight: ["200","300", "400", "500", "600", "700", "800"],
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
        className={`${karlaFont.variable} antialiased min-h-screen flex flex-col justify-between font-karlaFont`}
      >
        <Menu op1="Home 🏠" op2="Math 📊" op3="Function 📈" op4="Fetch Data 🎲" op5="axios" op6="server side"/>
        <main className={`flex flex-col items-center ${karlaFont.variable}`}>
          {children}
        </main>
        <Footer op1="📞" op2="📩"/>
      </body>
    </html>
  );
}
