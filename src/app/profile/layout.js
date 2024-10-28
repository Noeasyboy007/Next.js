import '../globals.css';

export default function ProfileLayout({ children }) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-200">
        <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
          This is profile Layout Header
        </header>
        
        <main className="flex-grow container mx-auto p-8">
          {children}
        </main>
        
        <footer className="bg-blue-600 text-white p-4 text-center text-sm">
          This is profile Layout Footer
        </footer>
      </div>
    );
  }
  