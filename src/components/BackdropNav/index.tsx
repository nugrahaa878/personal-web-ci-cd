import bktechBackdrop from "../../assets/bktech-backdrop.png";
import useCheckIsAndroid from "../../hooks/useCheckIsAndroid";

const BackdropNav = () => {
  const { isAndroid } = useCheckIsAndroid();

  return (
    <img
      src={bktechBackdrop}
      className="absolute z-0"
      style={{
        right: `${isAndroid ? "-20vw" : "-10vw"}`,
        top: `${isAndroid ? "-4%" : "-15%"}`,
        width: `${isAndroid ? "250px" : "500px"}`,
      }}
      alt="backdrop-nav"
    />
  );
};

export default BackdropNav;
