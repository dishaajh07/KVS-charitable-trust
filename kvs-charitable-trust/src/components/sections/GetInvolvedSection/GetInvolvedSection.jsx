import React, { useState } from 'react';
import DonateTab from './DonateTab';
import VolunteerTab from './VolunteerTab';
import PartnerTab from './PartnerTab';
import styles from './GetInvolvedSection.module.css';

function GetInvolvedSection() {
  const [activeTab, setActiveTab] = useState('donate');

  const tabs = [
    { id: 'donate', label: 'Donate', icon: '💝' },
    { id: 'volunteer', label: 'Volunteer', icon: '🤝' },
    { id: 'partner', label: 'Partner', icon: '🤝' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'donate':
        return <DonateTab />;
      case 'volunteer':
        return <VolunteerTab />;
      case 'partner':
        return <PartnerTab />;
      default:
        return <DonateTab />;
    }
  };

  return (
    <section className={styles.getInvolvedSection}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.breadcrumb}>
            <span className={styles.home}>Home</span>
            <svg className={styles.arrow} viewBox="0 0 6 10" fill="none">
              <path d="M1 0.916672L5.08333 5L1 9.08334" stroke="white" strokeOpacity="0.5" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.current}>Get Involved</span>
          </div>
          <div className={styles.heroContent}>
            <span className={styles.subtitle}>Our Story</span>
            <h1 className={styles.title}>Join Our Mission</h1>
            <p className={styles.description}>
              Every contribution, big or small, creates meaningful change in rural
              Bangalore communities. Together, we can build a brighter future.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Section */}
      <div className={styles.tabSection}>
        <div className={styles.tabContainer}>
          <div className={styles.tabHeader}>
            <h2 className={styles.tabTitle}>How Would You Like to Help?</h2>
            <p className={styles.tabSubtitle}>
              Choose your preferred way to make a difference. Every contribution creates lasting
              impact for those who need it most.
            </p>
          </div>
          
          <div className={styles.tabNavigation}>
            <div className={styles.tabButtons}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className={styles.tabIcon}>{tab.icon}</span>
                  <span className={styles.tabLabel}>{tab.label}</span>
                  {activeTab === tab.id && (
                    <span className={styles.checkmark}>✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentSection}>
        {renderTabContent()}
      </div>
    </section>
  );
}

export default GetInvolvedSection;
