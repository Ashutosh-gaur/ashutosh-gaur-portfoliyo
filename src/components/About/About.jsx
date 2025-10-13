import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

import Ashu from '../../assets/Ashu.jpg';
import BlurBlob from '../../BlurBlob';

function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMobile(window.innerWidth <= 768);
     
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <section  id="about" className="about mx-auto  text-white relative overflow-hidden ">
      <BlurBlob />

      <div className="flex  flex-col-reverse justify-center md:flex-row items-center  gap-12 px-20 md:px-24 py-52">

        {/* Text Content */}
        <div className="max-w-2xl space-y-6 text-center md:text-left">
          <div className="text-4xl md:text-5xl font-extrabold">
            <h1>
              Hi, I Am <br />
              <span className="block my-3 text-white">Ashutosh Gaur</span>
              <span className="text-2xl md:text-3xl font-medium">
                I am a{' '}
                <span className="text-[#8245ec]">
                  <Typewriter
                    words={['FullStack Developer', 'Coder']}
                    loop
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </span>
            </h1>
          </div>

          <p className="text-gray-50 text-lg md:text-xl leading-relaxed text-justify  ">
            I'm a Full-Stack Java Developer passionate about crafting scalable, efficient applications using tools like Spring Boot, Hibernate, React.js, and RESTful APIs. I believe in clean code, pixel-perfect design, and continuous learning in real-world development environments.
          </p>

          <div  >
            <a 
              href="/CV/Ashutosh-gaur-resume.pdf"
              className="downloadCv-btn inline-block bg-[#8245ec] hover:scale-105 transition-transform duration-300 text-white font-extrabold py-3 px-8 rounded-3xl uppercase"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Profile Image on the Right */}

        <div>
          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
          >
            <img
              src={Ashu}
              alt="Ashutosh Gaur"
              className="rounded-full   min-w-[270px] min-h-[270px]"
            />
          </Tilt>

        </div>
      </div>
    </section>
  );
}

export default About;
