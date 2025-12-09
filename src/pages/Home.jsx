// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import WhyHireMe from "../components/WhyHire.jsx";
import Process from "../components/Process.jsx";
import Metrics from "../components/Metrics.jsx";
import AuditsList from "../components/AuditList.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Tools from "../components/Tools.jsx";
import Blog from "../components/Blog.jsx";
import Resume from "../components/Resume.jsx";
import Contact from "../components/Contacts.jsx";
import SectionDivider from "../components/SectionDivider.jsx";
import FadeInWhenVisible from "../components/FadeInWhenVisible.jsx";
import Testimonials from "../components/Testimonials.jsx";
import SanskritShloka from "../components/SanskritShloka.jsx";
import FeaturedIn from "../components/FeaturedIn.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Home() {
  return (
    <div className="leading-relaxed" id="top">
      <Hero />

      {/* Featured In - Logo Marquee */}
      <FeaturedIn />

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="about">
          <About />
        </section>
      </FadeInWhenVisible>

      {/* Sanskrit Shloka - after About */}
      <SanskritShloka index={0} />

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="why">
          <WhyHireMe />
        </section>
      </FadeInWhenVisible>

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="process">
          <Process />
        </section>
      </FadeInWhenVisible>

      {/* Sanskrit Shloka - after Process */}
      <SanskritShloka index={1} />

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="metrics">
          <Metrics />
        </section>
      </FadeInWhenVisible>

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="audits">
          <AuditsList />
        </section>
      </FadeInWhenVisible>

      {/* Sanskrit Shloka - after Audits */}
      <SanskritShloka index={2} />

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="projects">
          <Projects />
        </section>
      </FadeInWhenVisible>

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="skills">
          <Skills />
        </section>
      </FadeInWhenVisible>

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="tools">
          <Tools />
        </section>
      </FadeInWhenVisible>

      {/* Sanskrit Shloka - after Tools */}
      <SanskritShloka index={3} />

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="blog">
          <Blog />
        </section>
      </FadeInWhenVisible>

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="testimonials">
          <Testimonials />
        </section>
      </FadeInWhenVisible>

      <SectionDivider />

      <FadeInWhenVisible>
        <section id="resume">
          <Resume />
        </section>
      </FadeInWhenVisible>

      {/* Sanskrit Shloka - before Contact */}
      <SanskritShloka index={4} />

      <FadeInWhenVisible>
        <section id="contact">
          <Contact />
          {/* Contact Form */}
          <ContactForm />
        </section>
      </FadeInWhenVisible>

      <div className="mb-24" />
    </div>
  );
}