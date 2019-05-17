import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";

export default function Contact() {
  return (
    <>
      <Hero hero="contactHero">
        <Banner title="Contact" subtitle="how can we help?" />
      </Hero>
      <section className="contact-container">
        <Title title="our address" />
        <div className="contact-info">
          <article className="desc">
            <h6>Map goes here</h6>
            <h6>....</h6>
            <h6>...</h6>
            <h6>..</h6>
          </article>
          <article className="info">
            <h6>1234 Beach Boulevard, Vancouver</h6>
            <h6>British Columbia</h6>
            <h6>V1K 2B3</h6>
          </article>
        </div>
        <Title title="contact us" />
        <article className="contact-info">
          <form>
            <label>name</label>
            <input type="text" />
            <label>email</label>
            <input type="email" />
            <label>message</label>
            <input type="text" />
            <button type="submit" className="btn-primary">
              Send
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
