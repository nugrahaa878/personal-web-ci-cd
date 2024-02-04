import BackdropHero from "../../../../components/BackdropHero";
import BackdropNav from "../../../../components/BackdropNav";
import HumbergerMenu from "../../../../components/HumbergerMenu";
import HeroSection from "../../components/HeroSection";

const HomeMobileView = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflo relative">
      <HumbergerMenu />
      <BackdropNav />
      <BackdropHero />
      <HeroSection />
    </div>
  );
};

export default HomeMobileView;
