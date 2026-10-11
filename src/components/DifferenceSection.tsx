import React from "react";

export default function DifferenceSection() {
  return (
    <section className="section difference" id="difference">
      <div className="wrap difference-grid">
        <div>
          <span className="eyebrow">What makes Root and Canvas different?</span>
          <h2>Not just things to own. Things to carry with you.</h2>
          <p>
            Because growing forward doesn&apos;t have to mean leaving everything
            behind.
          </p>
        </div>

        <div className="benefits">
          <article className="benefit">
            <div className="benefit-icon">01</div>
            <h3>Made for everyday life.</h3>
            <p>
              Ideas, products and resources that find a place in your everyday
              routines.
            </p>
          </article>

          <article className="benefit">
            <div className="benefit-icon">02</div>
            <h3>Inspired by where we come from.</h3>
            <p>
              Honouring the knowledge, memories and traditions that shape us,
              while making room for new possibilities.
            </p>
          </article>

          <article className="benefit">
            <div className="benefit-icon">03</div>
            <h3>Created to spark something within you.</h3>
            <p>
              Every offering begins with a meaningful purpose—a recipe worth
              saving, a page worth writing or an idea worth exploring.
            </p>
          </article>

          <article className="benefit">
            <div className="benefit-icon">04</div>
            <h3>A growing space, with room for everyone.</h3>
            <p>
              From preserving what we inherit to discovering what we love,
              you&apos;re welcome wherever you are in your journey.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
