// function Footer() {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="site-footer">
//       <p>&copy; {currentYear} Student Portal. All rights reserved.</p>
//     </footer>
//   );
// }

// export default Footer;

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-6 block">
                        PracticeApp
                    </span>
                    <p className="text-gray-400 max-w-sm leading-relaxed">
                        Empowering developers to build beautiful, functional, and performant web applications
                        with modern React practices and cutting-edge design tools.
                    </p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6">Product</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Updates</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-6">Support</h4>
                    <ul className="space-y-4 text-gray-400">
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Community</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center text-gray-500 text-sm">
                <p>&copy; 2026 PracticeApp Inc. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;