import React, { useState } from 'react';
import styles from './VolunteerTab.module.css';

function VolunteerTab() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: '',
    message: ''
  });

  const opportunities = [
    {
      title: 'Education Volunteer',
      timeCommitment: '4 hours/week',
      location: '📍 Hoskote Taluk schools',
      description: 'Help teach basic literacy and numeracy to children in rural schools.',
      color: '#155DFC'
    },
    {
      title: 'Healthcare Assistant',
      timeCommitment: '1 day/month',
      location: '📍 Medical camps',
      description: 'Assist in medical camps and health awareness programs.',
      color: '#155DFC'
    },
    {
      title: 'Community Outreach',
      timeCommitment: 'Flexible',
      location: '📍 Rural Bangalore areas',
      description: 'Help connect with communities and identify their needs.',
      color: '#155DFC'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
  };

  return (
    <div className={styles.volunteerTab}>
      <div className={styles.formSection}>
        <div className={styles.volunteerForm}>
          <h3 className={styles.formTitle}>Join Our Volunteer Team</h3>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name *</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className={styles.input}
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Availability *</label>
              <div className={styles.selectWrapper}>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekends">Weekends only</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="once-month">Once a month</option>
                  <option value="once-week">Once a week</option>
                </select>
              </div>
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us about your skills, interests, and why you want to volunteer with us"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                rows="4"
                required
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              🤝 Submit Volunteer Application
            </button>
          </form>
        </div>
      </div>

      <div className={styles.opportunitiesSection}>
        <div className={styles.opportunitiesContainer}>
          <h3 className={styles.opportunitiesTitle}>Volunteer Opportunities</h3>
          
          <div className={styles.opportunitiesList}>
            {opportunities.map((opportunity, index) => (
              <div key={index} className={styles.opportunityCard}>
                <h4 className={styles.opportunityTitle}>{opportunity.title}</h4>
                
                <div className={styles.opportunityTags}>
                  <span className={styles.timeTag} style={{ color: opportunity.color, backgroundColor: `${opportunity.color}20` }}>
                    {opportunity.timeCommitment}
                  </span>
                  <span className={styles.locationTag}>
                    {opportunity.location}
                  </span>
                </div>
                
                <p className={styles.opportunityDescription}>
                  {opportunity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerTab;
