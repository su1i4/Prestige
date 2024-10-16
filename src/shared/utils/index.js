import { useState, useEffect } from "react";

export const useScrollToSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const navbarHeight = 70;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  return { activeSection, scrollToSection };
};


function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(1300);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowWidth;
}

export default useWindowWidth;
