import { Card } from "@/components/card";

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap gap-4 my-24">
      <Card textColor="text-purple-500" subColor="divide-purple-700" mainColor="bg-purple-500" name="Amora" age={2} pic="img1" breed="Amora Maria" friends={0.5}/>
      <Card textColor="text-amber-500" subColor="divide-amber-700" mainColor="bg-amber-500" name="Romeu" age={4}  pic="img2" breed="Romeu Miguel" friends={1}/>
      <Card textColor="text-red-500" subColor="divide-red-700" mainColor="bg-red-500" name="Koda" age={4}  pic="img4" breed="Odair José de Menezes" friends={3}/>
      <Card textColor="text-pink-500" subColor="divide-pink-700" mainColor="bg-pink-500" name="Marie" age={12}  pic="img3" breed="Marie Claire" friends={1}/>
    </div> 
  )
};
