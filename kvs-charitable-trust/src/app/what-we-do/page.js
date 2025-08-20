"use client";
import React, { useEffect, useState } from "react";
import Nav from '../../components/layout/Nav';
import Banner from '../../components/sections/what-we-do/Banner';
import ProgramsOverview from '@/components/sections/what-we-do/ProgramsOverview';
import SpecialInitiatives from '@/components/sections/what-we-do/SpecialInitiatives';
import Impact from '@/components/sections/what-we-do/Impact';
import ProgramSection from '@/components/sections/what-we-do/ProgramSection';
import ProgramSectionMobile from '@/components/sections/what-we-do/ProgramSectionMobile';
import SupportPrograms from '@/components/sections/about-us/SupportPrograms';
import Footer from '../../components/layout/footer';

export default function whatWeDo() {
 const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1200);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

const programs = [
    {
      id: 'education',
      programNumber: '1',
      category: 'Education',
      title: 'Quality Education for Every Child',
      description: 'Comprehensive educational support from primary to higher secondary, including digital literacy, career guidance, and scholarship programs for deserving students.',
      image: '/images/image.png',
      stats: [
        { number: '847', label: 'Students enrolled' },
        { number: '847 students', label: 'Total reached' },
        { text: '12 schools supported' }
      ],
      achievements: [
        '95% school completion rate',
        'Digital learning centers in 12 villages',
        'Career guidance for 200+ students',
        'Scholarship support for 156 students'
      ],
      gradient: 'linear-gradient(135deg, rgba(21, 93, 252, 0.14) 0%, rgba(25, 60, 184, 0.14) 100%)',
      iconGradient: '#193CB8',
      bgGradient: '#193CB8',
      layout: 'image-right'
    },
    {
      id: 'healthcare',
      programNumber: '2',
      category: 'Healthcare',
      title: 'Accessible Healthcare for Rural Communities',
      description: 'Comprehensive medical care through mobile health camps, emergency support, preventive care programs, and maternal health services for underserved populations.',
      image: '/images/image.png',
      stats: [
        { number: '3,200', label: 'Patients treated' },
        { number: '3,200 patients', label: 'Total reached' },
        { text: '75 health camps conducted' }
      ],
      achievements: [
        'Monthly health camps in 25 villages',
        '24/7 emergency medical support',
        'Vaccination drives covering 1,500+ children',
        'Maternal health support for 300+ mothers'
      ],
      gradient: 'linear-gradient(135deg, rgba(0, 153, 102, 0.14) 0%, rgba(0, 96, 69, 0.14) 100%)',
      iconGradient: '#006045',
      bgGradient: '#006045',
      layout: 'image-left'
    },
    {
      id: 'nutrition',
      programNumber: '3',
      category: 'Nutrition',
      title: 'Nutritional Security and Food Programs',
      description: 'Daily nutritious meals, nutrition education, kitchen gardens, and food security programs ensuring no child suffers from malnutrition in our communities.',
      image: '/images/image.png',
      stats: [
        { number: '1,200', label: 'Children fed daily' },
        { number: '1,200 children', label: 'Total reached' },
        { text: '438,000 meals served annually' }
      ],
      achievements: [
        '365 days of nutritious meals',
        'Kitchen gardens in 30 communities',
        'Nutrition education for 500+ mothers',
        'Zero malnutrition cases in supported areas'
      ],
      gradient: 'linear-gradient(135deg, rgba(245, 73, 0, 0.14) 0%, rgba(159, 45, 0, 0.14) 100%)',
      iconGradient: '#9F2D00',
      bgGradient: '#9F2D00',
      layout: 'image-right'
    },
    {
      id: 'shelter',
      programNumber: '4',
      category: 'Shelter',
      title: 'Safe Shelter and Infrastructure',
      description: 'Dignified housing solutions, infrastructure development, clean water access, and sanitation facilities creating safe, healthy living environments for families.',
      image: '/images/image.png',
      stats: [
        { number: '312', label: 'Families housed' },
        { number: '312 families', label: 'Total reached' },
        { text: '18 villages improved' }
      ],
      achievements: [
        'Safe housing for 312 families',
        'Clean water access for 1,800 people',
        'Sanitation facilities in 18 villages',
        'Community infrastructure development'
      ],
      gradient: 'linear-gradient(135deg, rgba(152, 16, 250, 0.14) 0%, rgba(110, 17, 176, 0.14) 100%)',
      iconGradient: '#6E11B0',
      bgGradient: '#6E11B0',
      layout: 'image-left'
    },
    {
      id: 'clothing',
      programNumber: '5',
      category: 'Clothing',
      title: 'Clothing and Dignity Programs',
      description: 'Seasonal clothing distribution, school uniforms, work attire support, and dignity kits ensuring every community member has access to appropriate clothing.',
      image: '/images/image.png',
      stats: [
        { number: '2,100', label: 'Individuals clothed' },
        { number: '2,100 individuals', label: 'Total reached' },
        { text: '4 distributions annually' }
      ],
      achievements: [
        'Seasonal clothing for 2,100 people',
        'School uniforms for 600+ students',
        'Work attire for 200+ adults',
        'Emergency clothing support available'
      ],
      gradient: 'linear-gradient(135deg, rgba(230, 0, 118, 0.14) 0%, rgba(163, 0, 76, 0.14) 100%)',
      iconGradient: '#A3004C',
      bgGradient: '#A3004C',
      layout: 'image-right'
    }
  ];


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
   <ProgramsOverview />
    {programs.map((program) =>
        isMobile ? (
          <ProgramSectionMobile key={program.id} program={program} />
        ) : (
          <ProgramSection key={program.id} program={program} />
        )
      )}
      <SpecialInitiatives />
      <Impact />
      <SupportPrograms />
<Footer />
    </main>
  );
}