"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Logged in successfully!");
        router.push("/"); // Redirect to homepage or dashboard
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("An error occurred");
      console.error(error);
    }
  };

  return (
    <div className="w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md text-black">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Log In</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Login
        </button>
      </form>

      <hr className="my-6 border-gray-300" />

      <div className="text-center">If you don&apos;t have an account</div>
      <div className="text-center cursor-pointer" onClick={() => router.push("/signup")}>
        Signup
      </div>
    </div>
  );
}
