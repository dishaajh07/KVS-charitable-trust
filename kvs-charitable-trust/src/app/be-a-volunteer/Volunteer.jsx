import React, { useState } from 'react';
import styles from './Volunteer.module.css';

function Volunteer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interests: '',
    availability: '',
    experience: '',
    motivation: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={styles.volunteerPage}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Be a Volunteer</h1>
          <p className={styles.subtitle}>
            Join our community of changemakers and help us create lasting impact in the 
            lives of those who need it most.
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className={styles.whyVolunteer}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Volunteer With Us?</h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>💝</div>
              <h3 className={styles.reasonTitle}>Make Real Impact</h3>
              <p className={styles.reasonText}>
                Directly contribute to improving lives and creating positive change in communities.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🌱</div>
              <h3 className={styles.reasonTitle}>Personal Growth</h3>
              <p className={styles.reasonText}>
                Develop new skills, gain experience, and discover your potential for creating change.
              </p>
            </div>
            <div className={styles.reasonCard}>
              <div className={styles.reasonIcon}>🤝</div>
              <h3 className={styles.reasonTitle}>Build Community</h3>
              <p className={styles.reasonText}>
                Connect with like-minded individuals and become part of our caring community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className={styles.opportunities}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Volunteer Opportunities</h2>
          <div className={styles.opportunitiesGrid}>
            <div className={styles.opportunityCard}>
              <div className={styles.opportunityIcon}>📚</div>
              <h3 className={styles.opportunityTitle}>Education Support</h3>
              <p className={styles.opportunityText}>
                Help with teaching, mentoring, and educational activities for children.
              </p>
              <div className={styles.timeCommitment}>2-4 hours/week</div>
            </div>
            <div className={styles.opportunityCard}>
              <div className={styles.opportunityIcon}>🍽️</div>
              <h3 className={styles.opportunityTitle}>Nutrition Programs</h3>
              <p className={styles.opportunityText}>
                Assist with meal preparation and distribution in our feeding programs.
              </p>
              <div className={styles.timeCommitment}>3-5 hours/week</div>
            </div>
            <div className={styles.opportunityCard}>
              <div className={styles.opportunityIcon}>🏥</div>
              <h3 className={styles.opportunityTitle}>Healthcare Assistance</h3>
              <p className={styles.opportunityText}>
                Support medical camps and health awareness programs.
              </p>
              <div className={styles.timeCommitment}>1-2 days/month</div>
            </div>
            <div className={styles.opportunityCard}>
              <div className={styles.opportunityIcon}>💻</div>
              <h3 className={styles.opportunityTitle}>Digital & Marketing</h3>
              <p className={styles.opportunityText}>
                Help with social media, content creation, and digital outreach.
              </p>
              <div className={styles.timeCommitment}>Flexible</div>
            </div>
            <div className={styles.opportunityCard}>
              <div className={styles.opportunityIcon}>📋</div>
              <h3 className={styles.opportunityTitle}>Administrative Support</h3>
              <p className={styles.opportunityText}>
                Assist with documentation, data entry, and office work.
              </p>
              <div className={styles.timeCommitment}>2-3 hours/week</div>
            </div>
            <div className={styles.opportunityCard}>
              <div className={styles.opportunityIcon}>🎨</div>
              <h3 className={styles.opportunityTitle}>Creative & Events</h3>
              <p className={styles.opportunityText}>
                Help organize events, fundraising activities, and creative projects.
              </p>
              <div className={styles.timeCommitment}>Project-based</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className={styles.applicationForm}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2 className={styles.formTitle}>Join Our Volunteer Community</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  required
                />
              </div>
              
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              
              <input
                type="text"
                name="interests"
                placeholder="Areas of Interest *"
                value={formData.interests}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              
              <input
                type="text"
                name="availability"
                placeholder="Availability *"
                value={formData.availability}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
              
              <textarea
                name="experience"
                placeholder="Previous Volunteer Experience"
                value={formData.experience}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={4}
              />
              
              <textarea
                name="motivation"
                placeholder="Why do you want to volunteer with us? *"
                value={formData.motivation}
                onChange={handleInputChange}
                className={styles.textarea}
                rows={5}
                required
              />
              
              <button type="submit" className={styles.submitButton}>
                <span>Apply to Volunteer</span>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                  <path d="M8.75 14.5441L15.3125 16.0024L8.75 2.87744L2.1875 16.0024L8.75 14.5441ZM8.75 14.5441V8.71077" stroke="currentColor" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Volunteer;
