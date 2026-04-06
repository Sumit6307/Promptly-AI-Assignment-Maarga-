import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FDF9F5] overflow-hidden">
      
      <div className="absolute inset-0 z-0 flex justify-end items-center pointer-events-none">
        <img
          src="/Image-1.png"
          alt="Temple Sketch"
          className="w-[120%] md:w-[90%] lg:w-[75%] h-full object-cover md:object-contain md:object-right opacity-80 mix-blend-multiply"
        />
      </div>

      <div className="absolute top-6 right-6 md:top-10 md:right-14 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[210px] h-[210px] md:w-[230px] md:h-[230px] object-contain"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-[420px]">

          <h1 className="font-serif uppercase tracking-[0.35em] text-[#21273D] text-3xl md:text-5xl mb-4">
            Maarga
          </h1>

          <h2 className="font-serif text-[#3E4357] text-lg md:text-2xl mb-4">
            The Path, Thoughtfully Curated
          </h2>

          <p className="text-[#525666] text-sm md:text-base leading-relaxed mb-8 max-w-[300px]">
            Intimate, end-to-end spiritual paths where logistics recede and the inner experience can take precedence.
          </p>

          <button className="px-6 py-2.5 border border-[#CBAE8B] rounded-full font-serif text-[#3E4357] hover:bg-[#CBAE8B] hover:text-white transition-all duration-300">
            Walk This Path With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;