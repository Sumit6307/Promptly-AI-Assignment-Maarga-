import React from 'react';

const SectionWrapper = ({ children, className = '', id, hideLogo = false }) => {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {!hideLogo && (
        <div className="absolute top-6 right-6 md:top-[60px] md:right-[60px] z-20 pointer-events-none">
          <img
            src="/logo-assignment.png"
            alt="Maarga Logo"
            className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain opacity-90 transition-transform duration-700 hover:scale-105 pointer-events-auto"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
