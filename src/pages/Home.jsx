import { motion } from 'framer-motion';
import { FileText, ChevronDown } from 'lucide-react';
import myImg from '../assets/kishore.jpg';
import myPdf from '../assets/KISHORE.pdf'

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 text-center lg:text-left pt-20 lg:pt-0"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
                Hi, I'm <span className="text-blue-600 inline-block hover:scale-110 transition-transform">Kishore</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                A passionate Full Stack Developer crafting innovative digital solutions with modern technologies
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.a
                  href={myPdf}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white px-8 py-4 bg-blue-600 font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center shadow-lg hover:shadow-xl">
                  <FileText className="mr-2" size={20} />
                  View Resume
                </motion.a>
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mt-12 lg:mt-0"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-100 rounded-full blur-2xl opacity-30"></div>
                <img
                  src={myImg}
                  alt="Profile"
                  className="relative rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover mx-auto shadow-2xl ring-4 ring-white hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToContent}
          >
            <ChevronDown 
              size={32} 
              className="text-blue-600 animate-bounce"
            />
          </motion.div>
        </div>
      </div>

      {/* Skills Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Development</h3>
              <p className="text-gray-600">Crafting beautiful, responsive user interfaces with modern frameworks and tools.</p>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Java Development</h3>
              <p className="text-gray-600">Building robust, scalable applications with Java, leveraging modern frameworks and best practices.</p>
            </motion.div>

            {/* DevOps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Problem Solving</h3>
              <p className="text-gray-600">Tackling complex challenges with logical thinking, algorithms, and efficient coding strategies.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;