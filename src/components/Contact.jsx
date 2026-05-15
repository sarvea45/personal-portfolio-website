import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 text-blue-500 font-mono text-sm tracking-wider uppercase">05 &mdash; Get In Touch</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Let's Connect</h2>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            I'm currently seeking internship opportunities in AI/ML, Software Development, and Data Engineering. Whether you have a project, an opportunity, or just want to chat — my inbox is always open.
          </p>

          <a 
            href="mailto:sarvea22@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium text-lg transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1 mb-16"
          >
            <Mail size={20} />
            Say Hello
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <a 
            href="mailto:sarvea22@gmail.com"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all group"
          >
            <div className="p-3 bg-slate-700/50 rounded-full mb-4 text-slate-300 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
              <Mail size={24} />
            </div>
            <span className="text-sm font-medium text-slate-400 mb-1">Email</span>
            <span className="text-white font-medium text-sm sm:text-base">sarvea22@gmail.com</span>
          </a>

          <a 
            href="https://github.com/sarvea45"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all group"
          >
            <div className="p-3 bg-slate-700/50 rounded-full mb-4 text-slate-300 group-hover:text-white group-hover:bg-slate-600 transition-colors">
              <FaGithub size={24} />
            </div>
            <span className="text-sm font-medium text-slate-400 mb-1">GitHub</span>
            <span className="text-white font-medium text-sm sm:text-base break-all">sarvea45</span>
          </a>

          <a 
            href="tel:+917386790672"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all group"
          >
            <div className="p-3 bg-slate-700/50 rounded-full mb-4 text-slate-300 group-hover:text-green-400 group-hover:bg-green-400/10 transition-colors">
              <Phone size={24} />
            </div>
            <span className="text-sm font-medium text-slate-400 mb-1">Phone</span>
            <span className="text-white font-medium text-sm sm:text-base">+91 7386790672</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/sarveswara-rao-kosuri-3aa425299"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all group"
          >
            <div className="p-3 bg-slate-700/50 rounded-full mb-4 text-slate-300 group-hover:text-[#0A66C2] group-hover:bg-[#0A66C2]/10 transition-colors">
              <FaLinkedin size={24} />
            </div>
            <span className="text-sm font-medium text-slate-400 mb-1">LinkedIn</span>
            <span className="text-white font-medium text-sm sm:text-base break-all truncate w-full text-center">sarveswara-rao-kosuri</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 inline-flex items-center gap-2 text-sm text-green-400 bg-green-400/10 px-4 py-2 rounded-full border border-green-400/20"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for internships & freelance projects
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
