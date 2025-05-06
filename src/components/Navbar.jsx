import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow mb-8">
      <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">Student Dashboard</span>
        <div className="space-x-4">
          <Link
            to="/"
            className={`font-medium ${pathname === '/' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-500`}
          >
            Home
          </Link>
          <Link
            to="/add"
            className={`font-medium ${pathname === '/add' ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-500`}
          >
            Add Student
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;