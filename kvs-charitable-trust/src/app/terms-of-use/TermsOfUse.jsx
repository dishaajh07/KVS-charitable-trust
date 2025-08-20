import React from 'react';

import styles from './TermsOfUse.module.css';

function TermsOfUse() {
  return (
    <div className={styles.termsPage}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.effectiveDate}>Effective Date: January 1, 2025</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introCard}>
            <p className={styles.introText}>
              Welcome to the KVS Charitable Trust website. These Terms of Use govern your use 
              of our website and services. Please read these terms carefully before using our 
              website.
            </p>
            <p className={styles.introText}>
              By using our website, you agree to comply with and be bound by these Terms of 
              Use. If you disagree with any part of these terms, please do not use our website.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className={styles.termsSections}>
        <div className={styles.container}>
          <div className={styles.sectionsGrid}>
            
            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Acceptance of Terms</h2>
              <p className={styles.cardText}>
                By accessing and using the KVS Charitable Trust website, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Use License</h2>
              <p className={styles.cardText}>
                Permission is granted to temporarily download one copy of the materials on KVS 
                Charitable Trust's website for personal, non-commercial transitory viewing only. This 
                is the grant of a license, not a transfer of title.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Disclaimer</h2>
              <p className={styles.cardText}>
                The materials on KVS Charitable Trust's website are provided on an 'as is' basis. KVS 
                Charitable Trust makes no warranties, expressed or implied, and hereby disclaims 
                and negates all other warranties including without limitation, implied warranties or 
                conditions of merchantability, fitness for a particular purpose, or non-infringement 
                of intellectual property or other violation of rights.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Limitations</h2>
              <p className={styles.cardText}>
                In no event shall KVS Charitable Trust or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to business 
                interruption) arising out of the use or inability to use the materials on KVS Charitable 
                Trust's website.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Accuracy of Materials</h2>
              <p className={styles.cardText}>
                The materials appearing on KVS Charitable Trust's website could include technical, 
                typographical, or photographic errors. KVS Charitable Trust does not warrant that 
                any of the materials on its website are accurate, complete, or current.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Links</h2>
              <p className={styles.cardText}>
                KVS Charitable Trust has not reviewed all of the sites linked to our website and is not 
                responsible for the contents of any such linked site. The inclusion of any link does not 
                imply endorsement by KVS Charitable Trust of the site.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Donations</h2>
              <p className={styles.cardText}>
                All donations made through our website are voluntary and non-refundable unless 
                otherwise required by law. Donors are responsible for ensuring the accuracy of their 
                donation information and contact details.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Modifications</h2>
              <p className={styles.cardText}>
                KVS Charitable Trust may revise these terms of service for its website at any time 
                without notice. By using this website, you are agreeing to be bound by the then 
                current version of these terms of service.
              </p>
            </div>

            <div className={styles.termsCard}>
              <h2 className={styles.cardTitle}>Governing Law</h2>
              <p className={styles.cardText}>
                These terms and conditions are governed by and construed in accordance with the 
                laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in 
                that State or location.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Questions About These Terms?</h2>
            <p className={styles.ctaText}>
              If you have any questions about these Terms of Use, please contact us.
            </p>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default TermsOfUse;
