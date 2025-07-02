"use client";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulated login (in real use, connect backend)
    const role = localStorage.getItem("userRole");
    window.location.href = `/dashboard/${role}`;
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4 p-6">
      <input
        placeholder="Email"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Log In
      </button>
    </form>
  );
}
