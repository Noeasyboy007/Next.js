"use client"; // This is a client component

const Footer = () => {
  return (
    <footer className="h-20 bg-slate-700 flex flex-col justify-center items-center mt-4 text-white text-center">
      <p className="text-lg font-semibold mb-2">
        &copy; {new Date().getFullYear()} Work Manager. All rights reserved.
      </p>
      <p className="text-sm">
        Designed to help you manage your tasks efficiently and effectively.
      </p>
    </footer>
  );
};

export default Footer;
