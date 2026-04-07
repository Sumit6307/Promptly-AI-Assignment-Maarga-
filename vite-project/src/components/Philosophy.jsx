import React from "react";

const Philosophy = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#FAF4F0] to-[#F7F2EE] overflow-hidden px-6 pb-24">

      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none translate-y-[15%]">
        <div className="relative w-full max-w-[1200px] mx-auto">
          <img
            src="/Image-2.png"
            alt="Temple Sketch"
            className="w-full h-auto object-bottom object-cover mix-blend-multiply opacity-35 grayscale"
          />
          <div className="absolute top-0 left-0 right-0 h-[70%] bg-gradient-to-b from-[#FAF4F0] via-[#FAF4F0]/60 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-[#FAF4F0] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-[#FAF4F0] to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-8 right-6 md:top-12 md:right-16 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] object-contain opacity-90 transition-transform duration-700 hover:scale-105"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        <h2 className="font-serif text-[#1A1A1A] text-3xl md:text-[44px] font-normal tracking-wide mb-8">
          A Different Way of Pilgrimage
        </h2>

        <span className="block w-32 h-[0.5px] bg-[var(--color-maarga-accent)] mx-auto mb-12" />

        <div className="text-[#2D3142]/85 text-sm md:text-[15px] leading-[1.8] space-y-6 max-w-xl font-light">
          <p>
            MAARGA exists to remove the noise that often surrounds spiritual travel.
            <br />
            When logistics recede, something quieter can emerge.
            <br />
            Presence. Reflection. Meaning.
          </p>
          <p>
            This is not about doing more.
            <br />
            It is about moving rightly.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Philosophy;