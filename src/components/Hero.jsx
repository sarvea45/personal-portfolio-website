import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: backgroundY }}
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
      >
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 z-10 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          style={{ y: textY, opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex items-center space-x-2 mb-4">
            <span className="h-[2px] w-8 bg-blue-500"></span>
            <p className="text-blue-400 font-medium tracking-wider uppercase text-sm">
              Hello, I'm
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-4 text-white">
            KOSURI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">SARVESWARA RAO</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
            AI/ML Developer & Cloud Engineer
          </h2>
          
          <p className="text-base text-slate-400 mb-8 max-w-lg leading-relaxed">
            Motivated B.Tech student specializing in Artificial Intelligence and Machine Learning, bridging the gap between intelligent models, data analytics, and robust containerized deployment.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-50}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
            >
              View My Work
            </Link>
            
            <a
              href="https://github.com/sarvea45"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-2 group"
            >
              <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium pr-2">GitHub Profile</span>
            </a>
          </div>
        </motion.div>

        {/* Info Cards Matrix */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid grid-cols-2 gap-4 relative"
        >
          {/* Decorative dashed lines could go here */}
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex flex-col justify-center transform hover:-translate-y-1 transition-transform">
            <span className="text-4xl font-display font-bold text-white mb-1">9.14</span>
            <span className="text-sm text-slate-400 font-medium">CGPA</span>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex flex-col justify-center transform hover:-translate-y-1 transition-transform">
            <span className="text-4xl font-display font-bold text-white mb-1">3+</span>
            <span className="text-sm text-slate-400 font-medium">Projects</span>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl flex flex-col justify-center transform hover:-translate-y-1 transition-transform">
            <span className="text-4xl font-display font-bold text-white mb-1">6+</span>
            <span className="text-sm text-slate-400 font-medium">Certifications</span>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-slate-800/40 border border-blue-500/20 p-6 rounded-2xl flex flex-col justify-center items-center transform hover:-translate-y-1 transition-transform text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-blue-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
             <span className="relative z-10 text-xl font-bold text-blue-300 mb-2">AI/ML</span>
             <span className="relative z-10 text-xs text-blue-200/80 uppercase tracking-wider flex items-center gap-1">
               <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
               Open to Internships
             </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
      >
        <span className="text-xs text-slate-400 uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-8 h-12 rounded-full border-2 border-slate-700 flex justify-center pt-2 cursor-pointer"
        >
          <div className="w-1 h-2 bg-blue-500 rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
