"use client"; // This is a client component
import './globals.css';

export default function Home() {
  return (
    <div className="flex items-center justify-center ">
      <div className="bg-purple-600 text-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Work Manager
        </h1>
      </div>
    </div>
  );
}
