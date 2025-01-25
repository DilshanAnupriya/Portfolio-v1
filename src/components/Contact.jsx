import React, { useRef, useState } from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Make sure to install this library

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handles changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Example using EmailJS
    emailjs
      .send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you for reaching out! Your message has been sent.');
          setForm({ name: '', email: '', message: '' });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert('Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} pb-2`}>Contact Me</h2>
      </motion.div>

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        
        <img
          src="src/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-96 "
        />
        <div className="absolute w-1/2 h-[80%]">
          <h3 className="text-[27px] font-bold">Let's Talk</h3>
          <p
            className='text-white text-[18px]'
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In soluta
            voluptates, dicta blanditiis ipsa fugit enim odio aperiam di
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="text-lg text-white-600">Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 focus:outline-none"
                required
                placeholder="Enter your name"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-white-600">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 focus:outline-none"
                required
                placeholder="@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-white-600">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full bg-black-300 px-5 py-2 h-35 rounded-lg placeholder:text-white-500 text-lg text-white-800 focus:outline-none"
                required
                placeholder="Hi, I wanna give you a job......"
              />
            </label>
            <button
              className="bg-[#915eff] px-5 py-2 min-h-12 rounded-lg flex justify-center items-center text-lg text-white gap-3 shadow-card"
              type="submit"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
              <img
                src="src/assets/arrow-up.png"
                className="w-2.5 h-2.5 object-contain invert brightness-0"
                alt="arrow-up"
              />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact');
