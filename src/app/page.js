import './globals.css';

export const metadata ={
  title:"Home : Work Manager"
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 ">
      <div className="bg-purple-600 text-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold">
          Welcome to Work Manager
        </h1>
      </div>
    </div>
  );
}
