// function Header() {
//   return (
//     <header className="site-header">
//       <h1>My React Application</h1>
//       <nav>
//         <ul>
//           <li><a href="#home">Home</a></li>
//           <li><a href="#about">About</a></li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            PracticeApp
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Home</a>
                        <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Features</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">About</a>
                        <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">Contact</a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                            Log in
                        </button>
                        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95">
                            Sign up
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Home</a>
                        <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Features</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">About</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Contact</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-100">
                        <div className="flex items-center px-5 space-x-3">
                            <button className="w-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 mb-2">
                                Log in
                            </button>
                            <button className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;