import React from 'react'
import { experiences } from '../../content'
import { motion } from 'framer-motion'

function Experience() {
  return (

    <section id="experience" className="  text-white py-16 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-64">


     <div className=" flex flex-col items-center justify-center text-white px-6 py-10 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300"
      >
         My Experience
      </motion.h2>

      {experiences.map((exp) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gray-800 border border-gray-700 rounded-2xl shadow-lg p-6 max-w-3xl w-full hover:shadow-blue-500/40 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-400">{exp.title}</h3>
          <p className="text-gray-300">{exp.company}</p>
          <p className="text-sm text-gray-400 mb-3">{exp.duration}</p>
          <p className="text-sm text-gray-400 mb-3">{exp.location}</p>
          <p className="text-gray-200 mb-4 leading-relaxed">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.technologies.map((t, i) => (
              <span
                key={i}
                className="bg-blue-600/20 border border-blue-500 text-blue-300 px-3 py-1 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
    </section>
  )
}

export default Experience
