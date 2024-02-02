import BackdropNav from "../../components/BackdropNav";
import Navbar from "../../components/Navbar";

const Homepage = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflo relative">
      <Navbar />
      <BackdropNav />
    </div>
  );
};

export default Homepage;
