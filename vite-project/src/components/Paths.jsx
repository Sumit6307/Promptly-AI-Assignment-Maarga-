import React from "react";

const Paths = () => {
  return (
    <section className="relative bg-[#F5F0E9] py-28 px-6 md:px-16 lg:px-24 overflow-hidden">

      <div className="absolute inset-0 flex justify-end items-center pointer-events-none z-0">
        <div className="relative w-[600px] md:w-[750px] lg:w-[900px] h-full">
          <img
            src="/Image-7.png"
            alt="Temple"
            className="w-full h-full object-contain object-right mix-blend-multiply opacity-30"
          />
          <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[0%] bg-gradient-to-l from-[#F5F0E9] to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-8 right-8 md:top-12 md:right-14 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[210px] h-[210px] md:w-[230px] md:h-[230px] object-contain"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl">

        <h2 className="font-serif text-[#2D3142] text-3xl md:text-5xl mb-6">
          The Two Paths Of Maharashtra
        </h2>

        <div className="text-[#2D3142]/70 text-sm md:text-base leading-relaxed mb-16 max-w-[520px] space-y-4">
          <p>
            MAARGA offers two complementary spiritual paths in Maharashtra.
            Each is complete in itself, and together they form a deeper arc of inner balance.
          </p>
          <p>
            One honours Shiva, the stillness of consciousness.
            The other honours Shakti, the living force of energy.
          </p>
          <p>Each path is curated with the same care.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl relative">

          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-[#2D3142]/15" />

          <div className="pr-6 md:pr-10 space-y-6">
            <div>
              <h3 className="font-serif text-[#2D3142] text-2xl md:text-3xl mb-2">
                The Shaiva Path
              </h3>
              <p className="text-[#2D3142]/60 text-sm mb-6">
                Maharashtra Jyotirlinga Circuit
              </p>
              <p className="text-[#2D3142]/70 text-sm leading-relaxed mb-6">
                A movement inward. Across forest, river, and stone, the journey settles into stillness and quiet grounding.
              </p>
              <p className="text-[#2D3142]/60 text-sm mb-3">Includes</p>
              <ul className="text-[#2D3142]/70 text-sm space-y-2">
                <li>1. Bhimashankar</li>
                <li>2. Trimbakeshwar</li>
                <li>3. Grishneshwar</li>
              </ul>
            </div>
          </div>

          <div className="pl-6 md:pl-10 space-y-6">
            <div>
              <h3 className="font-serif text-[#2D3142] text-2xl md:text-3xl mb-2">
                The Shakta Path
              </h3>
              <p className="text-[#2D3142]/60 text-sm mb-6">
                Shakti Sthalas of Maharashtra
              </p>
              <p className="text-[#2D3142]/70 text-sm leading-relaxed mb-6">
                A movement in living force. Across shrine, hill, and lineage, the journey carries resilience, protection, and grace.
              </p>
              <p className="text-[#2D3142]/60 text-sm mb-3">Includes</p>
              <ul className="text-[#2D3142]/70 text-sm space-y-2">
                <li>1. Mahalakshmi ( Ambabai ), Kolhapur</li>
                <li>2. Tulja Bhavani, Tuljapur</li>
                <li>3. Renuka Devi, Mahur</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Paths;