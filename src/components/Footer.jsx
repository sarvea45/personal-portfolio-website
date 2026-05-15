import { Link } from 'react-scroll';
import { ArrowUp, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold text-white tracking-wider">KSR<span className="text-blue-500">.</span></span>
        </div>

        <p className="text-slate-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Kosuri Sarveswara Rao. Built with React & Framer Motion.
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/sarvea45" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/sarveswara-rao-kosuri-3aa425299" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:sarvea22@gmail.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
          
          <div className="w-px h-6 bg-slate-800 mx-2"></div>
          
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
