import React from 'react';
import styles from './ProgramSection.module.css';

function ProgramSection({ program }) {
  const {
    programNumber,
    category,
    title,
    description,
    image,
    stats,
    achievements,
    gradient,
    iconGradient,
    bgGradient,
    layout
  } = program;

  const getProgramIcon = (category) => {
    const icons = {
      'Education': (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 6.34473V18.5947" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.125 15.9697C2.89294 15.9697 2.67038 15.8775 2.50628 15.7134C2.34219 15.5494 2.25 15.3268 2.25 15.0947V3.71973C2.25 3.48766 2.34219 3.2651 2.50628 3.10101C2.67038 2.93691 2.89294 2.84473 3.125 2.84473H7.5C8.42826 2.84473 9.3185 3.21348 9.97487 3.86985C10.6313 4.52623 11 5.41647 11 6.34473C11 5.41647 11.3687 4.52623 12.0251 3.86985C12.6815 3.21348 13.5717 2.84473 14.5 2.84473H18.875C19.1071 2.84473 19.3296 2.93691 19.4937 3.10101C19.6578 3.2651 19.75 3.48766 19.75 3.71973V15.0947C19.75 15.3268 19.6578 15.5494 19.4937 15.7134C19.3296 15.8775 19.1071 15.9697 18.875 15.9697H13.625C12.9288 15.9697 12.2611 16.2463 11.7688 16.7386C11.2766 17.2309 11 17.8985 11 18.5947C11 17.8985 10.7234 17.2309 10.2312 16.7386C9.73887 16.2463 9.07119 15.9697 8.375 15.9697H3.125Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'Healthcare': (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M10.125 2.18469V3.93469" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.875 2.18469V3.93469" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.875 3.05969H4C3.53587 3.05969 3.09075 3.24407 2.76256 3.57226C2.43437 3.90044 2.25 4.34556 2.25 4.80969V8.30969C2.25 9.70208 2.80312 11.0374 3.78769 12.022C4.77226 13.0066 6.10761 13.5597 7.5 13.5597C8.89239 13.5597 10.2277 13.0066 11.2123 12.022C12.1969 11.0374 12.75 9.70208 12.75 8.30969V4.80969C12.75 4.34556 12.5656 3.90044 12.2374 3.57226C11.9092 3.24407 11.4641 3.05969 11 3.05969H10.125" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7.5 13.5597C7.5 14.9521 8.05312 16.2874 9.03769 17.272C10.0223 18.2566 11.3576 18.8097 12.75 18.8097C14.1424 18.8097 15.4777 18.2566 16.4623 17.272C17.4469 16.2874 18 14.9521 18 13.5597V10.9347" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 10.9347C18.9665 10.9347 19.75 10.1512 19.75 9.18469C19.75 8.21819 18.9665 7.43469 18 7.43469C17.0335 7.43469 16.25 8.21819 16.25 9.18469C16.25 10.1512 17.0335 10.9347 18 10.9347Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'Nutrition': (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M17.125 12.5095C18.4288 11.232 19.75 9.70077 19.75 7.69702C19.75 6.42067 19.243 5.19659 18.3405 4.29407C17.4379 3.39155 16.2139 2.88452 14.9375 2.88452C13.3975 2.88452 12.3125 3.32202 11 4.63452C9.6875 3.32202 8.6025 2.88452 7.0625 2.88452C5.78615 2.88452 4.56207 3.39155 3.65955 4.29407C2.75703 5.19659 2.25 6.42067 2.25 7.69702C2.25 9.70952 3.5625 11.2408 4.875 12.5095L11 18.6345L17.125 12.5095Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'Shelter': (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M13.625 18.832V11.832C13.625 11.6 13.5328 11.3774 13.3687 11.2133C13.2046 11.0492 12.9821 10.957 12.75 10.957H9.25C9.01794 10.957 8.79538 11.0492 8.63128 11.2133C8.46719 11.3774 8.375 11.6 8.375 11.832V18.832" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3.125 9.20706C3.12494 8.9525 3.18042 8.70098 3.28756 8.47007C3.39471 8.23915 3.55095 8.03439 3.74538 7.87006L9.87037 2.62094C10.1862 2.35398 10.5864 2.20752 11 2.20752C11.4136 2.20752 11.8138 2.35398 12.1296 2.62094L18.2546 7.87006C18.4491 8.03439 18.6053 8.23915 18.7124 8.47007C18.8196 8.70098 18.8751 8.9525 18.875 9.20706V17.0821C18.875 17.5462 18.6906 17.9913 18.3624 18.3195C18.0342 18.6477 17.5891 18.8321 17.125 18.8321H4.875C4.41087 18.8321 3.96575 18.6477 3.63756 18.3195C3.30937 17.9913 3.125 17.5462 3.125 17.0821V9.20706Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      'Clothing': (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M18.3326 3.28702L14.5001 2.00952C14.5001 2.93778 14.1313 3.82802 13.4749 4.4844C12.8186 5.14077 11.9283 5.50952 11.0001 5.50952C10.0718 5.50952 9.18157 5.14077 8.52519 4.4844C7.86881 3.82802 7.50007 2.93778 7.50007 2.00952L3.66757 3.28702C3.27153 3.41897 2.9357 3.68814 2.72069 4.04595C2.50568 4.40376 2.42566 4.82664 2.49507 5.23827L3.00257 8.27452C3.03588 8.48007 3.14141 8.667 3.30019 8.80172C3.45897 8.93644 3.66059 9.01012 3.86882 9.00952H5.75007V17.7595C5.75007 18.722 6.53757 19.5095 7.50007 19.5095H14.5001C14.9642 19.5095 15.4093 19.3251 15.7375 18.997C16.0657 18.6688 16.2501 18.2237 16.2501 17.7595V9.00952H18.1313C18.3395 9.01012 18.5412 8.93644 18.6999 8.80172C18.8587 8.667 18.9642 8.48007 18.9976 8.27452L19.5051 5.23827C19.5745 4.82664 19.4945 4.40376 19.2794 4.04595C19.0644 3.68814 18.7286 3.41897 18.3326 3.28702Z" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    };
    return icons[category] || icons['Education'];
  };

  return (
    <section className={styles.programSection} style={{ background: gradient }}>
      <div className={styles.container}>
        {layout === 'image-right' ? (
          <>
            <div className={styles.content}>
              <div className={styles.programHeader}>
                <div className={styles.iconContainer} style={{ background : iconGradient }}>
                  {getProgramIcon(category)}
                </div>
                <div className={styles.programBadge} style={{ color: bgGradient }}>
                  Program {programNumber} • {category}
                </div>
              </div>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
              
              <div className={styles.achievements}>
                <div className={styles.achievementsHeader}>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M15.8965 8.22132C16.2295 9.8556 15.9922 11.5546 15.2241 13.0351C14.456 14.5156 13.2036 15.688 11.6757 16.3569C10.1478 17.0257 8.43684 17.1505 6.82806 16.7105C5.21927 16.2706 3.80996 15.2923 2.83512 13.939C1.86029 12.5857 1.37886 10.9391 1.47113 9.27379C1.5634 7.60848 2.22379 6.02513 3.34217 4.78779C4.46054 3.55046 5.9693 2.73392 7.61684 2.47435C9.26438 2.21479 10.9511 2.52788 12.3958 3.36142" stroke="#171717" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5625 8.95048L8.75 11.138L16.0417 3.84631" stroke="#171717" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Key Achievements</h3>
                </div>
                <div className={styles.achievementsList}>
                  {achievements.map((achievement, index) => (
                    <div key={index} className={styles.achievementItem}>
                      <svg className={styles.achievementIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className={styles.supportButton}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M11.0837 9.0214C11.9528 8.16974 12.8337 7.1489 12.8337 5.81307C12.8337 4.96217 12.4956 4.14611 11.894 3.54444C11.2923 2.94276 10.4762 2.60474 9.62533 2.60474C8.59866 2.60474 7.87533 2.8964 7.00033 3.7714C6.12533 2.8964 5.40199 2.60474 4.37533 2.60474C3.52442 2.60474 2.70837 2.94276 2.10669 3.54444C1.50501 4.14611 1.16699 4.96217 1.16699 5.81307C1.16699 7.15474 2.04199 8.17557 2.91699 9.0214L7.00033 13.1047L11.0837 9.0214Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Support this program
              </button>
            </div>
            <div className={styles.imageContainer}>
              <div className={styles.decorativeGradient} style={{ background: gradient, opacity: 0.9 }}></div>
              <div className={styles.imageCard}>
                <img src={image} alt={title} className={styles.programImage} />
                <div className={styles.imageOverlay}></div>
                <div className={styles.statsCard}>
                  <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                      <div key={index} className={`${styles.statItem} ${index > 0 ? styles.withBorder : ''}`}>
                        <div className={styles.statNumber}>{stat.number || stat.text}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.iconBadge} style={{ background: iconGradient }}>
                  {getProgramIcon(category)}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.imageContainer}>
              <div className={styles.decorativeGradient} style={{ background: gradient, opacity: 0.9 }}></div>
              <div className={styles.imageCard}>
                <img src={image} alt={title} className={styles.programImage} />
                <div className={styles.imageOverlay}></div>
                <div className={styles.statsCard}>
                  <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                      <div key={index} className={`${styles.statItem} ${index > 0 ? styles.withBorder : ''}`}>
                        <div className={styles.statNumber}>{stat.number || stat.text}</div>
                        <div className={styles.statLabel}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.iconBadge} style={{ background: iconGradient }}>
                  {getProgramIcon(category)}
                </div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.programHeader}>
                <div className={styles.iconContainer} style={{ background: iconGradient }}>
                  {getProgramIcon(category)}
                </div>
                <div className={styles.programBadge} style={{ color: bgGradient }}>
                  Program {programNumber} • {category}
                </div>
              </div>
              <h2 className={styles.title}>{title}</h2>
              <p className={styles.description}>{description}</p>
              
              <div className={styles.achievements}>
                <div className={styles.achievementsHeader}>
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                    <path d="M15.8965 8.22132C16.2295 9.8556 15.9922 11.5546 15.2241 13.0351C14.456 14.5156 13.2036 15.688 11.6757 16.3569C10.1478 17.0257 8.43684 17.1505 6.82806 16.7105C5.21927 16.2706 3.80996 15.2923 2.83512 13.939C1.86029 12.5857 1.37886 10.9391 1.47113 9.27379C1.5634 7.60848 2.22379 6.02513 3.34217 4.78779C4.46054 3.55046 5.9693 2.73392 7.61684 2.47435C9.26438 2.21479 10.9511 2.52788 12.3958 3.36142" stroke="#171717" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5625 8.95048L8.75 11.138L16.0417 3.84631" stroke="#171717" strokeWidth="1.45833" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3>Key Achievements</h3>
                </div>
                <div className={styles.achievementsList}>
                  {achievements.map((achievement, index) => (
                    <div key={index} className={styles.achievementItem}>
                      <svg className={styles.achievementIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className={styles.supportButton}>
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
                  <path d="M11.0837 9.0214C11.9528 8.16974 12.8337 7.1489 12.8337 5.81307C12.8337 4.96217 12.4956 4.14611 11.894 3.54444C11.2923 2.94276 10.4762 2.60474 9.62533 2.60474C8.59866 2.60474 7.87533 2.8964 7.00033 3.7714C6.12533 2.8964 5.40199 2.60474 4.37533 2.60474C3.52442 2.60474 2.70837 2.94276 2.10669 3.54444C1.50501 4.14611 1.16699 4.96217 1.16699 5.81307C1.16699 7.15474 2.04199 8.17557 2.91699 9.0214L7.00033 13.1047L11.0837 9.0214Z" stroke="white" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Support this program
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ProgramSection;
