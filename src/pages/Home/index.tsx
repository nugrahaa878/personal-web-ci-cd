import { useEffect } from "react";
import useCheckIsAndroid from "../../hooks/useCheckIsAndroid";
import HomeMobileView from "./views/MobileView";
import HomeDesktopView from "./views/DesktopView";

const Homepage = () => {
  const { isAndroid } = useCheckIsAndroid();

  useEffect(() => {
    console.log({ isAndroid });
  }, [isAndroid]);

  if (isAndroid) return <HomeMobileView />;

  return <HomeDesktopView />;
};

export default Homepage;
