import React from 'react';

import About from './components/About/About'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Skill from './components/Skills/Skill';
import Project from './components/Projects/Project';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience.jsx'
import { ToastContainer } from 'react-toastify';
const App = () => {
  return (
    <div className='layout bg-[#050414] '>

      <Navbar />
      <section >

        <About />
      </section>
      <section >

        <Skill />
      </section>
      <section >

        <Project />
      </section>

      <section className='py-5'>
        <Experience />
      </section>
      <section className='py-5'>
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>


      <ToastContainer position="top-center" />

    </div>
  );
};

export default App;
