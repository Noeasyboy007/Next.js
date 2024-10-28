import Link from 'next/link';

const Header = () => {
  return (

    <nav className="bg-green-500 h-12 py-2 px-6 flex justify-between items-center" >
      <div className='Heading'>
        <h1 className='text-2xl font-semibold text-white'>
        <a href={"/"}>Work Manager</a>
        </h1>
      </div>

      <div>
        <ul className='flex space-x-4 text-xl font-semibold text-white'>
          <li> <a href="#">Home</a></li>
          <li> <a href="#">Add Task</a></li>
          <li><a href="#">Show Task</a> </li>
        </ul>
      </div>

      <div>
        <ul className='flex space-x-3 text-xl font-semibold text-white'>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </div>
    </nav >

  );
};

export default Header;
