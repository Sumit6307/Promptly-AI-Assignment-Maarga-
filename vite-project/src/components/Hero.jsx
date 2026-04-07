import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--color-maarga-hero-bg)] overflow-hidden">
      
      <div className="absolute inset-0 z-0 flex justify-end items-center pointer-events-none overflow-hidden">
        <img
          src="/Image-1.png"
          alt="Temple Sketch"
          className="w-[140%] md:w-[110%] lg:w-[100%] h-full object-cover md:object-contain md:object-right opacity-70 mix-blend-multiply transition-opacity duration-700"
        />
      </div>


      <div className="absolute top-8 right-6 md:top-12 md:right-16 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] object-contain opacity-90 transition-transform duration-700 hover:scale-105"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="max-w-[460px]">

          <h1 className="font-serif text-[#1A1A1A] text-4xl md:text-[62px] mb-6 leading-none tracking-[0.15em] font-normal uppercase">
            Maarga
          </h1>

          <h2 className="font-serif text-[#1A1A1A]/90 text-lg md:text-[23px] mb-5 font-light">
            The Path, Thoughtfully Curated
          </h2>

          <p className="text-[#525666] text-sm md:text-[15.5px] leading-[1.8] mb-10 max-w-[340px] font-light" style={{ fontWeight: 300 }}>
            Intimate, end-to-end spiritual paths where logistics recede and the inner experience can take precedence.
          </p>

          <button className="px-10 py-3.5 border border-[var(--color-maarga-accent)] rounded-full font-serif text-[var(--color-maarga-brand)] hover:bg-[var(--color-maarga-accent)] hover:text-white transition-all duration-500 text-sm tracking-wide bg-transparent">
            Walk This Path With Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;