"use client";

import React from "react";
import { motion } from "motion/react";

const easeCustom = [0.16, 1, 0.3, 1] as const;

export default function ProblemSection() {
  const cards = [
    {
      number: "01",
      title: "The recipes we thought we'd always remember.",
      desc: "The taste of something made by our mothers and grandmothers. The little kitchen secrets passed down without a written word. The stories behind the food we grew up eating.",
    },
    {
      number: "02",
      title: "The creativity we keep putting off.",
      desc: "The painting we want to make, the book we want to read, the thoughts we want to write down—all the little things we love, waiting for us to find time for them again.",
    },
    {
      number: "03",
      title: "The things we wish we understood better.",
      desc: "Our bodies, our everyday choices, the world around us and the small practices that help us live with greater awareness.",
    },
  ];

  return (
    <section className="section problem" id="story">
      <div className="wrap">
        <motion.div
          className="section-intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: easeCustom }}
        >
          <span className="eyebrow">Somewhere along the way</span>
          <h2>We forget the things that make life ours.</h2>
          <p>
            We get busy. We grow up. Life moves forward. And in the middle of it
            all, some of the things that once made us feel at home begin to slip
            away.
          </p>
        </motion.div>

        <div className="problem-grid">
          {cards.map((card, index) => (
            <motion.article
              key={card.number}
              className="problem-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.75,
                delay: index * 0.16,
                ease: easeCustom,
              }}
              whileHover={{ y: -4 }}
            >
              <div className="number">{card.number}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="pullquote problem-pullquote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, delay: 0.2, ease: easeCustom }}
        >
          <span className="pullquote-small">We don&apos;t need more things to do.</span>
          <span className="pullquote-large">
            We need more ways to reconnect with what already matters.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
