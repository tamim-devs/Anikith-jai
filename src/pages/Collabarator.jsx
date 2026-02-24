import React from "react";
import { motion } from "framer-motion";
import {
  whyWorkWithMe,
  offerings,
  processSteps,
  partners,
  principles,
} from "../constant/collaboratorData";
import { NavLink } from "react-router-dom";

/* ================= Animations ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ================= Reusable ================= */

const Container = ({ children }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="text-center mb-10 md:mb-14 lg:mb-16"
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4">
      {title}
    </h2>

    {subtitle && (
      <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
        {subtitle}
      </p>
    )}
  </motion.div>
);

const Card = ({ children }) => (
  <motion.div
    variants={fadeUp}
    className="
      bg-gradient-to-br from-[#151515] to-[#0e0e0e]
      border border-white/5
      rounded-2xl
      p-5 sm:p-6 lg:p-7
      shadow-lg
      hover:-translate-y-1
      hover:border-white/20
      transition-all
      h-full
    "
  >
    {children}
  </motion.div>
);

/* ================= Page ================= */

const Collaborator = () => {
  return (
    <div className="bg-[#0b0b0b] text-gray-200 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 text-center">
        <Container>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
            Let’s Work Together – My Offerings
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto mb-4 text-sm sm:text-base md:text-lg">
            I help people, projects, and businesses grow through insight,
            strategy, and real execution.
          </p>

          <p className="text-gray-500 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Whether you’re building a company, launching a financial project, or
            seeking guidance — I bring clarity, network, and experience to make
            it work.
          </p>

          <NavLink
            to="/contact"
            className="inline-block mt-8 md:mt-10 bg-white text-black px-8 sm:px-10 md:px-12 py-3 rounded-full font-semibold text-sm sm:text-base"
          >
            Start the Conversation
          </NavLink>
        </Container>
      </section>

      {/* ================= WHY ================= */}
      <section className="py-16 sm:py-20 md:py-24 border-t border-white/5">
        <Container>
          <SectionTitle title="Why Collaborate With Me" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {whyWorkWithMe.map((item, i) => (
              <Card key={i}>
                <div className="w-8 h-8 mb-3">
                  <img src={item.icon} className="w-8 h-8" />
                </div>

                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= OFFERINGS ================= */}
      <section className="py-16 sm:py-20 md:py-24 border-t border-white/5">
        <Container>
          <SectionTitle title="What I Bring to Your Project" />

          <div className="space-y-5 md:space-y-6 lg:space-y-7">
            {offerings.map((item, i) => (
              <Card key={i}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start">
                  <span className="w-12 h-12 shrink-0">
                    <img src={item.icon} className="w-8 h-8" />
                  </span>

                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 sm:py-20 md:py-24 border-t border-white/5">
        <Container>
          <SectionTitle title="How Collaboration Works" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {processSteps.map((step, i) => (
              <Card key={i}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-gray-500 text-sm">{i + 1}</span>

                  <div className="w-8 h-8">
                    <img src={step.icon} className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {step.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="py-16 sm:py-20 md:py-24 border-t border-white/5">
        <Container>
          <SectionTitle title="Ideal Partners" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {partners.map((p, i) => (
              <Card key={i}>
                <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm md:text-base">{p.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="py-16 sm:py-20 md:py-24 border-t border-white/5">
        <Container>
          <SectionTitle title="My Principles" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {principles.map((p, i) => (
              <Card key={i}>
                <h3 className="text-white font-semibold text-lg md:text-xl mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {p.desc}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 sm:py-24 md:py-28 text-center border-t border-white/5">
        <Container>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Let’s Build Something That Lasts
          </h2>

          <p className="text-gray-400 mb-8 md:mb-10 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            If your project is meaningful, financially sound, and built on value —
            I’m ready to explore how we can create impact together.
          </p>

          <NavLink
            to="/contact"
            className="bg-white text-black px-8 sm:px-12 py-3 rounded-full font-semibold text-sm sm:text-base"
          >
            🔥 Start the Conversation
          </NavLink>
        </Container>
      </section>
    </div>
  );
};

export default Collaborator;
