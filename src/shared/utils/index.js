import { useState } from "react";

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
