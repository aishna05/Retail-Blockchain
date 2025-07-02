"use client";
import { useState } from "react";

export default function SignupPage() {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
        // Example backend connection (replace URL and payload as needed)
        const response = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...formData, role }),
        });
        if (!response.ok) {
            throw new Error("Signup failed");
        }
        // Optionally handle response data
        localStorage.setItem("userRole", role);
        window.location.href = `/dashboard/${role}`;
    } catch (error) {
        // Handle error (e.g., show error message)
        if (error instanceof Error) {
            alert(error.message);
        } else {
            alert("An unknown error occurred.");
        }
    }
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6">
      <input placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

      <select onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="raw">Raw</option>
        <option value="manufacturer">Manufacturer</option>
        <option value="wholesale">Wholesale</option>
        <option value="retail">Retail</option>
        <option value="customer">Customer</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign Up</button>
    </form>
  );
}
