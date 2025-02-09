import React from 'react';
import { Mail, Sparkles } from 'lucide-react';

const Navbar = ({ onGetStarted }) => (
  <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex-shrink-0 flex items-center">
          <Mail className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">Geto AI</span>
        </div>
        <button 
          onClick={onGetStarted}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Get Started
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;