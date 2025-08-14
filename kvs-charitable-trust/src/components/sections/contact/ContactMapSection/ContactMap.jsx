import React, { useState } from 'react';
import styles from './ContactMap.module.css';

function ContactMap() {
  const [formData, setFormData] = useState({
    purpose: '',
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Message sent successfully!');
      setFormData({
        purpose: '',
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.contactMapSection}>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Send us a message</h3>
            
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label className={styles.label}>I want to...</label>
                <div className={styles.selectWrapper}>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Enter your full name</option>
                    <option value="volunteer">Volunteer with us</option>
                    <option value="donate">Make a donation</option>
                    <option value="partner">Partner with us</option>
                    <option value="inquiry">General inquiry</option>
                  </select>
                  <svg className={styles.selectIcon} viewBox="0 0 14 15" fill="none">
                    <path d="M3.5 5.38049L7 8.88049L10.5 5.38049" stroke="#525252" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Brief subject"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help you..."
                  className={styles.textarea}
                  rows="4"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message 📤'}
              </button>
            </form>
          </div>
        </div>

        <div className={styles.mapSection}>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62214.24871578859!2d77.69847242167967!3d13.067439389583067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18f6b6c4a1e7%3A0x2b4b6b1d5a1a1a1a!2sHoskote%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647849200000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '28px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KVS Trust Location - Hoskote Taluk, Bangalore Rural District"
            />
            <div className={styles.mapOverlay}>
              <div className={styles.mapCard}>
                <span className={styles.mapIcon}>🗺️</span>
                <h4 className={styles.mapTitle}>Interactive map</h4>
                <p className={styles.mapSubtitle}>Hoskote Taluk, Bangalore Rural District</p>
              </div>
            </div>
          </div>

          <div className={styles.officeLocations}>
            <h3 className={styles.locationsTitle}>Office locations</h3>
            
            <div className={styles.locationCard}>
              <div className={styles.locationImage}>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/0e252b38b77abae009aabd8499bacd8d4f7a1a64?width=112" 
                  alt="Main Office" 
                />
              </div>
              <div className={styles.locationInfo}>
                <span className={styles.locationBadge}>Main Office</span>
                <p className={styles.locationAddress}>
                  Hasigala Village, Sulibele Hobli, Hoskote Taluk
                </p>
                <div className={styles.locationContacts}>
                  <p className={styles.contactLink}>📞 +91 8867 148 889</p>
                  <p className={styles.contactLink}>📧 info@kvstrust.org</p>
                </div>
              </div>
            </div>

            <div className={styles.locationCard}>
              <div className={styles.locationImage}>
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/ecb2417d7ced05ab43710bd422bd3d924f50647a?width=112" 
                  alt="Community Center" 
                />
              </div>
              <div className={styles.locationInfo}>
                <span className={styles.locationBadge}>Community Center</span>
                <p className={styles.locationAddress}>
                  Bangalore Rural District, Karnataka
                </p>
                <div className={styles.locationContacts}>
                  <p className={styles.contactLink}>📞 +91 9876 543 210</p>
                  <p className={styles.contactLink}>📧 community@kvstrust.org</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMap;
