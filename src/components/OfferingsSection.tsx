import React from "react";
import Link from "next/link";

export default function OfferingsSection() {
  return (
    <section className="section offerings-section" id="offerings">
      <div className="wrap">
        <div className="solution-head">
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
        </div>

        <div className="pillars">
          {/* Pillar 1: FOOD / ROOT */}
          <article className="pillar pillar-food" id="food">
            <div className="pillar-icon pillar-icon-food" aria-hidden="true">
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
                {/* Culinary nourishment bowl with steam/garnish */}
                <path d="M6 14.5c0 6.5 4.5 10.5 10 10.5s10-4 10-10.5H6Z" />
                <path d="M12 25v2.5M20 25v2.5M10 27.5h12" />
                <path d="M11 10.5c0-1.8 1.5-2.8 1.5-4.5" />
                <path d="M16 11c0-2 1.8-3 1.8-5" />
                <path d="M21 10.5c0-1.8-1.5-2.8-1.5-4.5" />
              </svg>
            </div>
            <span className="eyebrow pillar-eyebrow">ROOT</span>
            <h3 className="pillar-title">Food</h3>
            <h4 className="pillar-subtitle">The comfort of belonging.</h4>
            <p className="pillar-desc">
              Some recipes are more than instructions. They carry memories,
              family histories, places and people we never want to forget.
            </p>
            <p className="pillar-note">
              Think family recipes, culinary stories, food-inspired resources and
              meaningful experiences around food.
            </p>
            <Link href="#community" className="pillar-btn btn-food">
              Discover Food
            </Link>
          </article>

          {/* Pillar 2: ART / CANVAS */}
          <article className="pillar pillar-art" id="art">
            <div className="pillar-icon pillar-icon-art" aria-hidden="true">
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
                {/* Artist palette with paint wells */}
                <path d="M16 5C9.9 5 5 9.9 5 16c0 5.5 4 10 9.5 10h1.8c1.5 0 2.7-1.2 2.7-2.7 0-.7-.3-1.4-.8-1.9-.5-.5-.8-1.2-.8-1.9 0-1.5 1.2-2.7 2.7-2.7h1.4c4.1 0 7.5-3.4 7.5-7.5C29 9.5 23.2 5 16 5Z" />
                <circle cx="10.5" cy="12.5" r="1.6" fill="currentColor" />
                <circle cx="15.5" cy="10" r="1.6" fill="currentColor" />
                <circle cx="21" cy="12" r="1.6" fill="currentColor" />
                <circle cx="12" cy="18" r="1.6" fill="currentColor" />
              </svg>
            </div>
            <span className="eyebrow pillar-eyebrow">CANVAS</span>
            <h3 className="pillar-title">Art</h3>
            <h4 className="pillar-subtitle">The freedom to create.</h4>
            <p className="pillar-desc">
              Not everything needs to be productive. Some things simply need to
              bring us joy.
            </p>
            <p className="pillar-note">
              Find inspiration, express yourself and make room for the things
              you love.
            </p>
            <Link href="#community" className="pillar-btn btn-art">
              Explore Art &amp; Creativity
            </Link>
          </article>

          {/* Pillar 3: AWARENESS / AWARE */}
          <article className="pillar pillar-aware" id="awareness">
            <div className="pillar-icon pillar-icon-aware" aria-hidden="true">
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
                {/* Botanical leaf sprig */}
                <path d="M8 26c4-4 8-11 9-18" />
                <path d="M17 8c2.5 1 5.5 0 6-3-.5 3.5-3 5.5-6 6Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M15 12c-3.5 0-5.5-2.5-6-5.5 3 .5 5.5 3 6 5.5Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M16 17c3.5 0 6-2 6.5-5.5-3 .5-5.5 3-6.5 5.5Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M13 21c-3 0-5-2-5.5-4.5 2.5.5 4.5 2.5 5.5 4.5Z" fill="currentColor" fillOpacity="0.15" />
              </svg>
            </div>
            <span className="eyebrow pillar-eyebrow">AWARE</span>
            <h3 className="pillar-title">Awareness</h3>
            <h4 className="pillar-subtitle">The joy of understanding.</h4>
            <p className="pillar-desc">
              A little knowledge can change how we experience an ordinary day.
            </p>
            <p className="pillar-note">
              Discover thoughtful resources that help you learn, reflect and
              live with greater awareness.
            </p>
            <Link href="#community" className="pillar-btn btn-aware">
              Explore Awareness
            </Link>
          </article>
        </div>

        {/* Botanical leaf sprig divider */}
        <div className="sprig-divider" aria-hidden="true">
          <span className="divider-line"></span>
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
          <span className="divider-line"></span>
        </div>

        <div className="pullquote offerings-pullquote">
          Three anchors. One meaningful life.
        </div>
      </div>
    </section>
  );
}
