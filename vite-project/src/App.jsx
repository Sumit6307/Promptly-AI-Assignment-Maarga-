import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Features from "./components/Features";
import Paths from "./components/Paths";
import Upcoming from "./components/Upcoming";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full relative">
      <main>
        <Hero />
        <Philosophy />
        <Features />
        <Paths />
        <Upcoming />
      </main>
      <Footer />
    </div>
  );
}

export default App;
