"use client"
import React, { useState, useRef } from "react";
import styles from "./LanguageSelector.module.css";
import { useClickOutside } from "@/components/elements/useClickOutside"

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("ENG");
const dropdownRef = useRef(null);

useClickOutside(dropdownRef, () => setIsOpen(false));

  const options = ["ENG", "हिन्दी", "ಕನ್ನಡ"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected}
        <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className={`${styles.dropdownItem} ${
                selected === option ? styles.active : ""
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
