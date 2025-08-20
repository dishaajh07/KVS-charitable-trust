import React from 'react';
import styles from './Governance.module.css';

function Governance() {
  return (
    <div className={styles.governancePage}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Governance Statement</h1>
          <p className={styles.lastUpdated}>Last Updated: January 1, 2025</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introCard}>
            <p className={styles.introText}>
              This Governance Statement outlines the principles, structures, and processes that 
              guide KVS Charitable Trust in fulfilling our mission and maintaining the trust of our 
              stakeholders.
            </p>
            <p className={styles.introText}>
              We are committed to the highest standards of governance, transparency, and 
              accountability in all our operations. This statement demonstrates our dedication to 
              responsible stewardship of the resources entrusted to us.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Sections */}
      <section className={styles.governanceSections}>
        <div className={styles.container}>
          <div className={styles.sectionsGrid}>
            
            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Our Mission and Vision</h2>
              <p className={styles.cardText}>
                KVS Charitable Trust is committed to creating positive social impact through 
                compassionate service to underserved communities. Our governance framework 
                ensures that all activities align with our mission of providing education, healthcare, 
                nutrition, and support services to those who need them most.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Board of Trustees</h2>
              <p className={styles.cardText}>
                Our Board of Trustees provides strategic oversight and ensures accountability in all 
                our operations. The Board consists of dedicated individuals with diverse expertise in 
                nonprofit management, social work, finance, and community development. Board 
                members serve voluntarily and are committed to the highest standards of 
                governance.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Transparency and Accountability</h2>
              <p className={styles.cardText}>
                We maintain transparency in all our operations through regular financial reporting, 
                program evaluations, and public disclosure of our activities. Annual reports, financial 
                statements, and program impact assessments are made available to stakeholders 
                and the public.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Financial Management</h2>
              <p className={styles.cardText}>
                We follow strict financial management practices to ensure donor funds are used 
                effectively and efficiently. Our financial operations are subject to regular internal 
                reviews and external audits. We maintain clear policies for budget approval, expense 
                authorization, and financial reporting.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Ethical Standards</h2>
              <p className={styles.cardText}>
                All trustees, staff, and volunteers are expected to adhere to the highest ethical 
                standards. We have established codes of conduct that address conflicts of interest, 
                confidentiality, and professional behavior. Any violations of these standards are 
                addressed promptly and appropriately.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Risk Management</h2>
              <p className={styles.cardText}>
                We have implemented comprehensive risk management procedures to identify, 
                assess, and mitigate potential risks to our organization and beneficiaries. This 
                includes financial risks, operational risks, and reputational risks.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Compliance and Legal Requirements</h2>
              <p className={styles.cardText}>
                KVS Charitable Trust operates in full compliance with all applicable laws and 
                regulations governing nonprofit organizations in India. We maintain all required 
                registrations and regularly review our compliance with legal requirements.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Stakeholder Engagement</h2>
              <p className={styles.cardText}>
                We actively engage with our stakeholders including beneficiaries, donors, volunteers, 
                partners, and the broader community. Regular feedback is sought and incorporated 
                into our program planning and organizational development.
              </p>
            </div>

            <div className={styles.governanceCard}>
              <h2 className={styles.cardTitle}>Continuous Improvement</h2>
              <p className={styles.cardText}>
                We are committed to continuous improvement in our governance practices. Regular 
                reviews of our policies, procedures, and performance help us enhance our 
                effectiveness and better serve our mission.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Our Commitment to Excellence</h2>
            <p className={styles.ctaText}>
              We are dedicated to maintaining the highest standards of governance 
              and welcome feedback from our stakeholders on how we can continue to 
              improve.
            </p>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>
        </div>
      </section>


    </div>
  );
}

export default Governance;
