"use client";
import React from 'react'
import Nav from '../../components/layout/Nav';
import Banner from '../../components/sections/what-we-do/Banner';
import MissionVision from '@/components/sections/about-us/MissionVision';
import JourneyOfHope from '@/components/sections/about-us/JourneyOfHope';
import MeetOurHeart from '@/components/sections/about-us/MeetOurHeart';
import JoinMission from '@/components/sections/about-us/JoinMission';
import Footer from '../../components/layout/footer';


const page = () => {
  return (
    <div>
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
      <MissionVision />
      <JourneyOfHope />
      <MeetOurHeart />
      <JoinMission />
      <Footer />


    </div>
  )
}

export default page