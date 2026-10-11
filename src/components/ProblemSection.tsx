import React from "react";

export default function ProblemSection() {
  return (
    <section className="section problem" id="story">
      <div className="wrap">
        <div className="section-intro">
          <span className="eyebrow">Somewhere along the way</span>
          <h2>We forget the things that make life ours.</h2>
          <p>
            We get busy. We grow up. Life moves forward. And in the middle of it
            all, some of the things that once made us feel at home begin to slip
            away.
          </p>
        </div>

        <div className="problem-grid">
          <article className="problem-card">
            <div className="number">01</div>
            <h3>The recipes we thought we&apos;d always remember.</h3>
            <p>
              The taste of something made by our mothers and grandmothers. The
              little kitchen secrets passed down without a written word. The
              stories behind the food we grew up eating.
            </p>
          </article>

          <article className="problem-card">
            <div className="number">02</div>
            <h3>The creativity we keep putting off.</h3>
            <p>
              The painting we want to make, the book we want to read, the thoughts
              we want to write down—all the little things we love, waiting for us
              to find time for them again.
            </p>
          </article>

          <article className="problem-card">
            <div className="number">03</div>
            <h3>The things we wish we understood better.</h3>
            <p>
              Our bodies, our everyday choices, the world around us and the small
              practices that help us live with greater awareness.
            </p>
          </article>
        </div>

        <div className="pullquote problem-pullquote">
          <span className="pullquote-small">We don&apos;t need more things to do.</span>
          <span className="pullquote-large">
            We need more ways to reconnect with what already matters.
          </span>
        </div>
      </div>
    </section>
  );
}
