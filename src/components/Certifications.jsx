import { motion } from 'framer-motion';

const certs = [
  {
    title: 'Cloud Engineer Track',
    issuer: 'Google Cloud Career Launchpad',
    date: '2026',
    icon: '🏆',
  },
  {
    title: 'Fundamentals of Deep Learning',
    issuer: 'NVIDIA DLI',
    date: '2026',
    icon: '🏆',
  },
  {
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL Elite',
    date: 'Score: 87%',
    icon: '🏆',
  },
  {
    title: 'Fundamentals of AI',
    issuer: 'NPTEL Elite',
    date: 'Score: 75%, Top 5% Topper',
    icon: '🏆',
  },
  {
    title: 'Introduction to Front-End Development',
    issuer: 'Meta (Coursera)',
    date: '2025',
    icon: '🏆',
  },
  {
    title: 'Deep Learning, ReactJS, Data Science, NLP',
    issuer: 'Infosys Springboard',
    date: '2025',
    icon: '🏆',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-900 border-t border-slate-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:w-2/3"
        >
          <div className="mb-2 text-blue-400 font-mono text-sm tracking-wider">04 &mdash; Certifications</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Continuous Learning</h2>
          <p className="text-slate-400 text-lg">
            A commitment to staying at the forefront of AI, Cloud, and Software Engineering.
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative w-full flex overflow-x-hidden pt-4 pb-12 group">
          {/* Gradients for smooth fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>

          <motion.div
            className="flex whitespace-nowrap space-x-6 px-4"
            animate={{ x: [0, -1000] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {/* Double the array for seamless loop */}
            {[...certs, ...certs].map((cert, idx) => (
              <div 
                key={idx}
                className="inline-flex flex-col bg-slate-800/60 border border-slate-700/50 p-6 rounded-2xl w-[300px] shrink-0 hover:border-blue-500/50 transition-colors"
              >
                <div className="text-3xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 whitespace-normal leading-tight h-12 line-clamp-2">
                  {cert.title}
                </h3>
                <div className="mt-auto">
                  <p className="text-sm text-slate-400 font-medium whitespace-normal">{cert.issuer}</p>
                  <p className="text-xs font-mono text-blue-400 mt-2">{cert.date}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
