import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import logo from './images/logo.jpeg';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="App">
        <header className="bg-white shadow">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <Link to="/">
              <img src={logo} alt="Fertility Care Logo" className="h-24" /> {/* Adjust the height as needed */}
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-teal-600">Home</Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600">About Us</Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600">Contact</Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
          </nav>
          {isOpen && (
            <div className="md:hidden">
              <ul className="flex flex-col items-center space-y-4 p-4">
                <li><Link to="/" className="text-gray-700 hover:text-teal-600" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/about" className="text-gray-700 hover:text-teal-600" onClick={() => setIsOpen(false)}>About Us</Link></li>
                <li><Link to="/contact" className="text-gray-700 hover:text-teal-600" onClick={() => setIsOpen(false)}>Contact</Link></li>
              </ul>
            </div>
          )}
        </header>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Fertitera. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
export default App;
