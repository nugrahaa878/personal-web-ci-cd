import bktechBackdrop from "../../assets/bktech-backdrop.png";

const BackdropHero = () => {
  return (
    <img
      src={bktechBackdrop}
      className="absolute"
      style={{ left: "-15vw", top: "20vh", width: "450px" }}
    />
  );
};

export default BackdropHero;
