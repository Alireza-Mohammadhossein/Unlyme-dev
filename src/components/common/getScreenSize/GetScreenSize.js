import { useState, useEffect } from "react";

// this part is for getting screensize for react grid layout
export const GetScreenSize = () => {
  const [screenSize, setScreenSize] = useState(
    window.innerWidth >= 1700
      ? "XXL"
      : window.innerWidth < 1700 && window.innerWidth >= 1400
      ? "XL"
      : window.innerWidth < 1400 && window.innerWidth >= 1200
      ? "LG"
      : window.innerWidth < 1200 && window.innerWidth >= 996
      ? "MD"
      : window.innerWidth < 996 && window.innerWidth >= 768
      ? "SM"
      : "XS"
  );

  useEffect(() => {
    // console.log("resize", screenSize);
    const handleResize = () => {
      setScreenSize(
        window.innerWidth >= 1700
          ? "XXL"
          : window.innerWidth < 1700 && window.innerWidth >= 1400
          ? "XL"
          : window.innerWidth < 1400 && window.innerWidth >= 1200
          ? "LG"
          : window.innerWidth < 1200 && window.innerWidth >= 996
          ? "MD"
          : window.innerWidth < 996 && window.innerWidth >= 768
          ? "SM"
          : "XS"
      );
    };

    window.addEventListener("resize", handleResize);
  }, [screenSize]);

  return screenSize;
};
