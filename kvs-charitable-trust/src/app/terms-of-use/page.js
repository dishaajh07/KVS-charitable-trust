"use client";
import React from "react";
import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/footer';
import TermsOfUse from "./TermsOfUse";


export default function whatWeDo() {
    return (
        <main>
            <Nav />
            <TermsOfUse />
            <Footer />
        </main>
    );
}