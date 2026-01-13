
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { THEME } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/buy' },
    { name: 'Sell', path: '/sell' },
    { name: 'Neighborhoods', path: '/neighborhoods' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="bg-[#BD1015] text-white py-2 px-4 text-[10px] md:text-xs flex justify-between items-center tracking-[0.1em] font-medium uppercase">
        <div className="flex gap-6">
          <a href="tel:7134926278" className="hover:opacity-80 flex items-center gap-2 transition-opacity">
            <span>(713) 492-6278</span>
          </a>
          <a href="mailto:jordanapplebe@outlook.com" className="hover:opacity-80 hidden md:inline transition-opacity">
            jordanapplebe@outlook.com
          </a>
        </div>
        <div className="flex gap-4">
          <Link to="/contact" className="hover:opacity-80 font-bold border-b border-white/30">Request Consult</Link>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col group">
            <span className="font-signature text-4xl text-gray-900 -mb-2 group-hover:text-[#BD1015] transition-colors">Jordan Applebe</span>
            <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#BD1015] mt-1">Houston REALTOR® | KW Clear Lake</span>
          </Link>
          
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[13px] uppercase tracking-[0.1em] font-bold transition-all ${
                  location.pathname === link.path ? 'text-[#BD1015] border-b-2 border-[#BD1015]' : 'text-gray-600 hover:text-[#BD1015]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#BD1015] focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 text-sm font-bold uppercase tracking-widest text-gray-700 hover:bg-gray-50 hover:text-[#BD1015]"
            >
              {link.name}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#BD1015] text-white py-4 rounded font-bold uppercase tracking-widest text-xs"
            >
              Get Home Value
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
