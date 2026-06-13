const Hero = () => {
    return (
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-sm">
                    Master React with <span className="text-blue-600">Modern Architecture</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    The ultimate practice platform for developers who want to build high-performance,
                    visually stunning web applications using the latest industry standards.
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl active:scale-95 transform hover:-translate-y-1">
                        Get Started Free
                    </button>
                    <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all shadow-md active:scale-95">
                        View Live Demo
                    </button>
                </div>
                <div className="mt-16 flex justify-center items-center space-x-8 text-gray-400 grayscale opacity-70">
                    <span className="font-bold text-xl uppercase tracking-widest text-gray-500">React</span>
                    <span className="font-bold text-xl uppercase tracking-widest text-gray-500">Vite</span>
                    <span className="font-bold text-xl uppercase tracking-widest text-gray-500">Tailwind</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
