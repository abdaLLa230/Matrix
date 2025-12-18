import React from 'react';

export default function Loading() {
    return (
        <div className="loading h-screen w-full flex justify-center items-center bg-gray-900">
  <svg
    className="animate-spin -ml-1 mr-3 h-16 w-16 text-indigo-500"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    ></path>
  </svg>
</div>

    );
}