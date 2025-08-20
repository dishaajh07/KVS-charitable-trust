import React from 'react';
import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy() {
  return (
    <div className={styles.privacyPage}>

      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Effective Date: January 1, 2025</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introCard}>
            <p className={styles.introText}>
              At KVS Charitable Trust, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we 
              collect, use, and safeguard your information when you visit our website, make 
              donations, or interact with our services.
            </p>
            <p className={styles.introText}>
              By using our website and services, you agree to the collection and use of 
              information in accordance with this policy. If you have any questions about this 
              Privacy Policy, please contact us using the information provided at the end of this 
              document.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className={styles.policySections}>
        <div className={styles.container}>
          <div className={styles.sectionsGrid}>
            
            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>Information We Collect</h2>
              <p className={styles.cardText}>
                We collect information you provide directly to us, such as when you make a donation, 
                sign up for our newsletter, volunteer with us, or contact us. This may include your 
                name, email address, phone number, mailing address, and payment information.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>How We Use Your Information</h2>
              <p className={styles.cardText}>
                We use the information we collect to process donations, communicate with you about 
                our programs and services, send newsletters and updates, process volunteer 
                applications, and improve our website and services.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>Information Sharing</h2>
              <p className={styles.cardText}>
                We do not sell, trade, or otherwise transfer your personal information to third 
                parties without your consent, except as described in this policy. We may share 
                information with trusted service providers who assist us in operating our website and 
                conducting our activities.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>Data Security</h2>
              <p className={styles.cardText}>
                We implement appropriate security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no 
                method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>Cookies and Tracking</h2>
              <p className={styles.cardText}>
                We use cookies and similar tracking technologies to enhance your experience on our 
                website. You can control cookie settings through your browser preferences.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>Your Rights</h2>
              <p className={styles.cardText}>
                You have the right to access, update, or delete your personal information. You may 
                also opt out of receiving communications from us at any time by following the 
                unsubscribe instructions in our emails.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>Children's Privacy</h2>
              <p className={styles.cardText}>
                Our website is not intended for children under 13 years of age. We do not knowingly 
                collect personal information from children under 13.
              </p>
            </div>

            <div className={styles.policyCard}>
              <h2 className={styles.cardTitle}>Changes to This Policy</h2>
              <p className={styles.cardText}>
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the effective date.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Questions About This Policy?</h2>
            <p className={styles.ctaText}>
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButton}>Contact Us</button>
              <a href="mailto:privacy@kvstrust.org" className={styles.ctaLink}>
                privacy@kvstrust.org
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default PrivacyPolicy;
