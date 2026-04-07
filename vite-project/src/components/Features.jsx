import React from "react";

const Features = () => {
  const features = [
    {
      title: "Lived curation",
      desc: "We offer only paths we have personally undertaken. Each route and rhythm is shaped through direct experience.",
    },
    {
      title: "End - to - End care",
      desc: "Travel, stays, access, food, and pacing are quietly handled, allowing attention to rest on presence.",
    },
    {
      title: "Intimacy Over scale",
      desc: "Small groups. Unhurried schedules. Depth is prioritised over numbers.",
    },
    {
      title: "Comfort without Dilution",
      desc: "Thoughtful comfort preserves both energy and intent.",
    },
  ];

  return (
    <section className="relative bg-[#F7F2EE] overflow-hidden py-24 px-6 md:px-16 lg:px-24">

      <div className="absolute inset-0 flex justify-end items-center pointer-events-none z-0">
        <div className="relative w-[500px] md:w-[620px] lg:w-[800px] h-full">
          <img
            src="/Image-3.png"
            alt="Temple"
            className="w-full h-full object-contain object-right mix-blend-multiply opacity-50 sepia-[0.3]"
          />
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#F7F2EE] via-[#F7F2EE]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-[25%] bg-gradient-to-b from-[#F7F2EE] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[25%] bg-gradient-to-t from-[#F7F2EE] to-transparent pointer-events-none" />
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

      <div className="relative z-10 max-w-7xl mx-auto flex">
        <div className="max-w-[580px]">

          <div className="relative inline-block mb-10">
            <h2 className="font-serif text-[#1A1A1A] text-3xl md:text-[42px] leading-tight mb-2">
              How Maarga is Different
            </h2>
            <div className="w-48 h-[0.5px] bg-[var(--color-maarga-accent)]" />
          </div>

          <div className="text-[#1A1A1A]/80 text-sm md:text-[15px] leading-[1.8] mb-16 max-w-[440px] space-y-6 font-light">
            <p>
              MAARGA is not designed as a tour.
              <br />
              It is held as a path.
            </p>
            <p>
              Every decision is made to remove friction, preserve dignity,
              and allow the inner experience to take precedence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-16 max-w-[560px]">
            {features.map((f, i) => (
              <div key={i} className="space-y-4">
                <h3 className="font-serif text-[var(--color-maarga-accent)] text-[17px] tracking-wide">
                  {f.title}
                </h3>
                <p className="text-[#1A1A1A]/75 text-sm leading-relaxed font-light">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;