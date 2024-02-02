import BackdropHero from "../../components/BackdropHero";
import BackdropNav from "../../components/BackdropNav";
import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";

const Homepage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflo relative">
      <Navbar />
      <BackdropNav />
      <BackdropHero />
      <HeroSection />
    </div>
  );
};

export default Homepage;
