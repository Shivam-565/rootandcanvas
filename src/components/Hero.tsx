"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const easeCustom = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Background artwork with gentle scale settle */}
      <motion.div
        className="hero-art-backdrop"
        initial={{ scale: 1.05, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: easeCustom }}
      >
        <Image
          src="/images/hero-art.jpg"
          alt="Thoughtfully arranged food and ingredients on a warm kitchen table"
          fill
          priority
          sizes="100vw"
          className="hero-art-img"
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
        {/* Smooth gradient fade overlay merging the left text into the image */}
        <div className="hero-fade-overlay" aria-hidden="true" />
      </motion.div>

      {/* Hero content with choreographed entrance */}
      <div className="wrap hero-content">
        <div className="hero-copy">
          <motion.div
            className="hero-tags"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: easeCustom }}
          >
            Heritage · Creation · Learning
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: easeCustom }}
          >
            Preserving what matters.
            <br />
            Creating what’s next.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42, ease: easeCustom }}
          >
            We often inherit beautiful things without documenting them, experience
            things without pausing to understand them, and create things without
            thinking about what they might mean years from now.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.54, ease: easeCustom }}
          >
            Root and Canvas sits somewhere in between what we inherit and what we
            create.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
