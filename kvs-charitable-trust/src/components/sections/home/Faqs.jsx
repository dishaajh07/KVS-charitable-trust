import React, { useState } from 'react';
import styles from './Faqs.module.css';

const faqs = [
  {
    question: "What does KVS Charitable Trust do?",
    answer: "We support underserved individuals through food, education, health, and hygiene services."
  },
  {
    question: "How can I donate?",
    answer: "Click the 'Donate Now' button or contact us for more ways to help."
  },
 {
    question: "What does KVS Charitable Trust do?",
    answer: "We support underserved individuals through food, education, health, and hygiene services."
  },
  {
    question: "How can I donate?",
    answer: "Click the 'Donate Now' button or contact us for more ways to help."
  },
 {
    question: "What does KVS Charitable Trust do?",
    answer: "We support underserved individuals through food, education, health, and hygiene services."
  },
  {
    question: "How can I donate?",
    answer: "Click the 'Donate Now' button or contact us for more ways to help."
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>FAQs</h2>
      <div className={styles.accordion}>
        {faqs.map((faq, idx) => (
          <div key={idx} className={styles.item}>
            <button
              className={styles.question}
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              {openIndex === idx ? (
                <img src="/icons/arrow-up.svg" alt="Up arrow" width={30} height={30} />
              ) : (
                <img src="/icons/arrow-down.svg" alt="Down arrow" width={30} height={30} />
              )}
            </button>
            {openIndex === idx && (
              <div className={styles.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;