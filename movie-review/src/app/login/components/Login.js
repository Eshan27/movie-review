"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    toast.success('Logged in successfully!');

    setFormData({
        email: '',
        password: '',
      });

    router.push('/');
  };

  return (
    <div className='w-1/2 mx-auto p-6 bg-white rounded-lg shadow-md text-black'>
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>

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

    <div className='text-center'>
        If you dont have an account
    </div>
    <div className='text-center' onClick={() => router.push('/signup')}>
        Signup
    </div>
    </div>
  );
}
