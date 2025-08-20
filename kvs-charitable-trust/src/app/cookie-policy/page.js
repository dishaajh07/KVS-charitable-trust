"use client";
import React from "react";
import Nav from '../../components/layout/Nav';

import Footer from '../../components/layout/footer';
import CookiePolicy from "./CookiePolicy";

export default function whatWeDo() {
    return (
        <main>
            <Nav />
            <CookiePolicy />
            <Footer />
        </main>
    );
}