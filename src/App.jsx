import NavBar from "./components/navbar";
import TestiCard from "./components/testi-card";
import Features from "./sections/features";
import Footer from "./sections/footer";
import GetAccess from "./sections/get-access";
import Hero from "./sections/hero-section";
import Productive from "./sections/productive";
import Testimons from "./sections/testmons";

function App() {
  return (
    <>
      <div className="w-full h-full">
        <NavBar />
        <Hero />
        <Features />
        <Productive />
        <Testimons />
        <GetAccess />
        <Footer />
      </div>
    </>
  );
}

export default App;
