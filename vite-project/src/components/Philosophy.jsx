import React from "react";

const Philosophy = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-start text-center bg-[#F5F0E9] overflow-hidden px-6 pt-12 pb-0">

      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none translate-y-[20%]">
        <div className="relative w-full">
          <img
            src="/Image-2.png"
            alt="Temple Sketch"
            className="w-full h-auto object-bottom object-cover mix-blend-multiply opacity-40 grayscale"
          />
          <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-[#F5F0E9] via-[#F5F0E9]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gradient-to-t from-[#F5F0E9] to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="absolute top-8 right-6 md:top-14 md:right-16 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[180px] h-[180px] md:w-[210px] md:h-[210px] object-contain opacity-95 hover:scale-105 transition-all duration-700"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        <h2 className="font-serif text-[#2D3142] text-3xl md:text-[42px] font-normal tracking-wide mb-6">
          A Different Way of Pilgrimage
        </h2>

        <span className="block w-28 h-[0.5px] bg-[#CBAE8B] mx-auto mb-10" />

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