"use client"
import styles from './Footer.module.css';
import commonData from '@/locales/english/commonData.json';
import commonPath from '@/data/commonPath.js';

const Footer = () => {
  const { contact, quickLinks, legalLinks, subscribe, copyright } = commonData;
  const { logo, contactIcons, socialIcons } = commonPath.footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>

          <div className={styles.logoSection}>
            <img 
              src={logo}
              alt="KVS Charitable Trust Logo"
              className={styles.logo}
              width={160}
              height={80}
              loading="lazy"
            />
          </div>

          {/* Contact */}
          <div className={styles.linksSection}>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{contact.title}</h3>
              <ul className={styles.linkList}>
                {contact.items.map((item, index) => (
                  <li key={index} className={styles.linkItem}>
                    <img
                      src={contactIcons[item.icon]}
                      alt=""
                      className={styles.icon}
                      width={20}
                      height={20}
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <span className={styles.linkText}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <nav className={styles.linkColumn} aria-label="Quick Links">
              <h3 className={styles.columnTitle}>Quick Links</h3>
              <ul className={styles.linkList}>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal Links */}
            <nav className={styles.linkColumn} aria-label="Legal Links">
              <h3 className={styles.columnTitle}>Legal</h3>
              <ul className={styles.linkList}>
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className={styles.link}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Subscribe */}
          <div className={styles.subscribeSection}>
            <h3 className={styles.columnTitle}>{subscribe.title}</h3>
            <p className={styles.subscribeText}>{subscribe.text}</p>
            <form className={styles.subscribeForm} aria-label="Subscribe Form">
              <input
                type="email"
                placeholder="Email *"
                className={styles.emailInput}
                required
              />
              <div className={styles.checkbox}>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms" className={styles.checkboxLabel}>
                  I accept terms & conditions
                </label>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <button
                key={index}
                className={styles.socialIcon}
                aria-label={icon.alt}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={32}
                  height={32}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;