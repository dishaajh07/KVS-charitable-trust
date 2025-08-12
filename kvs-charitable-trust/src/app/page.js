"use client";
import React from 'react'
import Nav from '../components/layout/Nav';
import Hero from '../components/sections/home/Hero';
import WhatWeDo from '@/components/sections/home/WhatWeDo';
import Footer from '../components/layout/footer';

export default function Home() {
  return (
    <div>
<Nav />
<Hero />
<WhatWeDo />
<Footer />
    </div>
  );
}
