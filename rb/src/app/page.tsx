'use client';

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">Welcome to SupplyChain Tracker</h1>
      <p className="mt-4">Please sign up or log in to get started.</p>
    <div className=" flex flex-col items-center mt-6 space-y-4">
        <div className= "border-2 p-2" onClick={() => { router.push("/dashboard/customer"); }} > DashBoard </div> 
      <div className= "border-2 p-2" onClick={() => { router.push("/login"); }} > LOGIN </div>
      <div className= "border-2 p-2" onClick={() => { router.push("/signup"); }} > SIGNUP </div> 
    </div>
    </div>
  );
}
