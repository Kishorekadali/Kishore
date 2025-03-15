import { motion } from 'framer-motion';
import { FileText, ChevronDown } from 'lucide-react';

import kishoreImage from "../assets/kishore.jpg";
import kishorePDF from "../assets/KISHORE.pdf";

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="hero-section">
        <div className="hero-background"></div>
        
        <div className="hero-content">
          <div className="hero-flex">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-text"
            >
              <h1 className="hero-title">
                Hi, I'm <span className="hero-name">Kishore</span>
              </h1>
              <p className="hero-description">
                A passionate Full Stack Developer crafting innovative digital solutions with modern technologies
              </p>
              <div className="hero-buttons">
                <motion.a
                  href={kishorePDF}
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="primary-button"
                >
                  <FileText size={20} style={{ marginRight: '0.5rem' }} />
                  View Resume
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="secondary-button"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-image"
            >
              <div className="image-blur"></div>
              <img src={kishoreImage} alt="Kishore's Profile" className="profile-image" />

            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="scroll-indicator"
            onClick={scrollToContent}
          >
            <ChevronDown size={32} className="animate-bounce" />
          </motion.div>
        </div>
      </div>

      <section className="skills-preview">
        <div className="skills-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="skill-card frontend"
          >
            <h3 className="skill-title">Frontend Development</h3>
            <p className="skill-description">
              Crafting beautiful, responsive user interfaces with modern frameworks and tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="skill-card backend"
          >
            <h3 className="skill-title">JAVA Programming</h3>
            <p className="skill-description">
            A high-level, object-oriented programming language known for its platform independence, robustness, and extensive libraries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="skill-card devops"
          >
            <h3 className="skill-title">Programming Logic</h3>
            <p className="skill-description">
            The fundamental principles and structured approach used to design and implement algorithms for problem-solving in programming.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;