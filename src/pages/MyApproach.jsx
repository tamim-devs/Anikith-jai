import React from "react";
import sign from "/public/images/CredentialsImage.png"

const MyApproach = () => {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white pt-24 pb-16 px-5 md:px-10 lg:px-24">

      {/* Title */}
      <h1 className="text-center text-4xl md:text-5xl font-bold tracking-wide mb-14">
        ✦ MY APPROACH  ✦
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT BIG CARD */}
        <div className="bg-[#121212] border border-[#1f1f1f] rounded-3xl p-8 h-full">
          <ul className="space-y-8">

  {[
    { img: "/images/INNOVATION-STRATEGY.png", text: "INNOVATION STRATEGY" },
    { img: "/images/VENTURE-BUILDING.png", text: "VENTURE BUILDING" },
    { img: "/images/BRAND-POSITIONING.png", text: "BRAND POSITIONING" },
    { img: "/images/PRODUCT-DEVELOPMENT (1).png", text: "PRODUCT DEVELOPMENT" },
  ].map((item, i) => (
    <li key={i} className="flex items-center gap-4">

      <div className="w-10 h-10 bg-[#1b1b1b] border border-[#2a2a2a] rounded-full flex items-center justify-center shrink-0">
        <img src={item.img} className="w-5 h-5 object-contain" />
      </div>

      <span className="text-gray-300 text-sm tracking-widest">
        {item.text}
      </span>

    </li>
  ))}

</ul>

        </div>

        {/* RIGHT SIDE */}
        <div className="lg:col-span-2 space-y-10">

          {/* 2×2 GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest">ENVISION</h2>
              <p className="text-gray-400 text-sm">
               I immerse myself in research, analysis, and strategic exploration to uncover opportunities that others might miss. My process starts with envisioning what’s possible — combining bold thinking with calculated risk-taking, creative insight, and a long-term perspective. Every idea is assessed for its potential impact, scalability, and ability to deliver maximum value for all stakeholders
              </p>
            </div>

            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest"> COLLABORATE </h2>
              <p className="text-gray-400 text-sm">
               Collaboration is the fuel behind successful ventures. I work closely with visionary founders, global networks, and high-performing teams to combine capital, insight, and operational expertise. By understanding people deeply, optimizing strengths, and fostering synergy, I help transform ideas into actionable projects where every partner benefits and grows.
             </p>
            </div>

            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest">IMPLEMENT</h2>
              <p className="text-gray-400 text-sm">
                Vision without execution is just potential. I focus on translating strategy into measurable outcomes, leveraging resources efficiently, and scaling initiatives to deliver real results. From financial planning to operational execution, I ensure every project succeeds — whether it’s a startup, investment, or a high-impact initiative — turning insight into tangible growth.
                               </p>
            </div>

            <div className="bg-[#131313] border border-[#222] rounded-2xl p-6">
              <h2 className="text-sm text-gray-300 mb-3 tracking-widest">EVOLVE</h2>
              <p className="text-gray-400 text-sm">
                Change is constant, and adaptability is key. I continuously learn, refine strategies, and embrace emerging technologies, market trends, and human insights to stay ahead. By blending innovation, discipline, and practical execution, I ensure every venture remains resilient, relevant, and positioned for long-term success.               </p>
            </div>
          </div>

         
        </div>

      </div>
    </div>
  );
};

export default MyApproach;