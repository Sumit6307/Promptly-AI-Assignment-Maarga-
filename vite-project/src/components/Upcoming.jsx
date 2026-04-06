import React from "react";

const Upcoming = () => {
  return (
    <section className="relative bg-[#F4EFE8] pt-24 pb-0 px-6 flex flex-col items-center text-center overflow-hidden">

      <div className="absolute right-10 top-10 z-10">
        <img
          src="/logo-assignment.png"
          alt="Maarga Logo"
          className="w-[210px] h-[210px] md:w-[230px] md:h-[230px] object-contain"
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      <div className="relative z-10 max-w-[520px] flex flex-col items-center">

        <h2 className="font-serif text-[#2D3142] text-[38px] md:text-[42px] mb-6 font-normal">
          Looking Ahead
        </h2>

        <p className="font-serif text-[#2D3142]/70 text-[14px] leading-[1.9] mb-4">
          MAARGA continues to shape future paths with care and intention,
          including curated experiences around the Nashik Kumbh and other sacred routes.
        </p>

        <p className="font-serif text-[#2D3142]/70 text-[14px] leading-[1.9] mb-10">
          If you would like to know more about the paths we offer, the temples they include,
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
          <div className="absolute bottom-0 left-0 right-0 h-[65%] bg-gradient-to-t from-[#F4EFE8] via-[#F4EFE8]/80 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[25%] bg-gradient-to-b from-[#F4EFE8] to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 bottom-0 w-[20%] bg-gradient-to-r from-[#F4EFE8] to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-[20%] bg-gradient-to-l from-[#F4EFE8] to-transparent pointer-events-none" />
        </div>
        <span className="text-[#2D3142]/30 font-serif tracking-[0.35em] text-xs uppercase -mt-8 mb-6">
          MAARGA
        </span>
      </div>

    </section>
  );
};

export default Upcoming;