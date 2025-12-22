"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="hero-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h1>Hi, I'm Prashanna Pudasaini 👋</h1>
        
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          IT Student & Junior Web Developer
        </motion.h3>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="hero-description"
        >
          Aspiring web developer with hands-on experience in <strong>React, Next.js & Node.js</strong>. 
          Currently pursuing Bachelor of IT while building practical projects and enhancing my skills 
          in modern web technologies.
        </motion.p>

        <motion.div
          className="hero-highlights"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="highlight">
            <span className="highlight-number">3+</span>
            <span className="highlight-text">Projects Completed</span>
          </div>
          <div className="highlight">
            <span className="highlight-number">3</span>
            <span className="highlight-text">Months Internship</span>
          </div>
          <div className="highlight">
            <span className="highlight-number">2nd Dan</span>
            <span className="highlight-text">Taekwondo Black Belt</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          className="hero-buttons"
        >
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn outline">Get In Touch</a>
          <a href="/prashannapudasainiCV.pdf" target = "_blank" download className="btn secondary">Download CV</a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero-image"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >

        <div className="image-placeholder">
          <img src="MyProfile.jpg" alt="My Profile" />
        </div>
      </motion.div>
    </motion.section>
  );
}