"use client";
import React from 'react'
import Nav from '../components/layout/Nav';
import Hero from '../components/sections/home/Hero';
import WhatWeDo from '@/components/sections/home/WhatWeDo';

import Programs from '@/components/sections/home/Programs';
import CoreValues from '@/components/sections/home/CoreValues';
import Milestones from '@/components/sections/home/Milestones';
import QuoteBlock from '@/components/sections/home/QuoteBlock';
import Changemaker from '@/components/sections/get-involved/Changemaker';
import Faqs from '@/components/sections/home/Faqs';
import BlogsDisplay from '@/components/sections/home/BlogsDisplay';
import Footer from '../components/layout/footer';
import Community from '@/components/sections/home/Community';

export default function Home() {
  return (
    <div>
<Nav />
<div className="headerSpacer"></div>
<Hero />
<WhatWeDo />
<Programs />
<CoreValues />
<Milestones />
<QuoteBlock />
<Changemaker />
<Community />
<Faqs />
<BlogsDisplay />
<Footer />
    </div>
  );
}
