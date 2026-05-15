import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    icon: '🌤️',
    title: 'PCGrad-Weather-MTL-Model',
    badge: 'Multi-Task Learning',
    description: 'A Multi-Task Learning model utilizing PCGrad (Gradient Surgery) in TensorFlow to forecast Coastal AP weather, visualized with Streamlit.',
    tech: ['Python', 'TensorFlow', 'Streamlit', 'Machine Learning'],
    github: 'https://github.com/sarvea45/PCGrad-Weather-MTL-Model',
  },
  {
    icon: '🤖',
    title: 'Production-Ready LLM Fine-Tuning Pipeline',
    badge: 'Generative AI',
    description: 'An end-to-end pipeline for fine-tuning Large Language Models using LoRA (Low-Rank Adaptation) and the Hugging Face ecosystem.',
    tech: ['Python', 'Hugging Face', 'LoRA', 'LLMs'],
    github: 'https://github.com/sarvea45/Production-Ready-LLM-Fine-Tuning-Pipeline-with-LoRA-and-Hugging-Face',
  },
  {
    icon: '🔍',
    title: 'Self-Optimizing RAG Pipeline',
    badge: 'NLP & Search',
    description: 'An advanced Retrieval-Augmented Generation system engineered for legal document search, utilizing Cross-Encoder re-ranking for maximum context accuracy.',
    tech: ['Python', 'Vector Search', 'NLP', 'LLMs'],
    github: 'https://github.com/sarvea45/Self-Optimizing-RAG-Pipeline-with-Cross-Encoder-Re-ranking-for-Legal-Document-Search',
  },
  {
    icon: '🕸️',
    title: 'Real-time Network Anomaly Detection',
    badge: '98% Accuracy',
    description: 'Engineered a web application using Streamlit to detect network intrusions from the NSL-KDD dataset. Implemented a Random Forest model achieving 98% accuracy.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/sarvea45',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:w-2/3"
        >
          <div className="mb-2 text-blue-400 font-mono text-sm tracking-wider">03 &mdash; Projects</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">What I've Built</h2>
          <p className="text-slate-400 text-lg">
            A selection of projects that reflect my journey through machine learning, data engineering, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800 hover:border-blue-500/30 transition-all group flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-4xl">{project.icon}</div>
                  <span className="text-xs font-mono font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {project.badge}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="relative z-10 mt-auto pt-6 border-t border-slate-700/50">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-slate-300 bg-slate-700 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                >
                  <FaGithub size={16} />
                  View Repository
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-400 mb-4">Want to see more of my work?</p>
          <a 
            href="https://github.com/sarvea45" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-white hover:border-blue-500 hover:text-blue-400 transition-colors font-medium"
          >
            View All on GitHub <ArrowRight size={18} />
          </a>
          <p className="text-xs text-slate-400 uppercase tracking-[0.2em] mt-8 font-display">
            Build &middot; Innovate &middot; Deploy
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
