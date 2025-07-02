"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("userRole");
    setRole(storedRole);
  }, []);

  return (
    <nav className="bg-white shadow px-4 py-3 flex justify-between items-center">
      <Link href="/">
        <span className="font-bold text-lg text-blue-600">SupplyChain Tracker</span>
      </Link>
      <div className="flex gap-4">
        <Link href="/signup" className="text-gray-600 hover:text-blue-500">Sign Up</Link>
        <Link href="/login" className="text-gray-600 hover:text-blue-500">Log In</Link>
        {role && (
          <Link href={`/dashboard/${role}`} className="text-gray-600 hover:text-blue-500">
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}
