"use client"; // This is a client component
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="bg-green-500 h-12 py-2 px-6 flex justify-between items-center">
      <div className="Heading">
        <h1 className="text-2xl font-semibold text-white">
          <Link href="/">Work Manager</Link>
        </h1>
      </div>

      <div>
        <ul className="flex space-x-4 text-xl font-semibold text-white">
          <li>
            <Link href={"/"} className="hover:text-purple-600">Home</Link>
          </li>
          <li>
            <Link href="add-task" className="hover:text-purple-600">Add Tasks</Link>
          </li>
          <li>
            <Link href="show-task" className="hover:text-purple-600">Show Tasks</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="flex space-x-3 text-xl font-semibold text-white">
          <li>
            <a href="#" className="hover:text-purple-600">Login</a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-600">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
