"use client";

import React from "react";
import { motion } from "motion/react";

const easeCustom = [0.16, 1, 0.3, 1] as const;

const pillarsData = [
  {
    id: "food",
    classSuffix: "food",
    title: "Root",
    subtitle: "The comfort of belonging.",
    desc: "Some recipes are more than instructions. They carry memories, family histories, places and people we never want to forget.",
    note: "Think family recipes, culinary stories, food-inspired resources and meaningful experiences around food.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 14.5c0 6.5 4.5 10.5 10 10.5s10-4 10-10.5H6Z" />
        <path d="M12 25v2.5M20 25v2.5M10 27.5h12" />
        <path d="M11 10.5c0-1.8 1.5-2.8 1.5-4.5" />
        <path d="M16 11c0-2 1.8-3 1.8-5" />
        <path d="M21 10.5c0-1.8-1.5-2.8-1.5-4.5" />
      </svg>
    ),
  },
  {
    id: "art",
    classSuffix: "art",
    title: "Canvas",
    subtitle: "The freedom to create.",
    desc: "Not everything needs to be productive. Some things simply need to bring us joy.",
    note: "Find inspiration, express yourself and make room for the things you love.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 5C9.9 5 5 9.9 5 16c0 5.5 4 10 9.5 10h1.8c1.5 0 2.7-1.2 2.7-2.7 0-.7-.3-1.4-.8-1.9-.5-.5-.8-1.2-.8-1.9 0-1.5 1.2-2.7 2.7-2.7h1.4c4.1 0 7.5-3.4 7.5-7.5C29 9.5 23.2 5 16 5Z" />
        <circle cx="10.5" cy="12.5" r="1.6" fill="currentColor" />
        <circle cx="15.5" cy="10" r="1.6" fill="currentColor" />
        <circle cx="21" cy="12" r="1.6" fill="currentColor" />
        <circle cx="12" cy="18" r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "awareness",
    classSuffix: "aware",
    title: "Aware",
    subtitle: "The joy of understanding.",
    desc: "A little knowledge can change how we experience an ordinary day.",
    note: "Discover thoughtful resources that help you learn, reflect and live with greater awareness.",
    icon: (
      <svg
        viewBox="0 0 32 32"
        width="34"
        height="34"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 26c4-4 8-11 9-18" />
        <path d="M17 8c2.5 1 5.5 0 6-3-.5 3.5-3 5.5-6 6Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M15 12c-3.5 0-5.5-2.5-6-5.5 3 .5 5.5 3 6 5.5Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M16 17c3.5 0 6-2 6.5-5.5-3 .5-5.5 3-6.5 5.5Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M13 21c-3 0-5-2-5.5-4.5 2.5.5 4.5 2.5 5.5 4.5Z" fill="currentColor" fillOpacity="0.15" />
      </svg>
    ),
  },
];

export default function OfferingsSection() {
  return (
    <section className="section offerings-section" id="offerings">
      <div className="wrap">
        <motion.div
          className="solution-head"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeCustom }}
        >
          <div>
            <span className="eyebrow">A thoughtful little universe</span>
            <h2>Rooted in what matters. Open to what’s possible.</h2>
          </div>
          <p>
            Root and Canvas is a space for preserving the meaningful, exploring
            the creative and discovering the everyday. Through thoughtfully
            created products, resources and experiences, we bring together three
            everyday anchors of a fulfilling life.
          </p>
        </motion.div>

        <div className="pillars">
          {pillarsData.map((item, index) => (
            <motion.article
              key={item.id}
              className={`pillar pillar-${item.classSuffix}`}
              id={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: 0.12 + index * 0.14,
                ease: easeCustom,
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 36px rgba(23, 61, 46, 0.1)",
                transition: { duration: 0.25, ease: easeCustom },
              }}
            >
              <div
                className={`pillar-icon pillar-icon-${item.classSuffix}`}
                aria-hidden="true"
              >
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3 + index * 0.14,
                  }}
                  style={{ display: "grid", placeItems: "center", width: "100%", height: "100%" }}
                >
                  {item.icon}
                </motion.div>
              </div>

              <h3 className="pillar-title">{item.title}</h3>
              <h4 className="pillar-subtitle">{item.subtitle}</h4>
              <p className="pillar-desc">{item.desc}</p>
              <p className="pillar-note">{item.note}</p>
            </motion.article>
          ))}
        </div>

        {/* Botanical leaf sprig divider */}
        <div className="sprig-divider" aria-hidden="true">
          <motion.span
            className="divider-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "right" }}
            transition={{ duration: 0.8, ease: easeCustom }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: easeCustom }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="var(--olive)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 20c3-3 6-8.5 7-14" />
              <path d="M13 6c2 1 4.5 0 5-2.5-.5 3-2.5 4.5-5 5Z" />
              <path d="M11 9.5c-3 0-4.5-2-5-4.5 2.5.5 4.5 2.5 5 4.5Z" />
              <path d="M12.5 13.5c2.5 0 4.5-1.5 5-4-2.5.5-4.5 2.5-5 4Z" />
            </svg>
          </motion.div>
          <motion.span
            className="divider-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.8, ease: easeCustom }}
          />
        </div>

        <motion.div
          className="pullquote offerings-pullquote"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: easeCustom }}
        >
          Three anchors. One meaningful life.
        </motion.div>
      </div>
    </section>
  );
}
