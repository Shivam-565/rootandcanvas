import React from "react";
import Image from "next/image";

export default function FounderSection() {
  return (
    <section className="section" id="founder">
      <div className="wrap founder">
        <div className="founder-photo">
          <Image
            src="/images/muskan-priya-founder.jpg"
            alt="Muskan Priya, Founder of Root & Canvas"
            width={600}
            height={700}
            priority
            style={{ width: "100%", height: "100%", minHeight: "470px", objectFit: "cover" }}
          />
        </div>

        <div className="founder-copy">
          <p className="eyebrow">A FRIENDLY HELLO FROM THE FOUNDER</p>
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
          <p className="signature">
            With warmth and sunshine,
            <br />
            Muskan Priya
            <small>Founder, Root & Canvas</small>
          </p>
        </div>
      </div>
    </section>
  );
}
