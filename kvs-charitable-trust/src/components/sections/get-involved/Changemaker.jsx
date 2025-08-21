"use client"
import React, { useState } from 'react';
import styles from './Changemaker.module.css';

function Changemaker() {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const predefinedAmounts = ['500', '1,000', '2,000'];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getDisplayAmount = () => {
    if (customAmount) return customAmount;
    if (selectedAmount) return selectedAmount.replace(',', '');
    return '0';
  };

  return (
<div className={styles.formContainer}>
 <div className={styles.header}>

          <h2 className={styles.title}>Be A Changemaker</h2>
          <p className={styles.subtitle}>
            Join our circle of hope. Whether through donations, volunteering, or spreading awareness—you are the reason change happens.
          </p>
        </div>
    <div className={styles.donateTab}>
<div className={styles.formSection}>
        <div className={styles.donationForm}>

          <h3 className={styles.formTitle}>Choose Your Donation Amount</h3>
          
          <div className={styles.amountSelection}>
            <div className={styles.amountGrid}>
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  className={`${styles.amountButton} ${selectedAmount === amount ? styles.selected : ''}`}
                  onClick={() => handleAmountSelect(amount)}
                >
                  ₹{amount}
                </button>
              ))}
            </div>
            
            <div className={styles.customAmountSection}>
              <label className={styles.label}>Or enter custom amount</label>
              <div className={styles.customAmountInput}>
                <span className={styles.currencySymbol}>₹</span>
                <input
                  type="number"
                  placeholder="Enter amount in ₹"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className={styles.amountInput}
                />
              </div>
            </div>
            
            {/* <button 
              className={`${styles.selectButton} ${(selectedAmount || customAmount) ? styles.enabled : ''}`}
              disabled={!selectedAmount && !customAmount}
            >
              Select amount to donate
            </button> */}
          </div>

          <div className={styles.donorDetails}>
            <h4 className={styles.sectionTitle}>Donor Details</h4>
            
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={styles.input}
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
                />
              </div>
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
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Message (Optional)</label>
              <textarea
                name="message"
                placeholder="Share why you're donating or leave a message of support"
                value={formData.message}
                onChange={handleInputChange}
                className={styles.textarea}
                rows="4"
              />
            </div>
          </div>

          <button className={styles.donateButton}>
            💝 Donate ₹{getDisplayAmount()} Now
          </button>
          
          <p className={styles.securityText}>
            Secure payment powered by Razorpay. Your information is protected.
          </p>
        </div>
      </div>

      <div className={styles.impactSection}>
        <div className={styles.impactCard}>
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f02b85b4579708a056180c079a3021421d657cfe?width=1593" 
            alt="Volunteer helping children" 
            className={styles.impactImage}
          />
          
          <div className={styles.statsContainer}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>1,000+</div>
              <div className={styles.statLabel}>Lives Impacted</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Communities</div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statNumber}>₹2M+</div>
              <div className={styles.statLabel}>Funds Raised</div>
            </div>
          </div>
          
          <div className={styles.impactContent}>
            <h4 className={styles.impactTitle}>Your Impact in Action</h4>
            <p className={styles.impactDescription}>
              Every donation directly supports families in rural Bangalore, providing essential healthcare, education, and nutrition services.
            </p>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}

export default Changemaker;
