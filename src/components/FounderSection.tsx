"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const easeCustom = [0.16, 1, 0.3, 1] as const;

export default function FounderSection() {
  return (
    <section className="section" id="founder">
      <div className="wrap founder">
        <motion.div
          className="founder-photo"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, ease: easeCustom }}
        >
          <Image
            src="/images/muskan-priya-founder.jpeg"
            alt="Muskan Priya, Founder of Root & Canvas"
            width={600}
            height={700}
            priority
            style={{
              width: "100%",
              height: "100%",
              minHeight: "470px",
              objectFit: "cover",
            }}
          />
        </motion.div>

        <motion.div
          className="founder-copy"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, delay: 0.15, ease: easeCustom }}
        >
          <span className="eyebrow">A FRIENDLY HELLO FROM THE FOUNDER</span>
          <h2>Dear You,</h2>
          <p>
            I&apos;ve always felt that some of the most meaningful parts of life
            are also the easiest to overlook. Root and Canvas grew from my desire
            to bring these everyday anchors a little closer to our lives.
          </p>
          <p>
            It&apos;s a space I&apos;m building with a lot of heart, curiosity, and
            room to grow and I&apos;m so happy you&apos;re here!
          </p>
          <p>
            May you always find a little piece of yourself in the things you
            preserve, the things you create, and the things you discover.
          </p>
          <p>
            Until then, stay rooted in what matters and remain open to all that you
            can become.
          </p>
          <motion.p
            className="signature"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease: easeCustom }}
          >
            With warmth and sunshine,
            <br />
            Muskan Priya
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
