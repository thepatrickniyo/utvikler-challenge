"use client"
import React, { useState } from 'react';

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex h-10 w-full rounded-md border border-dark-gray bg-background p-6 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 placeholder:text-black/60"
        placeholder="Password"
      />
      <button
        onClick={togglePasswordVisibility}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-black hover:text-gray-700 pr-6"
      >
        {showPassword ? 'HIDE' : 'SHOW'}
      </button>
    </div>
  );
};
