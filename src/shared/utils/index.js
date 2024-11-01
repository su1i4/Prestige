import { useState, useEffect } from "react";
import toast from "react-hot-toast";

export const submitRequest = async (floor = 0, office = 0, user, phone) => {
  const submissionData = {
    floorNumber: String(floor),
    officeNumber: String(office),
    userName: user,
    phoneNumber: phone
  };

  try {
    const response = await fetch('https://backend.prestigetower.kg/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submissionData)
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке запроса");
    }

    const data = await response.json();
    toast.success(data.message);
    console.log('Заявка успешно отправлена:', data);

  } catch (error) {
    toast.error("Ошибка сервера");
    console.error('Ошибка:', error);
  }
};


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
