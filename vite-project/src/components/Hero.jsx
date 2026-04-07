import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#FDF9F5] overflow-hidden">
      
      <div className="absolute inset-0 z-0 flex justify-end items-center pointer-events-none overflow-hidden">
        <img
          src="/Image-1.png"
          alt="Temple Sketch"
          className="w-[140%] md:w-[100%] lg:w-[85%] h-full object-cover md:object-contain md:object-right opacity-85 mix-blend-multiply transition-opacity duration-700"
        />
      </div>

      <div className="absolute top-6 right-6 md:top-12 md:right-16 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[180px] h-[180px] md:w-[210px] md:h-[210px] object-contain transition-transform duration-500 hover:scale-105"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-[460px]">

          <h1 className="font-serif uppercase tracking-[0.22em] text-[#21273D] text-3xl md:text-[46px] mb-5 font-normal leading-tight">
            Maarga
          </h1>

          <h2 className="font-serif text-[#3E4357]/90 text-lg md:text-[23px] mb-5 font-light">
            The Path, Thoughtfully Curated
          </h2>

          <p className="text-[#525666] text-sm md:text-[15.5px] leading-[1.8] mb-10 max-w-[340px] font-light" style={{ fontWeight: 300 }}>
            Intimate, end-to-end spiritual paths where logistics recede and the inner experience can take precedence.
          </p>

          <button className="px-8 py-3 border border-[#CBAE8B] rounded-full font-serif text-[#3E4357] hover:bg-[#CBAE8B] hover:text-white transition-all duration-500 text-sm tracking-wide bg-white/30 backdrop-blur-sm">
            Walk This Path With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;