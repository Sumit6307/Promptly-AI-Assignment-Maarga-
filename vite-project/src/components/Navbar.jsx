export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center">
      <div className="w-10"></div> 
      <nav className="hidden md:flex gap-12 text-sm tracking-[0.2em] font-medium text-maarga-text">
        <a href="#about" className="hover:opacity-70 transition-opacity">ABOUT</a>
        <a href="#paths" className="hover:opacity-70 transition-opacity">THE PATHS</a>
        <a href="#experience" className="hover:opacity-70 transition-opacity">EXPERIENCE</a>
        <a href="#journal" className="hover:opacity-70 transition-opacity">JOURNAL</a>
      </nav>
      <button className="border border-maarga-text rounded-full px-6 py-2 text-sm font-medium hover:bg-maarga-text hover:text-white transition-all uppercase tracking-widest">
        Contact Us
      </button>
    </header>
  );
}
