import AnimatedSection from "./AnimatedSection";
import { FaCode, FaDatabase, FaTools, FaUsers } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      icon: <FaCode />,
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React.js", level: 75 },
        { name: "Next.js", level: 75 },
        { name: "Node.js", level: 70 },
      ]
    },
    {
      icon: <FaDatabase />,
      title: "Programming Languages",
      skills: [
        { name: "Java", level: 80 },
        { name: "Python", level: 70 },
        { name: "JavaScript", level: 80 },
      ]
    },
    {
      icon: <FaTools />,
      title: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Web Design", level: 75 },
        { name: "Blogging", level: 70 },
      ]
    },
    {
      icon: <FaUsers />,
      title: "Soft Skills",
      skills: [
        { name: "Team Work", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Public Interaction", level: 80 },
        { name: "Leadership", level: 75 },
        { name: "Problem Solving", level: 80 },
      ]
    }
  ];

  return (
    <AnimatedSection>
      <section id="skills">
        <div className="section-header">
          <h2>My Skills</h2>
          <p className="section-subtitle">Technical abilities and personal strengths</p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-level" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="interests-section">
          <h3>Training & Interests</h3>
          <div className="interests-grid">
            <div className="interest-category">
              <h4>Technical Training</h4>
              <div className="interest-tags">
                <span className="interest-tag">Web Designing & Developing</span>
                <span className="interest-tag">Blogging</span>
                <span className="interest-tag">Python Programming</span>
                <span className="interest-tag">Java Programming</span>
              </div>
            </div>
            <div className="interest-category">
              <h4>Sports & Physical</h4>
              <div className="interest-tags">
                <span className="interest-tag">Taekwondo (2nd Dan Black Belt)</span>
                <span className="interest-tag">Football Training</span>
                <span className="interest-tag">ANFA 6-month Training</span>
              </div>
            </div>
            <div className="interest-category">
              <h4>Personal Interests</h4>
              <div className="interest-tags">
                <span className="interest-tag">Digital Marketing</span>
                <span className="interest-tag">Coding</span>
                <span className="interest-tag">Football</span>
                <span className="interest-tag">Travel</span>
                <span className="interest-tag">Photography</span>
                <span className="interest-tag">Interacting with New People</span>
              </div>
            </div>
          </div>
        </div>

        <div className="languages-section">
          <h3>Languages</h3>
          <div className="languages">
            <div className="language-item">
              <span className="language-name">Nepali</span>
              <span className="language-level">Native</span>
            </div>
            <div className="language-item">
              <span className="language-name">English</span>
              <span className="language-level">Professional</span>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}