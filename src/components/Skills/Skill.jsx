import React from 'react';
import { skillsData } from '../../content';
import Tilt from 'react-parallax-tilt';

function Skill() {
  return (
    <section id="skills" className="  clip-polygon skills text-white py-16 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-64  ">
      
     
      <div className="text-center">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl underline decoration-violet-800 underline-offset-8">
          Skills
        </h1>
        <p className="py-6 text-lg sm:text-lg opacity-70 font-bold max-w-3xl mx-auto">
          A curated showcase of my technical skills and hands-on expertise,
          developed through diverse real-world projects and collaborative experiences.
        </p>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {skillsData.map((category) => (
          <div key={category.title} className=" border border-white rounded-2xl p-4 bg-gray-900 shadow-lg hover:shadow-violet-800 transition duration-300">
            <h1 className="text-center pb-4 font-bold text-2xl sm:text-3xl text-gray-400">{category.title}</h1>

            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 px-4 pb-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 border border-gray-500 rounded-xl py-2 px-3 hover:bg-[#2e2b3a] transition duration-200 ease-linear"
                  >
                    <img src={skill.logo} alt={skill.name.toLowerCase()} className="w-6 sm:w-8" />
                    <span className="text-xs sm:text-sm text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
