import bktechBackdrop from "../../assets/bktech-backdrop.png";
import useCheckIsAndroid from "../../hooks/useCheckIsAndroid";

const BackdropHero = () => {
  const { isAndroid } = useCheckIsAndroid();

  return (
    <img
      src={bktechBackdrop}
      className="absolute z-0"
      style={{
        left: `${isAndroid ? "-20vw" : "-15vw"}`,
        top: `${isAndroid ? "50vh" : "20vh"}`,
        width: `${isAndroid ? "250px" : "450px"}`,
      }}
      alt="backdrop-hero"
    />
  );
};

export default BackdropHero;
