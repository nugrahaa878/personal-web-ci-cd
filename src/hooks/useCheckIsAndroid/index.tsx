import { useEffect, useState } from "react";

const useCheckIsAndroid = () => {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const checkIsAndroid = () => {
      const windowWidth = window.innerWidth;

      const isAndroidDevice = windowWidth < 768;

      setIsAndroid(isAndroidDevice);
    };

    checkIsAndroid();

    window.addEventListener("resize", checkIsAndroid);

    return () => {
      window.removeEventListener("resize", checkIsAndroid);
    };
  }, []);

  return {
    isAndroid,
  };
};

export default useCheckIsAndroid;
