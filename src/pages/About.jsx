function About() {
  return (
    <div className="w-full min-h-screen mx-auto mt-6 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gray-800/90 rounded-xl sm:rounded-2xl shadow-xl border border-gray-600 backdrop-blur-sm transform hover:scale-105 transition-all duration-500">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-purple-400 mb-4 sm:mb-6 text-center tracking-tight drop-shadow-lg animate-pulse">About</h1>
      
      <div className="space-y-4 sm:space-y-6">
        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
          Aromal K K is a dedicated and skilled Computer Science student currently pursuing a Bachelor of Technology at the College of Engineering Vadakara, with a solid academic foundation built on a Diploma in Computer Science from Kerala Government Polytechnic College.
        </p>
        
        <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-102">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3">Academic Excellence</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            His academic journey covers a wide range of relevant coursework, including <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">Data Structures</span>, <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">Algorithms Analysis</span>, <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">Artificial Intelligence</span>, <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">Database Management</span>, and <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">Systems Programming</span>, reflecting a strong technical base.
          </p>
        </div>
        
        <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-102">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3">Professional Experience</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Professionally, Aromal has gained valuable hands-on experience as an <span className="font-semibold text-purple-400 hover:text-purple-300 transition-colors cursor-default">App Developer Intern</span> at Arion Infotech, where he contributed to developing a mobile application using <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Flutter</span> and <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Dart</span>, integrated with <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Google Firebase</span> for cross-platform data management, and utilized <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Android Studio</span> for cross-device visualization.
          </p>
        </div>
        
        <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-102">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3">Key Projects</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            His project work, notably the <span className="italic text-purple-400 hover:text-purple-300 transition-colors cursor-default font-semibold">"Routes Mobile App"</span>, showcases his ability to design and implement practical solutions such as a job search platform that benefits both employers and job seekers through an algorithm-driven matching system.
          </p>
        </div>
        
        <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-102">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3">Technical Skills</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            Aromal has also enriched his skill set through workshops, such as completing a <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Python for Data Science</span> course, and demonstrates proficiency in multiple programming languages like <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Python</span>, <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Java</span>, and <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">C</span>, along with tools and frameworks such as <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">VS Code</span>, <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Android Studio</span>, <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Figma</span>, <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">Linux</span>, and <span className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-default">GitHub</span>.
          </p>
        </div>
        
        <div className="bg-gray-700/50 p-4 sm:p-6 rounded-lg hover:bg-gray-700/70 transition-all duration-300 transform hover:scale-102">
          <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-3">Leadership & Community</h3>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
            His leadership and extracurricular involvement are equally commendable—he has served as a designer for a national-level tech fest, leading a team to create UI designs, posters, and certificates, and has held the role of Association Secretary at CESA, managing executive boards and leading community-focused initiatives.
          </p>
        </div>
        
        <div className="text-center p-4 sm:p-6 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-500/30">
          <p className="text-sm sm:text-base md:text-lg text-purple-300 leading-relaxed font-medium">
            <span className="font-bold text-purple-400">Overall</span>, Aromal blends technical expertise, project experience, leadership skills, and creative design ability, making him a versatile and future-ready professional.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;