import React from 'react';

import GraphicDesign from '/images/graphic-design.png'
import VideoEditing from '/images/Video_editing.avif'

import './Projects.css';

export default function Projects() {
  const projectList = [
    {
      title: "Responsive Portfolio Website",
      description: "An interactive and responsive developer portfolio featuring glowing glassmorphism cards and custom animations.",
      image: "/icons/portfolio-screenshot.png", 
      tags: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Textile Shopping Web App",
      description: "A full-featured e-commerce platform designed for the textile industry with dynamic product filtering and cart features.",
      image: "/icons/shop-screenshot.png", 
      tags: ["Python", "Django", "HTML", "CSS", "JavaScript", "Jquery"],
    },
    {
      title: "Graphic Design",
      description: "Eye-catching, high CTR custom thumbnail designs created using Photoshop for various tech and gaming channels.",
      image: GraphicDesign, 
      tags: ["Photoshop", "Illustrator", "UI/UX", "Branding"],
    },
    {
      title: "Video Editing",
      description: "Professional video edits, reels, and motion graphics intros crafted using Premiere Pro and After Effects.",
      image: VideoEditing, 
      tags: ["Premiere Pro", "After Effects", "Color Grading"],
    }
  ];

  return (
    <section id="projects" className="projects-section">
      {/* Background Glows */}
      <div className="proj-unique-glow glow-one"></div>
      <div className="proj-unique-glow glow-two"></div>

      <div className="projects-card">
        
        {/* Floating Badges */}
        <div className="proj-floating-badge proj-badge-1"><span>🚀 Realtime Projects</span></div>
        <div className="proj-floating-badge proj-badge-2"><span>🎨 Creative Designs</span></div>

        {/* Header */}
        <div className="projects-heading-container">
          <h2 className="projects-main-title">P R O J E C T S</h2>
          <p className="projects-subtitle">A Goal Without a Plan is Just a Wish</p>
        </div>

        {/* Projects Grid Container */}
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div key={index} className="project-box">
              {/* Project Preview Image Box */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" 
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80'; }} 
                />
              </div>

              {/* Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                
                {/* Tech & Skill Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="proj-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="project-box realtime-extra-box">
            <div className="realtime-counter-content">
              <span className="realtime-big-number">2+</span>
              <h3 className="project-title">Realtime Project</h3>
              <p className="project-desc">More industrial production apps and live web implementations delivered successfully.</p>
              <div className="project-tags">
                <span className="proj-tag">Full Stack</span>
                <span className="proj-tag">Live Deployment</span>
              </div>
            </div>
          </div>
        </div>

        

        {/* Loading Footer */}
        <div className="projects-loading-footer">
          <span className="loading-text">More Projects</span>
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

      </div>
    </section>
  );
}