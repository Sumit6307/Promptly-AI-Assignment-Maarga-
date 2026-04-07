import React from "react";

const Upcoming = () => {
  return (
    <section className="relative bg-[#F4EFE8] pt-16 pb-0 px-6 flex flex-col items-center text-center overflow-hidden">

      <div className="absolute top-8 right-6 md:top-14 md:right-16 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[180px] h-[180px] md:w-[210px] md:h-[210px] object-contain opacity-95 transition-all duration-700"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 max-w-[520px] flex flex-col items-center">

        <h2 className="font-serif text-[#2D3142] text-3xl md:text-[40px] mb-6 font-normal leading-tight">
          Looking Ahead
        </h2>

        <p className="font-serif text-[#2D3142]/85 text-[14px] md:text-[15px] leading-[1.8] mb-5 font-light">
          MAARGA continues to shape future paths with care and intention,
          <br className="hidden md:block" />
          including curated experiences around the Nashik Kumbh and other sacred routes.
        </p>

        <p className="font-serif text-[#2D3142]/85 text-[14px] md:text-[15px] leading-[1.8] mb-10 font-light">
          If you would like to know more about the paths we offer, the temples they include,
          <br className="hidden md:block" />
          their significance, and the arcs they form, we invite you to stay connected.
        </p>

        <button className="text-[#2D3142] font-serif border border-[#C9A96E] px-14 py-2.5 rounded-full text-[13px] tracking-wide hover:bg-[#2D3142] hover:text-white transition mb-12">
          Stay Connected
        </button>
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className="relative w-[400px] md:w-[500px]">
          <img
            src="/Image-5.png"
            alt="Temple Bell"
            className="w-full object-contain mix-blend-multiply opacity-55"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-[#F4EFE8] via-[#F4EFE8]/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-[#F4EFE8] to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 bottom-0 w-[15%] bg-gradient-to-r from-[#F4EFE8] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-[15%] bg-gradient-to-l from-[#F4EFE8] to-transparent pointer-events-none" />
        </div>
        <span className="font-serif text-[#21273D] tracking-[0.25em] text-xs md:text-sm uppercase -mt-10 mb-10 font-normal opacity-90">
          Maarga
        </span>
      </div>

    </section>
  );
};

export default Upcoming;