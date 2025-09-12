import React from 'react';
import { useRef } from 'react';

import emailjs from "@emailjs/browser";


function Contact() {
  
  const form = useRef();
  const menuitems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];
  const handleMenuItemclick = (id) => {

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })

    }
  }

  const sendEmail = (e) => {
   

     e.preventDefault(); 
      const currentTime = new Date().toLocaleString();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,   
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY } 
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("✅ Message sent successfully!");
          e.target.reset(); 
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("❌ Failed to send message. Try again!");
        }
      );
  };
  return (
    <section
      id="contact"
      className=" text-white py-24 px-6 md:px-16 lg:px-32 text-center"
    >
      {/* Heading */}
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold uppercase underline underline-offset-8 decoration-violet-800">
          Contact
        </h1>
        <p className="text-lg mt-4 opacity-70">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
        <h2 className="text-2xl font-semibold text-purple-400 mt-8">Connect With Me</h2>
      </div>

      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-[#0b0b16] border border-white rounded-xl shadow-2xl p-8">
        <form className="grid grid-cols-1 gap-6" ref={form} onSubmit={sendEmail} >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="bg-transparent border-b border-white/20 py-3 px-4 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="bg-transparent border-b border-white/20 py-3 px-4 focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="title"
            placeholder="Subject"
            className="bg-transparent border-b border-white/20 py-3 px-4 focus:outline-none focus:border-purple-500"
          />
          <textarea
            placeholder="Message"
            rows="5"
            name="message"
            className="bg-transparent border-b border-white/20 py-3 px-4 focus:outline-none focus:border-purple-500"
          ></textarea>

           <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <button
            type="submit"
            className="mt-4 bg-[#8245ec] hover:bg-purple-700 transition text-white font-bold py-3 w-full 
            rounded-xl mx-auto duration-300 ease-linear"
          >
            Send
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-16  ">
        <h1 className='text-2xl font-bold text-fuchsia-600 py-6'>Ashutosh Gaur</h1>
        <div className='flex justify-center '>
          <ul className='hidden md:flex gap-6 text-white font-bold'>
            {menuitems.map(item => (
              <li key={item.id} className="cursor-pointer hover:text-[#8245ec] transition duration-200">
                <a onClick={() => handleMenuItemclick(item.id)} >{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className='text-sm mt-10 opacity-50'>© 2025 Ashutosh Gaur. All rights reserved</p>
      </footer>
    </section>
  );
}

export default Contact;
