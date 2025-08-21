"use client"
import React, { useState } from 'react';
import styles from './PartnerTab.module.css';

function PartnerTab() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    message: ''
  });

  const partnershipTypes = [
    {
      title: 'Corporate CSR Partnership',
      description: 'Partner with us for your CSR initiatives and create meaningful impact in rural communities.',
      amount: '₹50,000+',
      color: '#F54900'
    },
    {
      title: 'Individual Sponsorship',
      description: 'Sponsor a child\'s education or a family\'s healthcare needs on a monthly basis.',
      amount: '₹1,000/month',
      color: '#F54900'
    },
    {
      title: 'Community Collaboration',
      description: 'Local organizations and groups can collaborate on specific community development projects.',
      amount: 'Resource sharing',
      color: '#F54900'
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
    console.log('Partnership inquiry submitted:', formData);
  };

  return (
    <div className={styles.partnerTab}>
      <div className={styles.formSection}>
        <div className={styles.partnerForm}>
          <h3 className={styles.formTitle}>Partner With Us</h3>
          
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
              <label className={styles.label}>Organization (Optional)</label>
              <input
                type="text"
                name="organization"
                placeholder="Enter your organization name"
                value={formData.organization}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Message *</label>
              <textarea
                name="message"
                placeholder="Tell us about your partnership interests and how you'd like to collaborate"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                rows="4"
                required
              />
            </div>
            
            <button type="submit" className={styles.submitButton}>
              🤝 Submit Partnership Inquiry
            </button>
          </form>
        </div>
      </div>

      <div className={styles.typesSection}>
        <div className={styles.typesContainer}>
          <h3 className={styles.typesTitle}>Partnership Types</h3>
          
          <div className={styles.typesList}>
            {partnershipTypes.map((type, index) => (
              <div key={index} className={styles.typeCard}>
                <h4 className={styles.typeTitle}>{type.title}</h4>
                
                <div className={styles.typeContent}>
                  <p className={styles.typeDescription}>
                    {type.description}
                  </p>
                </div>
                
                <div className={styles.typeAmount} style={{ color: type.color, backgroundColor: `${type.color}20` }}>
                  {type.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerTab;
