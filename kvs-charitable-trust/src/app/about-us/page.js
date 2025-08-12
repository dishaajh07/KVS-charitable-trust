"use client";
import React from 'react'
import Nav from '../../components/layout/Nav';
import Banner from '../../components/sections/what-we-do/Banner';
import Footer from '../../components/layout/footer';

const page = () => {
  return (
        <div>
<Nav />
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
<Footer />
    </div>
  )
}

export default page