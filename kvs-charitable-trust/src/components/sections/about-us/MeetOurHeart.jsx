import React from 'react';
import styles from './MeetOurHeart.module.css';

function MeetOurHeart() {
  const teamMembers = [
    {
      name: "Md Shafqatullah",
      role: "Founder & Chairman",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1039cee8dba78b492fc420bc9d3b5c0df7fc37b0?width=538",
      description: "With 17+ years of unwavering dedication, Rajesh has touched over 10,000 lives across rural Bangalore, turning his vision of equal opportunity into reality."
    },
    {
      name: "Md Shafqatullah",
      role: "Founder & Chairman",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1039cee8dba78b492fc420bc9d3b5c0df7fc37b0?width=538",
      description: "With 17+ years of unwavering dedication, Rajesh has touched over 10,000 lives across rural Bangalore, turning his vision of equal opportunity into reality."
    },
    {
      name: "Md Shafqatullah",
      role: "Founder & Chairman",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1039cee8dba78b492fc420bc9d3b5c0df7fc37b0?width=538",
      description: "With 17+ years of unwavering dedication, Rajesh has touched over 10,000 lives across rural Bangalore, turning his vision of equal opportunity into reality."
    }
  ];

  return (
    <section className={styles.meetOurHeart}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Meet Our Heart</h2>
          <p className={styles.subtitle}>
            Behind every life we've transformed are passionate individuals who've dedicated themselves to creating change. Meet the people who make miracles happen every day.
          </p>
        </div>
        
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.imageContainer}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className={styles.memberImage}
                />
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <div className={styles.memberRole}>
                  <span className={styles.roleText}>{member.role}</span>
                </div>
              </div>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MeetOurHeart;
