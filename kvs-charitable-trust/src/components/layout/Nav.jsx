"use client";
import React, { useState, useRef } from "react";
import styles from "./Nav.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "../elements/GradientButton";
import LanguageSelector from "../elements/LanguageSelector";
import { useClickOutside } from "@/components/elements/useClickOutside"

const Nav = () => {
   const [menuOpen, setMenuOpen] = useState(false);
const dropdownRef = useRef(null);

useClickOutside(dropdownRef, () => setMenuOpen(false));

const pathname = usePathname();

  const handleSelect = (option) => {
    setMenuOpen(option);
    setIsOpen(false);
  };
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];


  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header ref={dropdownRef} className={`${styles.header} ${menuOpen ? styles.open : ""}`}>
      <div className={styles.logoWrapper}>
        <Image
          fill
          src="/icons/KVS-logo.svg"
          alt="KVS Charity trust logo"
          className={styles.logo}
        />
      </div>

      <div className={styles.mobileControls}>
        <div className={styles.callWrapper}>
          <button className={styles.callButton}>
            <Image
              src="/icons/Call.svg"
              alt="Call"
              width={40}
              height={40}
              className={styles.icon}
            />
          </button>
        </div>
        <div className={styles.languageWrapper}>
          <LanguageSelector />
        </div>
        <button className={styles.burger} onClick={toggleMenu}>
          <Image
            src={menuOpen ? "/icons/cancel.svg" : "/icons/ham-burger.svg"}
            alt={menuOpen ? "Close Menu" : "Open Menu"}
            width={24}
            height={24}
          />
        </button>
      </div>

        <nav className={styles.nav}>
  {navLinks.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      className={`${styles.link} ${pathname === href ? styles.active : ""}`}
    >
      {label}
    </Link>
  ))}
</nav>
      <div className={styles.actions}>
        <div className={styles.languageWrapper}>
          <LanguageSelector />
        </div>
        <div className={styles.callWrapper}>
          <button className={styles.callButton}>
            <Image
              src="/icons/Call.svg"
              alt="Call"
              width={40}
              height={40}
              className={styles.icon}
            />
          </button>
        </div>
        <GradientButton text="Donate now" icon="❤️" />
      </div>
    </header>
  );
};

export default Nav;