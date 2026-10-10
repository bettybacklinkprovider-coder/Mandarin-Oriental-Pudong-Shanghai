import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-[#001f3f] border-b border-[#D4AF37]">
      <Link to="/" className="text-2xl font-serif text-[#D4AF37]">Mandarin Oriental</Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-[#D4AF37]">Home</Link>
        <Link to="/rooms-suites" className="hover:text-[#D4AF37]">Rooms & Suites</Link>
        <Link to="/dining" className="hover:text-[#D4AF37]">Dining</Link>
        <Link to="/about" className="hover:text-[#D4AF37]">About Us</Link>
        <Link to="/rooms-suites" className="bg-[#8B0000] px-4 py-2 hover:bg-[#a50000]">Book Now</Link>
      </div>
    </nav>
  );
};

export default Navbar;
