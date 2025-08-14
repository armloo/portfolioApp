
function Education() {
  return (
    <div className="w-full min-h-screen mx-auto mt-6 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gray-800/90 rounded-xl sm:rounded-2xl shadow-xl border border-gray-600 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-400 mb-4 sm:mb-6 text-center tracking-tight drop-shadow-lg animate-pulse">Education</h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 text-justify leading-relaxed">
        Aromal K K has completed a <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">Bachelor of Technology</span> at the College of Engineering Vadakara, building on a solid academic foundation from a <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">Diploma in Computer Science</span> at Kerala Government Polytechnic College. His education includes coursework in <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Data Structures</span>, <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Algorithms Analysis</span>, <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Artificial Intelligence</span>, <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Database Management</span>, and <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Systems Programming</span>.
      </p>

      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-gray-700 border border-gray-600 rounded-lg">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-xs sm:text-sm md:text-base">Course</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-xs sm:text-sm md:text-base hidden sm:table-cell">Institution</th>
              <th className="py-3 sm:py-4 px-3 sm:px-6 text-left font-semibold text-xs sm:text-sm md:text-base">Year</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-600 transition-colors duration-300 cursor-pointer transform hover:scale-102">
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-200 text-xs sm:text-sm md:text-base">
                <div>Bachelor of Technology in Computer Science</div>
                <div className="sm:hidden text-xs text-gray-400 mt-1">College of Engineering Vadakara</div>
              </td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-200 text-xs sm:text-sm md:text-base hidden sm:table-cell">College of Engineering Vadakara</td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-purple-400 font-semibold text-xs sm:text-sm md:text-base">2020 - Present</td>
            </tr>
            <tr className="hover:bg-gray-600 transition-colors duration-300 cursor-pointer transform hover:scale-102">
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-200 text-xs sm:text-sm md:text-base">
                <div>Diploma in Computer Science</div>
                <div className="sm:hidden text-xs text-gray-400 mt-1">Kerala Government Polytechnic College</div>
              </td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-gray-200 text-xs sm:text-sm md:text-base hidden sm:table-cell">Kerala Government Polytechnic College</td>
              <td className="py-3 sm:py-4 px-3 sm:px-6 text-purple-400 font-semibold text-xs sm:text-sm md:text-base">2017 - 2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Education;
