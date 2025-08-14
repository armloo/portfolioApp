function Contact() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute left-1/4 top-0 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-tr from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-float-slow" />
        <div className="absolute right-1/4 bottom-0 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-br from-pink-500 to-purple-400 rounded-full blur-2xl opacity-15 animate-float" />
        <div className="absolute left-10 bottom-20 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-2xl opacity-10 animate-float-reverse" />
      </div>
      
      <div className="w-full p-4 sm:p-6 md:p-8 bg-gray-800/90 rounded-xl sm:rounded-2xl shadow-xl border border-gray-600 backdrop-blur-sm relative z-10 transform hover:scale-105 transition-all duration-500">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-400 mb-4 sm:mb-6 text-center tracking-tight drop-shadow-lg animate-pulse">Contact</h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-center hover:text-gray-200 transition-colors duration-300">Get in touch with me for opportunities and collaborations.</p>
        
        <form className="space-y-4 sm:space-y-6">
          <div className="transform hover:scale-102 transition-transform duration-300">
            <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base" htmlFor="name">Name:</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-200 hover:bg-gray-600 text-sm sm:text-base" 
              placeholder="Your Name"
            />
          </div>
          
          <div className="transform hover:scale-102 transition-transform duration-300">
            <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base" htmlFor="email">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-200 hover:bg-gray-600 text-sm sm:text-base" 
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="transform hover:scale-102 transition-transform duration-300">
            <label className="block text-gray-300 font-semibold mb-2 text-sm sm:text-base" htmlFor="message">Message:</label>
            <textarea 
              name="message" 
              id="message" 
              rows="4" 
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-gray-200 hover:bg-gray-600 resize-none text-sm sm:text-base" 
              placeholder="Your message here..."
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <button 
              type="submit" 
              className="flex-1 px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 hover:from-purple-500 hover:to-cyan-500 active:scale-95 text-sm sm:text-base"
            >
              Send Message
            </button>
            <button 
              type="reset" 
              className="flex-1 px-6 sm:px-8 py-2 sm:py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base"
            >
              Clear
            </button>
          </div>
        </form>
        
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-600">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-400 text-xs sm:text-sm">
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              aromal@example.com
            </div>
            <div className="flex items-center gap-2 hover:text-purple-400 transition-colors cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              Kerala, India
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(40px); }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(25px); }
        }
        .animate-float-reverse {
          animation: float-reverse 8s ease-in-out infinite reverse;
        }
      `}</style>
    </div>
  );
}

export default Contact;
