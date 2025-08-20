"use client";
import React from "react";
import Nav from '../../components/layout/Nav';
import PrivacyPolicy from "./PrivacyPolicy";
import Footer from '../../components/layout/footer';


export default function whatWeDo() {
    return (
        <main>
            <Nav />
            <PrivacyPolicy />
            <Footer />
        </main>
    );
}