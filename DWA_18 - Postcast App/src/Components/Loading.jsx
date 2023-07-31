// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-700 via-indigo-900 to-slate-600">
      <div className="animate-spin h-8 w-8 border-t-4 border-gray-500 rounded-full mb-4"></div>
      <p className="text-gray-500">Loading...</p>
    </div>
  );
}


