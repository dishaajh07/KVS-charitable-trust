"use client";
import React from 'react';
import styles from './NotFoundPage.module.css';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Artistic 404 Section */}
            <div className={styles.errorSection}>
              <div className={styles.errorArt}>
                {/* Artistic 404 with sophisticated child illustration */}
                <div className={styles.errorNumber}>
                  <span className={styles.four}>4</span>
                  <div className={styles.zeroContainer}>
                    <span className={styles.zero}>0</span>
                    {/* Professional child illustration inside the zero */}
                    <svg 
                      className={styles.childInZero}
                      viewBox="0 0 200 200" 
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Professional child illustration */}
                      <g className={styles.childFigure}>
                        {/* Background circle for depth */}
                        <circle cx="100" cy="100" r="85" fill="url(#bgGradient)" opacity="0.1"/>
                        
                        {/* Child figure - more realistic proportions */}
                        <g className={styles.child}>
                          {/* Head with proper shading */}
                          <ellipse cx="100" cy="75" rx="28" ry="32" fill="url(#skinGradient)"/>
                          <ellipse cx="100" cy="73" rx="26" ry="30" fill="url(#skinLight)"/>
                          
                          {/* Hair - more realistic */}
                          <path d="M72 60 C75 45, 85 42, 100 45 C115 42, 125 45, 128 60 C128 65, 125 68, 120 70 C115 68, 105 66, 100 67 C95 66, 85 68, 80 70 C75 68, 72 65, 72 60Z" fill="url(#hairGradient)"/>
                          <path d="M76 62 C80 48, 90 46, 100 48 C110 46, 120 48, 124 62" fill="url(#hairDark)" opacity="0.7"/>
                          
                          {/* Eyes - expressive and hopeful */}
                          <ellipse cx="90" cy="72" rx="6" ry="8" fill="#FFF"/>
                          <ellipse cx="110" cy="72" rx="6" ry="8" fill="#FFF"/>
                          <circle cx="90" cy="74" r="4" fill="url(#eyeGradient)"/>
                          <circle cx="110" cy="74" r="4" fill="url(#eyeGradient)"/>
                          <circle cx="91" cy="72" r="2" fill="#000"/>
                          <circle cx="111" cy="72" r="2" fill="#000"/>
                          <circle cx="91.5" cy="71" r="1" fill="#FFF"/>
                          <circle cx="111.5" cy="71" r="1" fill="#FFF"/>
                          
                          {/* Eyebrows */}
                          <path d="M84 66 Q90 64 96 66" stroke="url(#hairDark)" strokeWidth="2" fill="none"/>
                          <path d="M104 66 Q110 64 116 66" stroke="url(#hairDark)" strokeWidth="2" fill="none"/>
                          
                          {/* Nose */}
                          <ellipse cx="100" cy="82" rx="2" ry="3" fill="url(#noseShadow)" opacity="0.3"/>
                          <circle cx="100" cy="83" r="1.5" fill="url(#skinDark)"/>
                          
                          {/* Mouth - gentle smile */}
                          <path d="M92 90 Q100 95 108 90" stroke="url(#mouthColor)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                          <ellipse cx="100" cy="92" rx="8" ry="3" fill="url(#mouthColor)" opacity="0.2"/>
                          
                          {/* Body - child proportions */}
                          <ellipse cx="100" cy="135" rx="25" ry="35" fill="url(#clothingGradient)"/>
                          <ellipse cx="100" cy="132" rx="23" ry="32" fill="url(#clothingLight)"/>
                          
                          {/* Arms - reaching upward in hope */}
                          <ellipse cx="75" cy="120" rx="8" ry="20" fill="url(#skinGradient)" transform="rotate(-25 75 120)"/>
                          <ellipse cx="125" cy="120" rx="8" ry="20" fill="url(#skinGradient)" transform="rotate(25 125 120)"/>
                          <circle cx="70" cy="108" r="6" fill="url(#skinGradient)"/>
                          <circle cx="130" cy="108" r="6" fill="url(#skinGradient)"/>
                          
                          {/* Hands */}
                          <circle cx="68" cy="105" r="4" fill="url(#skinLight)"/>
                          <circle cx="132" cy="105" r="4" fill="url(#skinLight)"/>
                          
                          {/* Legs */}
                          <ellipse cx="88" cy="175" rx="7" ry="25" fill="url(#pantGradient)"/>
                          <ellipse cx="112" cy="175" rx="7" ry="25" fill="url(#pantGradient)"/>
                          
                          {/* Feet */}
                          <ellipse cx="88" cy="195" rx="8" ry="4" fill="url(#shoeGradient)"/>
                          <ellipse cx="112" cy="195" rx="8" ry="4" fill="url(#shoeGradient)"/>
                        </g>
                        
                        {/* Hope symbol above child */}
                        <g className={styles.hopeSymbol}>
                          <circle cx="100" cy="45" r="8" fill="url(#lightGradient)" opacity="0.8"/>
                          <circle cx="100" cy="45" r="5" fill="#FFD700" opacity="0.9"/>
                          <circle cx="100" cy="45" r="2" fill="#FFF"/>
                        </g>
                      </g>
                      
                      {/* Gradients */}
                      <defs>
                        <radialGradient id="bgGradient" cx="0.5" cy="0.3">
                          <stop offset="0%" stopColor="#FFE4B5"/>
                          <stop offset="100%" stopColor="#DEB887"/>
                        </radialGradient>
                        <linearGradient id="skinGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FDBCB4"/>
                          <stop offset="100%" stopColor="#E8A499"/>
                        </linearGradient>
                        <linearGradient id="skinLight" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FDD8D3"/>
                          <stop offset="100%" stopColor="#FDBCB4"/>
                        </linearGradient>
                        <linearGradient id="skinDark" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#D49C91"/>
                          <stop offset="100%" stopColor="#C08A7F"/>
                        </linearGradient>
                        <linearGradient id="hairGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8B4513"/>
                          <stop offset="100%" stopColor="#654321"/>
                        </linearGradient>
                        <linearGradient id="hairDark" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#654321"/>
                          <stop offset="100%" stopColor="#4A2C17"/>
                        </linearGradient>
                        <radialGradient id="eyeGradient" cx="0.3" cy="0.3">
                          <stop offset="0%" stopColor="#87CEEB"/>
                          <stop offset="100%" stopColor="#4682B4"/>
                        </radialGradient>
                        <linearGradient id="clothingGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#87CEEB"/>
                          <stop offset="100%" stopColor="#4682B4"/>
                        </linearGradient>
                        <linearGradient id="clothingLight" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#B0E0E6"/>
                          <stop offset="100%" stopColor="#87CEEB"/>
                        </linearGradient>
                        <linearGradient id="pantGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#4A4A4A"/>
                          <stop offset="100%" stopColor="#2F2F2F"/>
                        </linearGradient>
                        <linearGradient id="shoeGradient" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#8B4513"/>
                          <stop offset="100%" stopColor="#654321"/>
                        </linearGradient>
                        <linearGradient id="mouthColor" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FF6B8A"/>
                          <stop offset="100%" stopColor="#E91E63"/>
                        </linearGradient>
                        <linearGradient id="noseShadow" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#D49C91"/>
                          <stop offset="100%" stopColor="#C08A7F"/>
                        </linearGradient>
                        <radialGradient id="lightGradient" cx="0.5" cy="0.5">
                          <stop offset="0%" stopColor="#FFD700"/>
                          <stop offset="100%" stopColor="#FFA500"/>
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className={styles.fourEnd}>4</span>
                </div>
                
                {/* Service Icons - Cooking, Shelter, Hospital */}
                <div className={styles.decorativeElements}>
                  {/* Cooking/Food Service */}
                  <div className={styles.serviceIcon} style={{top: '8%', left: '8%'}}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
                      <circle cx="25" cy="25" r="22" fill="url(#cookingBg)" opacity="0.8"/>
                      <g className={styles.cookingIcon}>
                        {/* Cooking pot */}
                        <ellipse cx="25" cy="30" rx="12" ry="8" fill="url(#potGradient)"/>
                        <ellipse cx="25" cy="28" rx="12" ry="3" fill="url(#potRim)"/>
                        <rect x="15" y="25" width="20" height="8" fill="url(#potGradient)"/>
                        {/* Handle */}
                        <path d="M13 28 Q10 28 10 32 Q10 36 13 36" stroke="#8B4513" strokeWidth="2" fill="none"/>
                        <path d="M37 28 Q40 28 40 32 Q40 36 37 36" stroke="#8B4513" strokeWidth="2" fill="none"/>
                        {/* Steam */}
                        <path d="M20 20 Q20 15 18 15 Q20 15 20 10" stroke="#87CEEB" strokeWidth="2" fill="none" opacity="0.7"/>
                        <path d="M25 18 Q25 13 23 13 Q25 13 25 8" stroke="#87CEEB" strokeWidth="2" fill="none" opacity="0.7"/>
                        <path d="M30 20 Q30 15 28 15 Q30 15 30 10" stroke="#87CEEB" strokeWidth="2" fill="none" opacity="0.7"/>
                      </g>
                    </svg>
                  </div>

                  {/* Shelter/Housing */}
                  <div className={styles.serviceIcon} style={{top: '15%', right: '10%'}}>
                    <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
                      <circle cx="22.5" cy="22.5" r="20" fill="url(#shelterBg)" opacity="0.8"/>
                      <g className={styles.shelterIcon}>
                        {/* House */}
                        <path d="M10 25 L22.5 12 L35 25 L35 35 L10 35 Z" fill="url(#houseGradient)"/>
                        <path d="M10 25 L22.5 12 L35 25" stroke="#8B4513" strokeWidth="2" fill="none"/>
                        {/* Door */}
                        <rect x="19" y="28" width="7" height="7" fill="url(#doorGradient)"/>
                        <circle cx="24" cy="31.5" r="0.5" fill="#FFD700"/>
                        {/* Windows */}
                        <rect x="13" y="20" width="4" height="4" fill="url(#windowGradient)"/>
                        <rect x="28" y="20" width="4" height="4" fill="url(#windowGradient)"/>
                        <line x1="15" y1="20" x2="15" y2="24" stroke="#8B4513" strokeWidth="0.5"/>
                        <line x1="13" y1="22" x2="17" y2="22" stroke="#8B4513" strokeWidth="0.5"/>
                        <line x1="30" y1="20" x2="30" y2="24" stroke="#8B4513" strokeWidth="0.5"/>
                        <line x1="28" y1="22" x2="32" y2="22" stroke="#8B4513" strokeWidth="0.5"/>
                        {/* Heart above house */}
                        <path d="M22.5 10 C21 8, 18 8, 18 12 C18 16, 22.5 20, 22.5 20 S27 16, 27 12 C27 8, 24 8, 22.5 10 Z" fill="#FF69B4" opacity="0.8"/>
                      </g>
                    </svg>
                  </div>

                  {/* Hospital/Healthcare */}
                  <div className={styles.serviceIcon} style={{bottom: '18%', left: '12%'}}>
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                      <circle cx="24" cy="24" r="21" fill="url(#hospitalBg)" opacity="0.8"/>
                      <g className={styles.hospitalIcon}>
                        {/* Medical cross */}
                        <rect x="20" y="12" width="8" height="24" rx="2" fill="url(#crossGradient)"/>
                        <rect x="12" y="20" width="24" height="8" rx="2" fill="url(#crossGradient)"/>
                        {/* Stethoscope */}
                        <circle cx="15" cy="15" r="2" fill="none" stroke="#27AE60" strokeWidth="1.5"/>
                        <path d="M17 15 Q20 18 20 22 Q20 26 16 26 Q12 26 12 22" stroke="#27AE60" strokeWidth="1.5" fill="none"/>
                        <circle cx="12" cy="22" r="1.5" fill="#27AE60"/>
                        {/* Heart pulse */}
                        <path d="M30 30 L32 26 L34 34 L36 22 L38 30" stroke="#E74C3C" strokeWidth="2" fill="none"/>
                      </g>
                    </svg>
                  </div>

                  {/* Hope Star */}
                  <div className={styles.serviceIcon} style={{bottom: '8%', right: '15%'}}>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
                      <circle cx="17.5" cy="17.5" r="15" fill="url(#hopeBg)" opacity="0.8"/>
                      <path d="M17.5 5 L20.5 12 L27.5 12 L22 17 L24 24 L17.5 20 L11 24 L13 17 L7.5 12 L14.5 12 Z" fill="url(#hopeGradient)"/>
                      <circle cx="17.5" cy="17.5" r="3" fill="#FFF" opacity="0.9"/>
                    </svg>
                  </div>

                  {/* Education Book */}
                  <div className={styles.serviceIcon} style={{top: '25%', left: '5%'}}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <circle cx="20" cy="20" r="18" fill="url(#educationBg)" opacity="0.7"/>
                      <g className={styles.educationIcon}>
                        {/* Open book */}
                        <path d="M8 15 Q20 12 20 20 Q20 28 8 25 Z" fill="url(#bookGradient)"/>
                        <path d="M32 15 Q20 12 20 20 Q20 28 32 25 Z" fill="url(#bookGradient)"/>
                        <path d="M8 15 Q20 12 20 20" stroke="#8B4513" strokeWidth="1" fill="none"/>
                        <path d="M32 15 Q20 12 20 20" stroke="#8B4513" strokeWidth="1" fill="none"/>
                        {/* Pages */}
                        <line x1="12" y1="18" x2="16" y2="17.5" stroke="#2C3E50" strokeWidth="0.8" opacity="0.7"/>
                        <line x1="12" y1="20" x2="16" y2="19.5" stroke="#2C3E50" strokeWidth="0.8" opacity="0.7"/>
                        <line x1="24" y1="17.5" x2="28" y2="18" stroke="#2C3E50" strokeWidth="0.8" opacity="0.7"/>
                        <line x1="24" y1="19.5" x2="28" y2="20" stroke="#2C3E50" strokeWidth="0.8" opacity="0.7"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text Content */}
            <div className={styles.textContent}>
              <h2 className={styles.title}>This page is missing, but hope doesn't have to be.</h2>
              <p className={styles.subtitle}>
                Let's get you back to making a difference.
              </p>
              
              <div className={styles.actions}>
                <Link href="/" className={styles.primaryBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Go Home
                </Link>
                <Link href="/get-involved" className={styles.secondaryBtn}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  Make a Difference
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
};

export default NotFoundPage;
