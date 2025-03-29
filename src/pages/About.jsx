import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Engineering",
      school: "Jawaharlal Nehru Technological University - Gurajada Vizianagaram",
      year: "2022-2026",
      description: "Information Technology",
    },
    {
      degree: "Intermediate",
      school: "Narayana Junior College, Razole",
      year: "2020-2022",
      description: "MPC",
    },
    {
      degree: "Schooling",
      school: "Oxford High School",
      year: "2019-2020",
      description: "Corona Batch",
    },
  ];

  const experience = [
    {
      role: "Web Master",
      company: "Association of Computing Machinery - Student Chapter Of JNTU-Gv",
      year: "2022-Present",
      description: "Managing the Events in the College",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="prose max-w-none mb-12">
            <p className="text-lg text-gray-600">
              I am a student at JAWAHARLAL NEHRU TECHNOLOGICAL UNIVERSITY GURAJADA VIZIANAGARAM currently pursuing my Information Technology Engineering. My goal is to excel in the field of web development. I specialize in front-end development. My goal is to create elegant, efficient, and user-friendly solutions that solve real-world problems.
            </p>
          </div>

          <section className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-blue-600">{edu.school}</p>
                  <p className="text-gray-500">{edu.year}</p>
                  <p className="text-gray-600 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="w-6 h-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.2 }} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600">{exp.company}</p>
                  <p className="text-gray-500">{exp.year}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Details Table</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-6 text-left">Category</th>
                    <th className="py-3 px-6 text-left">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-6">Name</td>
                    <td className="py-3 px-6">Your Name</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-6">University</td>
                    <td className="py-3 px-6">Jawaharlal Nehru Technological University - Gurajada Vizianagaram</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-6">Specialization</td>
                    <td className="py-3 px-6">Information Technology</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-6">Experience</td>
                    <td className="py-3 px-6">Web Master at ACM-Student Chapter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
