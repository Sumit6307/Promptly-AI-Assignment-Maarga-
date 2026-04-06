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
    <section className="relative bg-[#F5F0E9] overflow-hidden py-28 px-6 md:px-16 lg:px-24">

      <div className="absolute inset-0 flex justify-end items-center pointer-events-none z-0">
        <div className="relative w-[500px] md:w-[620px] lg:w-[720px] h-full">
          <img
            src="/Image-3.png"
            alt="Temple"
            className="w-full h-full object-contain object-right mix-blend-multiply opacity-55"
          />
          <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-[15%] bg-gradient-to-b from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-[#F5F0E9] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[8%] bg-gradient-to-l from-[#F5F0E9] to-transparent pointer-events-none" />
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

      <div className="relative z-10 max-w-7xl mx-auto flex">
        <div className="max-w-[580px]">

          <h2 className="font-serif text-[#2D3142] text-3xl md:text-5xl mb-8">
            How Maarga is Different
          </h2>

          <div className="text-[#2D3142]/70 text-sm md:text-base leading-relaxed mb-12 max-w-[420px] space-y-4">
            <p>
              MAARGA is not designed as a tour.
              It is held as a path.
            </p>
            <p>
              Every decision is made to remove friction, preserve dignity,
              and allow the inner experience to take precedence.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-14 max-w-[520px]">
            {features.map((f, i) => (
              <div key={i} className="space-y-3">
                <h3 className="font-serif text-[#C29C6C] text-lg tracking-wide">
                  {f.title}
                </h3>
                <p className="text-[#2D3142]/70 text-sm leading-relaxed">
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