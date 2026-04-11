import React from "react";
import SectionWrapper from "./SectionWrapper";

const Paths = () => {
  return (
    <SectionWrapper className="bg-[#F7F2EE] py-24 px-6 md:px-16 lg:px-24">

      <div className="absolute inset-0 flex justify-end items-center pointer-events-none z-0">
        <div className="relative w-[600px] md:w-[750px] lg:w-[900px] h-full">
          <img
            src="/Image-7.png"
            alt="Temple"
            className="w-full h-full object-contain object-right mix-blend-multiply opacity-50 sepia-[0.2]"
            style={{ maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl">

        <h2 className="font-serif text-[#1A1A1A] text-3xl md:text-[40px] mb-6 leading-tight">
          The Two Paths Of Maharashtra
        </h2>

        <div className="text-[#1A1A1A]/80 text-sm md:text-[15px] leading-[1.8] mb-12 max-w-[540px] space-y-5 font-light">
          <p>
            MAARGA offers two complementary spiritual paths in Maharashtra.
            <br />
            Each is complete in itself, and together they form a deeper arc of inner balance.
          </p>
          <p>
            One honours Shiva, the stillness of consciousness.
            <br />
            The other honours Shakti, the living force of energy.
          </p>
          <p className="italic text-[var(--color-maarga-accent)]">Each path is curated with the same care.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-20 max-w-4xl relative">

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[0.5px] bg-[var(--color-maarga-accent)]/20" />

          <div className="md:pr-12 space-y-6">
            <div>
              <h3 className="font-serif text-[#1A1A1A] text-2xl md:text-3xl mb-3">
                The Shaiva Path
              </h3>
              <p className="text-[var(--color-maarga-accent)] text-sm mb-6 font-medium tracking-wide uppercase">
                Maharashtra Jyotirlinga Circuit
              </p>
              <p className="text-[#1A1A1A]/75 text-[15px] leading-relaxed mb-8 font-light">
                A movement inward. Across forest, river, and stone, the journey settles into stillness and quiet grounding.
              </p>
              <p className="text-[#1A1A1A]/60 text-xs uppercase tracking-widest mb-4">Includes</p>
              <ul className="text-[#1A1A1A]/80 text-sm space-y-3 font-light">
                <li>01. Bhimashankar</li>
                <li>02. Trimbakeshwar</li>
                <li>03. Grishneshwar</li>
              </ul>
            </div>
          </div>

          <div className="md:pl-12 space-y-6 mt-12 md:mt-0">
            <div>
              <h3 className="font-serif text-[#1A1A1A] text-2xl md:text-3xl mb-3">
                The Shakta Path
              </h3>
              <p className="text-[var(--color-maarga-accent)] text-sm mb-6 font-medium tracking-wide uppercase">
                Shakti Sthalas of Maharashtra
              </p>
              <p className="text-[#1A1A1A]/75 text-[15px] leading-relaxed mb-8 font-light">
                A movement in living force. Across shrine, hill, and lineage, the journey carries resilience, protection, and grace.
              </p>
              <p className="text-[#1A1A1A]/60 text-xs uppercase tracking-widest mb-4">Includes</p>
              <ul className="text-[#1A1A1A]/80 text-sm space-y-3 font-light">
                <li>01. Mahalakshmi ( Ambabai ), Kolhapur</li>
                <li>02. Tulja Bhavani, Tuljapur</li>
                <li>03. Renuka Devi, Mahur</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Paths;