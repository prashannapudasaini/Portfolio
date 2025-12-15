import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { FaCertificate, FaCalendarAlt, FaBuilding } from "react-icons/fa";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "Node.js & Next.js Internship",
      issuer: "Varda Creatives",
      date: "April 16, 2025",
      duration: "3 Months",
      description: "Successfully completed a three-month internship focusing on responsive web layout design and performance optimization using Node.js and Next.js.",
      skills: ["Node.js", "Next.js", "Web Development", "Performance Optimization"],
      image: "/Prashanna.png"
    }
  ];

  // Additional training/certificates from CV
  const trainings = [
    "Web Designing & Developing Training",
    "Python Programming",
    "Java Programming",
    "Blogging",
    "ANFA Sports Training (6 months)",
    "Taekwondo 2nd Dan Black Belt Certification"
  ];

  return (
    <AnimatedSection>
      <section id="certificates">
        <div className="section-header">
          <h2>Certifications & Training</h2>
          <p className="section-subtitle">Formal recognition of my skills and training</p>
        </div>

        <div className="certificates-container">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <Image
                  src={cert.image}
                  width={400}
                  height={560}
                  alt={cert.title}
                  className="certificate-img"
                />
              </div>
              
              <div className="certificate-details">
                <div className="certificate-badge">
                  <FaCertificate />
                  <span>Certificate of Internship</span>
                </div>
                
                <h3>{cert.title}</h3>
                
                <div className="certificate-info">
                  <div className="info-item">
                    <FaBuilding />
                    <span><strong>Issued by:</strong> {cert.issuer}</span>
                  </div>
                  <div className="info-item">
                    <FaCalendarAlt />
                    <span><strong>Date:</strong> {cert.date}</span>
                  </div>
                  <div className="info-item">
                    <span><strong>Duration:</strong> {cert.duration}</span>
                  </div>
                </div>
                
                <p className="certificate-description">{cert.description}</p>
                
                <div className="certificate-skills">
                  <h4>Skills Gained:</h4>
                  <div className="skill-tags">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="trainings-section">
          <h3>Additional Training & Courses</h3>
          <div className="trainings-grid">
            {trainings.map((training, index) => (
              <div key={index} className="training-item">
                <div className="training-icon">✓</div>
                <span>{training}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="certificate-note">
          <p>
            <strong>Note:</strong> My certifications also include various achievements in Taekwondo 
            including Gold Medal in International Competition and Referee certification for 
            15th International Open Taekwondo Championship.
          </p>
        </div>
      </section>
    </AnimatedSection>
  );
}