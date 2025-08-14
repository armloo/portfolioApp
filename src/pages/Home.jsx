export default function Home() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 animate-fade-in px-4 sm:px-6 lg:px-8">
            <div className="relative flex flex-col items-center w-full">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse" />
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 drop-shadow-lg animate-slide-down mb-4 sm:mb-6 text-center hover:scale-105 transition-transform duration-500 cursor-default">
                    Welcome!
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mb-6 sm:mb-8 animate-fade-in-delay text-center leading-relaxed w-full">
                    Explore my portfolio and discover my journey in tech, design, and development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-delay">
                    <a href="#about" className="px-6 sm:px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 text-center hover:from-purple-500 hover:to-cyan-500 active:scale-95">
                        Learn More
                    </a>
                    <a href="#contact" className="px-6 sm:px-8 py-3 rounded-full border-2 border-purple-500 text-purple-400 font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 text-center hover:scale-105 active:scale-95">
                        Contact Me
                    </a>
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    0% { opacity: 0; }
                    100% { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 1.2s ease-in;
                }
                @keyframes fade-in-delay {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-delay {
                    animation: fade-in-delay 1.6s 0.5s both;
                }
                @keyframes slide-down {
                    0% { opacity: 0; transform: translateY(-40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-slide-down {
                    animation: slide-down 1.2s cubic-bezier(0.4,0,0.2,1);
                }
            `}</style>
        </div>
    );
}