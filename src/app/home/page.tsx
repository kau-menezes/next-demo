import { Card } from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-row gap-4">
      <Card subColor="bg-gray-700" mainColor="bg-gray-500" name="Amora" age={2} pic="img1" breed="Amora Maria" friends={0.5}/>
      <Card subColor="bg-amber-700" mainColor="bg-amber-500" name="Romeu" age={4}  pic="img2" breed="Romeu Miguel" friends={3}/>
      <Card subColor="bg-red-700" mainColor="bg-red-500" name="Koda" age={4}  pic="img4" breed="Odair José de Menezes" friends={1}/>
      <Card subColor="bg-pink-700" mainColor="bg-pink-500" name="Marie" age={12}  pic="img3" breed="Marie Claire" friends={1}/>
    </div> 
  )
};
