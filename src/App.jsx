// import React from 'react'
// import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
// import About from './pages/About.jsx'
// import './App.css'
// import Education from './pages/Education.jsx'
// import Contact from './pages/Contact.jsx'
// import Home from './pages/Home.jsx'

// // function App() {
// //   return (
// //     <BrowserRouter>
// //       <nav>
// //         <ul>
// //           <li><Link to="/home">Home</Link></li>
// //           <li><Link to="/about">About</Link></li>
// //           <li><Link to="/education">Education</Link></li>
// //           <li><Link to="/contact">Contact</Link></li>
// //         </ul>
// //       </nav>
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/education" element={<Education />} />
// //         <Route path="/contact" element={<Contact />} />
// //         {/* Redirect unknown routes to Home */}
// //         <Route path="*" element={<Home />} />
// //       </Routes>
// //     </BrowserRouter>
// //   )
// // }

// function App() {
//   return (
//     <BrowserRouter>

//       {/* Fixed, Colorful Navigation Bar */}
//       <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 text-white shadow-xl backdrop-blur-md bg-opacity-90">
//         <div className="max-w-6xl mx-auto px-4">
//           <ul className="flex space-x-8 py-4 justify-center">
//             <li>
//               <Link
//                 to="/home"
//                 className="px-4 py-2 rounded-lg font-semibold text-white hover:bg-white/20 hover:text-white focus:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/about"
//                 className="px-4 py-2 rounded-lg font-semibold text-white hover:bg-white/20 hover:text-white focus:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/education"
//                 className="px-4 py-2 rounded-lg font-semibold text-white hover:bg-white/20 hover:text-white focus:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 Education
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/contact"
//                 className="px-4 py-2 rounded-lg font-semibold text-white hover:bg-white/20 hover:text-white focus:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Page Container (full width, add padding top for fixed navbar) */}
//       <div className="w-full p-6 pt-28">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/education" element={<Education />} />
//           <Route path="/contact" element={<Contact />} />
//           {/* Redirect unknown routes to Home */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import './App.css'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      {/* Fixed Responsive Navigation Bar with Mobile Menu */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white shadow-2xl backdrop-blur-md bg-opacity-95 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h2 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Aromal Portfolio
              </h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <ul className="flex space-x-4 lg:space-x-8">
                {[
                  { to: "/home", label: "Home" },
                  { to: "/about", label: "About" },
                  { to: "/education", label: "Education" },
                  { to: "/contact", label: "Contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.to}
                      className="relative px-3 lg:px-4 py-2 rounded-lg font-semibold text-white text-sm lg:text-base
                                 hover:text-yellow-400 hover:scale-105
                                 transition-all duration-300 ease-in-out 
                                 focus:outline-none focus:ring-2 focus:ring-yellow-500 
                                 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-yellow-400 
                                 after:left-1/2 after:bottom-0 after:transition-all after:duration-300 
                                 hover:after:w-full hover:after:left-0"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  menu.classList.toggle('hidden');
                }}
              >
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          <div className="md:hidden hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800/90 backdrop-blur-sm rounded-lg mt-2 border border-gray-700">
              {[
                { to: "/home", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/education", label: "Education" },
                { to: "/contact", label: "Contact" },
              ].map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  onClick={() => {
                    document.getElementById('mobile-menu').classList.add('hidden');
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content (responsive padding for fixed navbar) */}
      <div className="w-full px-2 sm:px-4 lg:px-6 pt-20 sm:pt-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-200 transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
