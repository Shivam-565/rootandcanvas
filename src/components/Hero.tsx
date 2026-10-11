import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      {/* Background artwork stretched across the entire section */}
      <div className="hero-art-backdrop" style={{ position: "absolute", inset: 0 }}>
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
      </div>

      {/* Hero content aligned in container */}
      <div className="wrap hero-content">
        <div className="hero-copy">
          <div className="hero-tags">Heritage · Creation · Learning</div>
          <h1>
            Preserving what matters.
            <br />
            Creating what’s next.
          </h1>
          <p>
            We often inherit beautiful things without documenting them, experience
            things without pausing to understand them, and create things without
            thinking about what they might mean years from now.
          </p>
          <p>
            Root and Canvas sits somewhere in between what we inherit and what we
            create.
          </p>
          <div className="hero-buttons">
            <Link href="#offerings" className="btn primary">
              Explore Offerings
            </Link>
            <Link href="#story" className="btn secondary">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
