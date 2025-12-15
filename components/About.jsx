import AnimatedSection from "./AnimatedSection";
import { FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa";

export default function About() {
  return (
    <AnimatedSection>
      <section id="about">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-content">
            <div className="about-intro">
              <h3>IT Student & Aspiring Web Developer</h3>
              <p>
                I am an organized, efficient, and hardworking <strong>Bachelor of Information Technology</strong> student at 
                <strong> Himalayan Whitehouse International College (Purbanchal University)</strong>.
                My goal is to become a successful web developer by continuously learning and applying new technologies.
              </p>
              <p>
                I am a good listener and learner, able to communicate effectively both in teams and individually.
              </p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <div className="about-icon">
                  <FaGraduationCap />
                </div>
                <h4>Education</h4>
                <p>
                  Currently pursuing <strong>Bachelor of Information Technology</strong> 
                  with focus on software development and web technologies.
                </p>
                <ul>
                  <li>Himalayan Whitehouse International College</li>
                  <li>Purbanchal University (2022-Ongoing)</li>
                  <li>Focus: Web Development & IT Fundamentals</li>
                </ul>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <FaBriefcase />
                </div>
                <h4>Professional Experience</h4>
                <p>
                  Completed a <strong>3-month intensive internship</strong> at 
                  <strong> Varda Creatives</strong>, gaining practical experience in:
                </p>
                <ul>
                  <li>Node.js backend development</li>
                  <li>Next.js framework implementation</li>
                  <li>Responsive web design</li>
                  <li>Web performance optimization</li>
                </ul>
              </div>

              <div className="about-card">
                <div className="about-icon">
                  <FaTrophy />
                </div>
                <h4>Skills & Abilities</h4>
                <p>
                  Beyond technical skills, I possess:
                </p>
                <ul>
                  <li><strong>Team Leadership</strong> from sports training</li>
                  <li><strong>Communication Skills</strong> through public interaction</li>
                  <li><strong>Discipline</strong> from Taekwondo training</li>
                  <li><strong>Adaptability</strong> to new ideas and technologies</li>
                </ul>
              </div>
            </div>

            <div className="personal-quote">
              <blockquote>
                "I am organized, efficient and hard working, willing to discover and accept new ideas which can be put into practice effectively."
              </blockquote>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Months Internship</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Skills</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Languages</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}