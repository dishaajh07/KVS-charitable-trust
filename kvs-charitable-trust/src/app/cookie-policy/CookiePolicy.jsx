import React from 'react';

import styles from './CookiePolicy.module.css';

function CookiePolicy() {
  return (
    <div className={styles.cookiePage}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Cookie Policy</h1>
          <p className={styles.effectiveDate}>Effective Date: January 1, 2025</p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introCard}>
            <p className={styles.introText}>
              This Cookie Policy explains how KVS Charitable Trust uses cookies and similar 
              technologies on our website. We want to ensure you understand what cookies are, 
              how we use them, and your choices regarding their use.
            </p>
            <p className={styles.introText}>
              By using our website, you consent to the use of cookies in accordance with this 
              Cookie Policy. If you do not agree to our use of cookies, please set your browser 
              preferences accordingly or refrain from using our website.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Sections */}
      <section className={styles.cookieSections}>
        <div className={styles.container}>
          <div className={styles.sectionsGrid}>
            
            <div className={styles.cookieCard}>
              <h2 className={styles.cardTitle}>What Are Cookies?</h2>
              <p className={styles.cardText}>
                Cookies are small text files that are placed on your computer or mobile device when 
                you visit our website. They are widely used to make websites work more efficiently 
                and to provide information to website owners.
              </p>
            </div>

            <div className={styles.cookieCard}>
              <h2 className={styles.cardTitle}>How We Use Cookies</h2>
              <p className={styles.cardText}>
                We use cookies to enhance your browsing experience, analyze website traffic, 
                understand where our visitors are coming from, and improve our website 
                functionality. We also use cookies to remember your preferences and provide 
                personalized content.
              </p>
            </div>

            <div className={styles.cookieCard}>
              <h2 className={styles.cardTitle}>Types of Cookies We Use</h2>
              <p className={styles.cardText}>
                Essential Cookies: These are necessary for our website to function properly. 
                Analytics Cookies: These help us understand how visitors interact with our website. 
                Functional Cookies: These remember your preferences and improve your 
                experience. Marketing Cookies: These track your online activity to help advertisers 
                deliver more relevant advertising.
              </p>
            </div>

            <div className={styles.cookieCard}>
              <h2 className={styles.cardTitle}>Third-Party Cookies</h2>
              <p className={styles.cardText}>
                We may also use third-party cookies from trusted partners such as Google Analytics 
                to help us analyze website usage and improve our services. These third parties may 
                also use cookies to serve advertisements based on your visit to our website.
              </p>
            </div>

            <div className={styles.cookieCard}>
              <h2 className={styles.cardTitle}>Managing Your Cookie Preferences</h2>
              <p className={styles.cardText}>
                You can control and manage cookies in various ways. Most web browsers 
                automatically accept cookies, but you can usually modify your browser settings to 
                decline cookies if you prefer. Please note that disabling cookies may affect the 
                functionality of our website.
              </p>
            </div>

            <div className={styles.cookieCard}>
              <h2 className={styles.cardTitle}>Cookie Consent</h2>
              <p className={styles.cardText}>
                When you first visit our website, you will see a cookie consent banner. By continuing 
                to use our website, you consent to our use of cookies as described in this policy. You 
                can withdraw your consent at any time by adjusting your browser settings.
              </p>
            </div>

            <div className={styles.cookieCard}>
              <h2 className={styles.cardTitle}>Updates to This Policy</h2>
              <p className={styles.cardText}>
                We may update this Cookie Policy from time to time to reflect changes in our 
                practices or for other operational, legal, or regulatory reasons. Please revisit this 
                page regularly to stay informed about our use of cookies.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Questions About Cookies?</h2>
            <p className={styles.ctaText}>
              If you have any questions about our use of cookies or this Cookie Policy, 
              please feel free to contact us.
            </p>
            <button className={styles.ctaButton}>Contact Us</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default CookiePolicy;
