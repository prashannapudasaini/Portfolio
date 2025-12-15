import AnimatedSection from "./AnimatedSection";
import { FaEnvelope, FaGithub, FaPhone, FaMapMarkerAlt, FaLinkedin, FaDownload } from "react-icons/fa";

export default function Contact() {
  return (
    <AnimatedSection>
      <section id="contact">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Feel free to reach out for opportunities or collaboration</p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>I'm always open to discussing web development projects, internship opportunities, or just having a friendly chat.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:prashannap123@gmail.com">prashannap123@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+9779840461714">+977 9840461714</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaGithub />
                </div>
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/prashannapudasaini" target="_blank" rel="noopener noreferrer">
                    github.com/prashannapudasaini
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="download-cv">
              <a href="/Prashanna Pudasaini CV.pdf" download className="download-btn">
                <FaDownload /> Download My CV
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="What is this regarding?" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Hello Prashanna, I would like to talk about..."
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="availability">
          <h4>Availability Status</h4>
          <div className="status-indicator">
            <div className="status-dot available"></div>
            <span>Available for internships and freelance projects</span>
          </div>
          <p className="status-note">
            Currently open to web development opportunities, collaborative projects, 
            and learning experiences in the IT field.
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}