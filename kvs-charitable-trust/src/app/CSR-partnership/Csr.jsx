import React from 'react';
import styles from './Csr.module.css';

function Csr() {
  return (
    <div className={styles.csrPage}>

      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>CSR Partnerships</h1>
          <p className={styles.subtitle}>
            Partner with us to create meaningful social impact through strategic Corporate
            Social Responsibility initiatives.
          </p>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className={styles.whyPartner}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Why Partner With KVS?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🎯</div>
              <h3 className={styles.benefitTitle}>Strategic Impact</h3>
              <p className={styles.benefitText}>
                Align your CSR goals with measurable social impact through our proven programs.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🤝</div>
              <h3 className={styles.benefitTitle}>Long-term Partnerships</h3>
              <p className={styles.benefitText}>
                Build lasting relationships that create sustainable change in communities.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📊</div>
              <h3 className={styles.benefitTitle}>Transparent Reporting</h3>
              <p className={styles.benefitText}>
                Receive detailed impact reports and documentation for your CSR compliance.
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🏆</div>
              <h3 className={styles.benefitTitle}>Brand Enhancement</h3>
              <p className={styles.benefitText}>
                Enhance your corporate reputation through meaningful social responsibility initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Programs Section */}
      <section className={styles.programs}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Partnership Programs</h2>
          <div className={styles.programsGrid}>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Education Initiative</h3>
              <p className={styles.programText}>
                Support skill-based education programs for underprivileged children and adults.
              </p>
              <div className={styles.programBadge}>200+ beneficiaries annually</div>
            </div>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Healthcare Access</h3>
              <p className={styles.programText}>
                Fund medical camps, blood donation drives, and basic healthcare services.
              </p>
              <div className={styles.programBadge}>1000+ people served</div>
            </div>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Nutrition Program</h3>
              <p className={styles.programText}>
                Provide nutritious meals and food security to children and families in need.
              </p>
              <div className={styles.programBadge}>500+ children fed daily</div>
            </div>
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Livelihood Development</h3>
              <p className={styles.programText}>
                Create employment opportunities and skill development programs for adults.
              </p>
              <div className={styles.programBadge}>150+ jobs created</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Partner Section */}
      <section className={styles.howToPartner}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>How to Partner With Us</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3 className={styles.stepTitle}>Initial Consultation</h3>
              <p className={styles.stepText}>
                Discuss your CSR objectives and explore alignment with our programs.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3 className={styles.stepTitle}>Program Design</h3>
              <p className={styles.stepText}>
                Develop customized programs that meet your CSR goals and create impact.
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3 className={styles.stepTitle}>Implementation & Reporting</h3>
              <p className={styles.stepText}>
                Execute programs with regular monitoring and detailed impact reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Make a Difference?</h2>
            <p className={styles.ctaText}>
              Let's create meaningful social impact together through strategic CSR partnerships.
            </p>
            <button className={styles.ctaButton}>Start Partnership</button>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Csr;
