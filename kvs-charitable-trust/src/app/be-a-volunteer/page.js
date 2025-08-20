"use client";
import React from "react";
import Nav from '../../components/layout/Nav';
import Footer from '../../components/layout/footer';
import Volunteer from "./Volunteer";

export default function whatWeDo() {
    return (
        <main>
            <Nav />
            <Volunteer />
            <Footer />
        </main>
    );
}