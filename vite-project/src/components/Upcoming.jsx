import React from "react";

const Upcoming = () => {
  return (
    <section className="relative bg-[#F7F2EE] py-24 pb-0 px-6 flex flex-col items-center text-center overflow-hidden">

      <div className="absolute top-8 right-6 md:top-12 md:right-16 z-20">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[180px] h-[180px] md:w-[200px] md:h-[200px] object-contain opacity-90 transition-transform duration-700 hover:scale-105"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 max-w-[520px] flex flex-col items-center">

        <h2 className="font-serif text-[#1A1A1A] text-3xl md:text-[40px] mb-8 font-normal leading-tight">
          Looking Ahead
        </h2>

        <p className="font-serif text-[#1A1A1A]/80 text-[14px] md:text-[15px] leading-[1.8] mb-6 font-light">
          MAARGA continues to shape future paths with care and intention,
          <br className="hidden md:block" />
          including curated experiences around the Nashik Kumbh and other sacred routes.
        </p>

        <p className="font-serif text-[#1A1A1A]/80 text-[14px] md:text-[15px] leading-[1.8] mb-12 font-light">
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
            className="w-full object-contain mix-blend-multiply opacity-50"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-[#F7F2EE] via-[#F7F2EE]/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-[#F7F2EE] to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 bottom-0 w-[20%] bg-gradient-to-r from-[#F7F2EE] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-[20%] bg-gradient-to-l from-[#F7F2EE] to-transparent pointer-events-none" />
        </div>
        <span className="font-serif text-[#1A1A1A] tracking-[0.35em] text-xs md:text-sm uppercase -mt-8 mb-12 font-medium opacity-80">
          Maarga
        </span>
      </div>

    </section>
  );
};

export default Upcoming;