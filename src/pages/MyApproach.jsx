import React from "react";

const MyApproach = () => {
  return (
    <section className="bg-[#0c0c0c] text-white py-12 px-5 md:px-10 lg:px-24">

      {/* Title */}
      <h1 className="text-center text-3xl md:text-5xl font-bold tracking-wide mb-12">
        ✦ MY APPROACH ✦
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CARD */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-3xl p-8">
          <ul className="space-y-8">
            {[
              { img: "/images/INNOVATION-STRATEGY.png", text: "INNOVATION STRATEGY" },
              { img: "/images/VENTURE-BUILDING.png", text: "VENTURE BUILDING" },
              { img: "/images/BRAND-POSITIONING.png", text: "BRAND POSITIONING" },
              { img: "/images/PRODUCT-DEVELOPMENT (1).png", text: "PRODUCT DEVELOPMENT" },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">

                <div className="w-10 h-10 bg-[#1b1b1b] border border-[#2a2a2a] rounded-full flex items-center justify-center shrink-0">
                  <img
                    src={item.img}
                    alt={item.text}
                    className="w-5 h-5 object-contain"
                  />
                </div>

                <span className="text-gray-300 text-sm tracking-widest">
                  {item.text}
                </span>

              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <Card
              title="ENVISION"
              text="I immerse myself in research, analysis, and strategic exploration to uncover opportunities that others might miss. My process starts with envisioning what’s possible — combining bold thinking with calculated risk-taking and long-term perspective."
            />

            <Card
              title="COLLABORATE"
              text="Collaboration is the fuel behind successful ventures. I work closely with visionary founders and high-performing teams to transform ideas into actionable projects."
            />

            <Card
              title="IMPLEMENT"
              text="Vision without execution is just potential. I focus on translating strategy into measurable outcomes and scaling initiatives for real impact."
            />

            <Card
              title="EVOLVE"
              text="Change is constant. I continuously refine strategies and embrace emerging technologies to ensure every venture remains resilient and future-ready."
            />

          </div>

        </div>

      </div>
    </section>
  );
};

const Card = ({ title, text }) => (
  <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
    <h2 className="text-sm text-gray-300 mb-3 tracking-widest">
      {title}
    </h2>
    <p className="text-gray-400 text-sm leading-relaxed">
      {text}
    </p>
  </div>
);

export default MyApproach;