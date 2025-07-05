import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";
import { ModeToggle } from "./ModeTogge";

 // Fixed import for React Router DOM

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => setIsOpen(!isOpen);


  const menuItems = [
    { label: "All Books", path: "/all-books" },
    { label: "Add Book", path: "/add-book" },
    { label: "Borrow Summary", path: "/borrow-summary" },
  ];
    // bg-[#0D142C]/
  return (
    <header
    
    className={`w-full top-0 fixed z-50 left-0 p-4 shadow-md bg-black/10 backdrop-blur-[4px]  `}>      
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-extrabold font-sans">
          <Link to={'/'}>BOOK SHELF</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-md">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className=" text-white cursor-pointer flex items-center gap-1"
            >
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
            <ModeToggle />

          <button className="bg-[#ff0019] hover:bg-red-700 text-white px-4 py-2 rounded-md">
            Get Started
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 rounded-full hover:bg-gray-700 transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mt-4 space-y-2 px-4">
          {menuItems.map((item, idx) => (
            <li key={idx} className="border-b border-gray-700 py-2">
              <NavLink 
              to={item.path} 
              onClick={()=>setIsOpen(false)}
              className="block text-white">
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;