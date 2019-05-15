import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Hero hero="aboutHero">
      <Banner title="About" subtitle="International Beach Resort" />
    </Hero>
  );
}
