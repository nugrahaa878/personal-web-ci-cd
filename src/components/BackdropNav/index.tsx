import bktechBackdrop from "../../assets/bktech-backdrop.png";

const BackdropNav = () => {
  return (
    <img
      src={bktechBackdrop}
      className="absolute z-0"
      style={{ right: "-10vw", top: "-15%", width: "500px" }}
    />
  );
};

export default BackdropNav;
