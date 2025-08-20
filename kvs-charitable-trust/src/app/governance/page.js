"use client";
import React from "react";
import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/footer';
import Governance from "./Governance";

export default function whatWeDo() {
    return (
        <main>
            <Nav />
            <Governance />
            <Footer />
        </main>
    );
}