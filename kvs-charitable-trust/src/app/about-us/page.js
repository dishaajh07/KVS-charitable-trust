"use client";
import React from 'react'
import Nav from '../../components/layout/Nav';
import Banner from '../../components/sections/what-we-do/Banner';
import MissionVision from '@/components/sections/about-us/MissionVision';
import JourneyOfHope from '@/components/sections/about-us/JourneyOfHope';
import MeetOurHeart from '@/components/sections/about-us/MeetOurHeart';
import SupportPrograms from '@/components/sections/about-us/SupportPrograms';
import Footer from '../../components/layout/footer';
import YouTubeVideo from '@/components/sections/about-us/YoutubeVideo';


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
      <YouTubeVideo />
      <MeetOurHeart />
      <SupportPrograms />
      <div style={{ backgroundColor: "#245b87" }}>
        <Footer />
      </div>
    </div>
  )
}

export default page