"use client";
import React from 'react'
import Nav from '../../components/layout/Nav';
import Banner from '../../components/sections/what-we-do/Banner';

import Programs from '../../components/sections/what-we-do/Programs';
import Footer from '../../components/layout/footer';

export default function whatWeDo() {
  return (
    <main>
<Nav />
<div className="headerSpacer"></div>
        <Banner
      title="What We Do"
      subtitle="Our Programs"
      description="Our comprehensive programs addressing the core needs of rural Bangalore communities through holistic approaches that transform lives, strengthen families, and build sustainable futures for entire communities."
      backgroundImage={'/images/image.png'}
      breadcrumb={[
        { label: 'Home', link: '/' },
        { label: 'What We Do' },
      ]}
    />
     <Programs
        programTitle="Quality Education for Every Child"
        programDescription="Comprehensive educational support from primary to higher secondary, including digital literacy, career guidance, and scholarship programs for deserving students."
        studentsEnrolled="847"
        totalReached="847"
        schoolsSupported="12"
        keyAchievements={[
          '95% school completion rate',
          'Career guidance for 200+ students',
          'Digital learning centers in 12 villages',
          'Scholarship support for 156 students'
        ]}
        supportLink="/support"
        imageUrl="/images/image.png"
      />
<Footer />
    </main>
  );
}