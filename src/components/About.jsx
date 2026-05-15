import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, BarChart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-2/3"
          >
            <div className="mb-2 text-blue-500 font-mono text-sm tracking-wider">01 &mdash; About Me</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Turning data into intelligence</h2>
            
            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
              I am a 3rd-year B.Tech student specializing in Artificial Intelligence and Machine Learning at Aditya University (2023-2027) , currently maintaining a 9.14 CGPA. I have gained hands-on industry experience through a Software Trainee Internship at Krify Software Technologies , and a Data Analysis Internship with APSSDC. My technical journey revolves around Python, data modeling, and containerization to solve real-world challenges.
            </p>

            {/* Experience Timeline */}
            <div className="mt-12">
              <h3 className="text-2xl font-display font-semibold text-white mb-8 flex items-center gap-3">
                <Briefcase size={24} className="text-blue-500" />
                Experience
              </h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                
                {/* Krify */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h4 className="font-bold text-white text-lg">Software Trainee Intern</h4>
                      <time className="text-sm font-mono text-blue-400 mt-1 sm:mt-0">May 2025 – June 2025</time>
                    </div>
                    <div className="text-sm text-slate-400 mb-4 font-medium">Krify Software Technologies Pvt. Ltd. &middot; Kakinada</div>
                    <ul className="text-slate-300 text-sm space-y-2 list-disc list-outside ml-4">
                      <li>Contributed to a live AI/ML software development project by implementing and testing key modules.</li>
                      <li>Applied data preprocessing, feature engineering, and model validation to real-world datasets.</li>
                      <li>Collaborated with developers in an agile environment, demonstrating strong problem-solving skills.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* APSSDC */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-800 group-[.is-active]:bg-blue-600 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h4 className="font-bold text-white text-lg">Data Analysis Intern</h4>
                      <time className="text-sm font-mono text-blue-400 mt-1 sm:mt-0">May 2025 – July 2025</time>
                    </div>
                    <div className="text-sm text-slate-400 mb-4 font-medium">APSSDC &middot; Remote</div>
                    <ul className="text-slate-300 text-sm space-y-2 list-disc list-outside ml-4">
                      <li>Completed an intensive two-month program focused on Python-based data analytics.</li>
                      <li>Developed scalable scripts for data cleaning, EDA, and statistical visualization.</li>
                    </ul>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Info Panels */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/3 flex flex-col gap-4"
          >
            {/* University */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700/50 transition-colors flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">University</h4>
                <p className="text-white font-medium">Aditya University</p>
              </div>
            </div>
            
            {/* CGPA */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700/50 transition-colors flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                <BarChart size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">CGPA</h4>
                <p className="text-white font-medium text-xl">9.14</p>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700/50 transition-colors flex items-start gap-4">
              <div className="p-3 bg-red-500/10 text-red-400 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Location</h4>
                <p className="text-white font-medium">Kakinada, Andhra Pradesh, India</p>
              </div>
            </div>

            {/* Status */}
            <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700 hover:bg-slate-700/50 transition-colors flex items-start gap-4">
              <div className="p-3 bg-green-500/10 text-green-400 rounded-lg relative">
                <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                <Briefcase size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-1">Status</h4>
                <p className="text-white font-medium">Seeking Internship</p>
              </div>
            </div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
