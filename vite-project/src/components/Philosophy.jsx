import React from "react";

const Philosophy = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-start text-center bg-[#F5F0E9] overflow-hidden px-6 pt-24 pb-0">

      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
        <div className="relative w-full">
          <img
            src="/Image-2.png"
            alt="Temple Sketch"
            className="w-full h-auto object-bottom object-cover mix-blend-multiply opacity-50"
          />
          <div className="absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 left-0 w-[8%] bg-gradient-to-r from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-[#F5F0E9] to-transparent pointer-events-none" />
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

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

        <h2 className="font-serif text-[#2D3142] text-3xl md:text-5xl font-normal tracking-wide mb-4">
          A Different Way of Pilgrimage
        </h2>

        <span className="block w-24 h-[1px] bg-[#2D3142]/25 mx-auto mb-8" />

        <div className="text-[#2D3142]/70 text-sm md:text-base leading-relaxed space-y-5 max-w-xl">
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