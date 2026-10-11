"use client";

import React from "react";
import { motion } from "motion/react";

const easeCustom = [0.16, 1, 0.3, 1] as const;

const benefitsData = [
  {
    num: "01",
    title: "Made for everyday life.",
    desc: "Ideas, products and resources that find a place in your everyday routines.",
  },
  {
    num: "02",
    title: "Inspired by where we come from.",
    desc: "Honouring the knowledge, memories and traditions that shape us, while making room for new possibilities.",
  },
  {
    num: "03",
    title: "Created to spark something within you.",
    desc: "Every offering begins with a meaningful purpose—a recipe worth saving, a page worth writing or an idea worth exploring.",
  },
  {
    num: "04",
    title: "A growing space, with room for everyone.",
    desc: "From preserving what we inherit to discovering what we love, you're welcome wherever you are in your journey.",
  },
];

export default function DifferenceSection() {
  return (
    <section className="section difference" id="difference">
      <div className="wrap difference-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeCustom }}
        >
          <span className="eyebrow">What makes Root and Canvas different?</span>
          <h2>Not just things to own. Things to carry with you.</h2>
          <p>
            Because moving forward doesn&apos;t have to mean leaving everything
            behind.
          </p>
        </motion.div>

        <div className="benefits">
          {benefitsData.map((benefit, index) => (
            <motion.article
              key={benefit.num}
              className="benefit"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: 0.1 + index * 0.12,
                ease: easeCustom,
              }}
              whileHover={{
                x: 6,
                transition: { duration: 0.25, ease: easeCustom },
              }}
            >
              <div className="benefit-icon">{benefit.num}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
