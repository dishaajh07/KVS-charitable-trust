"use client";
import React from 'react'
import Nav from '../../../components/layout/Nav';
import Blog from '@/components/sections/blogs/blog-section/Blog';

import Footer from '../../../components/layout/footer';

const page = () => {
  return (
<div>
    <Nav />
    <div className="headerSpacer"></div>
<Blog />
<Footer />
</div>
  )
}

export default page