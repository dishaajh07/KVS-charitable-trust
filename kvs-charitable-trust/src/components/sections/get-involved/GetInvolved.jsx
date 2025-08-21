"use client"
import React, { useState } from 'react';
import DonateTab from './DonateTab';
import VolunteerTab from './VolunteerTab';
import PartnerTab from './PartnerTab';
import styles from './GetInvolved.module.css';

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
    <section className={styles.getInvolvedSection} id="donate-tab">

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
                    <span className={styles.checkmark}></span>
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
