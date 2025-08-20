"use client";
import React from "react";
import Nav from '../components/layout/Nav';
import NotFoundPage from "./404/NotFoundPage";
import Footer from '../components/layout/footer';


export default function NotFound() {
    return (
        <main>
            <Nav />
            <NotFoundPage />
            <Footer />
        </main>
    );
}