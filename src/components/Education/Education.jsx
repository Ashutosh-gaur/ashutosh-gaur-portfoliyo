import React, { useState } from "react";
import { education } from "../../content";

function EducationAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (


    <section id="education" className="  text-white py-16 w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 2xl:px-64">


      <div className="py-24 px-4 md:px-8 min-h-screen  bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl  ">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded"></div>
          <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
            My education has been a journey of learning and development. Here are the details of my academic background:
          </p>
        </div>
        <div className="max-w-2xl mx-auto space-y-10">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className={`
              transition-all  duration-300 ease-linear rounded-3xl shadow-xl 
              hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.04] 
              ${openIndex === idx
                  ? "border-2 border-purple-500 bg-gradient-to-r from-purple-800/30 via-indigo-900/80 to-gray-900/80 backdrop-blur-xl"
                  : "border border-white/10 bg-gradient-to-r from-purple-700/30 via-indigo-900/60 to-gray-900/60 backdrop-blur-2xl"
                }
              relative
            `}
              style={{
                boxShadow: openIndex === idx
                  ? "0 8px 32px 4px rgba(130,69,236,0.22)"
                  : "0 4px 16px 0 rgba(130,69,236,0.12)"
              }}
            >
              <button
                className="w-full flex justify-between items-center px-8 py-6 focus:outline-none"
                onClick={() => handleToggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <div className="flex items-center gap-4">
                  {/* School Icon or Graduation Cap */}
                  <span className="w-12 h-12 rounded-full bg-white border-4 border-purple-400 shadow-lg flex items-center justify-center overflow-hidden">
                    {edu.img
                      ? <img src={edu.img} alt={edu.school} className="w-10 h-10 object-contain" />
                      : (
                        <svg className="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2L2 6.5L10 11l8-4.5L10 2zm0 9v7m0 0H8v-2m2 2h2v-2"></path>
                        </svg>
                      )
                    }
                  </span>
                  <div className="flex flex-col items-start">
                    <span className="font-bold text-xl text-white drop-shadow">{edu.degree}</span>
                    <span className="text-purple-200 text-lg font-semibold">{edu.school}</span>
                    <span className="text-gray-400 text-sm mt-1">{edu.date}</span>
                  </div>
                </div>
                <svg
                  className={`w-8 h-8 text-purple-400 transition-transform duration-300 ${openIndex === idx ? "rotate-180 scale-125" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-7 animate-fade-in">
                  <div className="flex flex-col items-center my-4">
                    <p className="text-purple-200 font-semibold">{edu.grade}</p>
                  </div>
                  <p className="text-gray-200 text-center text-md mb-4">{edu.desc}</p>
                </div>
              )}
              {/* Decorative glow border */}
              <div className={`absolute top-0 left-0 w-full h-full z-0 pointer-events-none transition ${openIndex === idx ? "opacity-100" : "opacity-0"}`}>
                <div className="w-full h-full rounded-3xl border-2 border-purple-400/50 blur-[3px]"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EducationAccordion;