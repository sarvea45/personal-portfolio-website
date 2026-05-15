import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
      { name: 'C', icon: '⚙️' },
      { name: 'JavaScript/TypeScript', icon: '⚡' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'Streamlit', icon: '📊' },
      { name: 'FastAPI', icon: '⚡' },
    ],
  },
  {
    title: 'AI, ML & Data Science',
    skills: [
      { name: 'Scikit-learn', icon: '🔬' },
      { name: 'Pandas', icon: '🐼' },
      { name: 'NumPy', icon: '🔢' },
      { name: 'Matplotlib', icon: '📈' },
      { name: 'Google Gemini API', icon: '✨' },
      { name: 'NLP', icon: '💬' },
      { name: 'NVIDIA DLI Deep Learning', icon: '🧠' },
      { name: 'Generative AI', icon: '🤖' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Google Cloud', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Docker Compose', icon: '🐙' },
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐱' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'SQL', icon: '🗄️' },
      { name: 'DBMS Fundamentals', icon: '📚' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:w-2/3"
        >
          <div className="mb-2 text-blue-400 font-mono text-sm tracking-wider">02 &mdash; Technical Skills</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">My Tech Stack</h2>
          <p className="text-slate-400 text-lg">
            A curated set of tools and technologies I use to build intelligent systems and data-driven applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/50 transition-colors"
            >
              <h3 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center text-sm">
                  {idx + 1}
                </span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="flex items-center gap-2 bg-slate-700/40 border border-slate-600/50 px-3 py-2 rounded-lg text-sm text-slate-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all cursor-default"
                  >
                    <span>{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
