import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
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

  return (
    <header className={`w-full   p-4 shadow-md`}>      
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <span className="text-white">Alim</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-md">
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              className="hover:text-red-400 text-white cursor-pointer flex items-center gap-1"
            >
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
            <ModeToggle />

          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
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
              <Link to={item.path} className="block text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;