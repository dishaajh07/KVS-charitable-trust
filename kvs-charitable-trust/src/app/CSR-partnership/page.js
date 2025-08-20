"use client";
import React from "react";
import Nav from '../../components/layout/Nav';

import Footer from '../../components/layout/footer';
import Csr from "./Csr";

export default function whatWeDo() {
    return (
        <main>
            <Nav />
            <Csr />
            <Footer />
        </main>
    );
}