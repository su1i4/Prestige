import React, { useState, useEffect, useRef } from "react";
import { floors } from "../../lib/copy";
import Hard from "../../shared/images/selling/Монтажная область 1 (2).png"
import { useNavigate } from "react-router-dom";
import { Consultation } from "../../shared/components/consultation";
import { Footer } from "../../shared/components/footer";
import SwitchContact from "../../shared/components/switch-contact";
import { useScrollToSection } from "../../shared/utils";
import useWindowWidth from "../../shared/utils";
import Spring from "../../shared/images/spring (1).jpg";
import Autumn from "../../shared/images/autumn (1).jpg";
import Winter from "../../shared/images/winter (1).jpg";
import Summer from '../../shared/images/12.jpg'
import { motion } from "framer-motion";

const images = [Autumn, Spring, Winter, Summer];

const Container = ({ children }) => (
  <div className="relative inline-block w-full">{children}</div>
);

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="block w-full h-[130vh] sm:h-full xs" />
);

const HighlightArea = ({ children }) => (
  <svg
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
    viewBox="0 0 800 600"
  >
    {children}
  </svg>
);

const HighlightPath = ({ d, isActive, onMouseEnter, onClick }) => (
  <path
    d={d}
    className={`${
      isActive ? "fill-[#2756FC66]" : "fill-transparent"
    } cursor-pointer pointer-events-auto hover:fill-[#2756FC66]`}
    onMouseEnter={onMouseEnter}
    onClick={onClick}
  />
);

const Popover = ({ children, position }) => (
  <div
    className="absolute bg-white rounded-md border border-gray-300 p-2.5 shadow-lg transform -translate-x-1/2 -translate-y-full z-[999]"
    style={{ top: `${position.y + 300}px`, left: `${position.x}px` }}
  >
    {children}
  </div>
);

const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.3 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut", delay: 0.5 },
  },
};

export const Rent = () => {
  const { activeSection, scrollToSection } = useScrollToSection();
  const navigate = useNavigate();
  const [activeFloorIndex, setActiveFloorIndex] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [firstClick, setFirstClick] = useState(false);
  const [isPopoverFrozen, setIsPopoverFrozen] = useState(false);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState();

  const windowWidth = useWindowWidth();

  const handleFloorActivate = (event, index) => {
    if (!firstClick) {
      setActiveFloorIndex(index);
      setPopoverPosition({ x: event.clientX, y: event.clientY - offset });
    }
  };

  const handleClickOutside = (event) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target) &&
      !isPopoverFrozen
    ) {
      setActiveFloorIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverFrozen]);

  useEffect(() => {
    if (windowWidth < 400) {
      setOffset(500);
    } else if (windowWidth < 460) {
      setOffset(600);
    } else if (windowWidth < 600) {
      setOffset(50);
    } else if (windowWidth < 800) {
      setOffset(0);
    } else if (windowWidth < 1000) {
      setOffset(-300);
    } else {
      setOffset(10);
    }
  }, [windowWidth]);

  const handlePopoverClick = (index) => {
    if (!firstClick) {
      setFirstClick(true);
      setIsPopoverFrozen(true);

      setTimeout(() => {
        setIsPopoverFrozen(false);
        setFirstClick(false);
      }, 4000);
    } else {
      navigate(`/rent/floors/${floors[index].floor}`);
    }
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-full h-[100vh] lg:h-[80vh] sm:h-[60vh] xs:h-[45vh] relative overflow-hidden">
        <motion.img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          initial={{ opacity: 1, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 1, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-cover absolute inset-0 z-0"
          alt="background image"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="absolute bottom-10 right-8 sm:bottom-6 sm:left-4 sm:right-4 xs:bottom-0 xs:left-0 xs:right-0 left-8 border-l-[3px] border-white border-solid pl-8 p-4 sm:p-2 xs:p-1 bg-black/30 z-20"
        >
          <motion.p
            variants={textVariants}
            className="text-[60px] lg:text-[45px] sm:text-[30px] xs:text-[27px] text-white main-font font-[600] tracking-widest xs:tracking-normal"
          >
            Аренда и продажа офисов
          </motion.p>

          <motion.p
            variants={textVariants}
            className="text-2xl text-white lg:text-lg sm:text-sm xs:text-[14px] small-font font-light"
          >
            Современный бизнес центр для вашего комфорта
          </motion.p>

          <motion.div
            variants={buttonVariants}
            className="w-full flex justify-end"
          >
            <button
              onClick={() => scrollToSection("footer")}
              className="text-xl lg:text-lg sm:text-sm sm:px-3 xs:py-[6px] text-white bg-[#848484] rounded-[15px] px-4 py-2 xs:mt-2 small-font"
            >
              Контакты
            </button>
          </motion.div>
        </motion.div>
      </div>

      <Container ref={containerRef}>
        <Image src={Hard} alt="Building" />
        <HighlightArea>
          {floors.map((floor, index) => (
            <React.Fragment key={index}>
              <HighlightPath
                d={floor.rigth.path}
                isActive={activeFloorIndex === index}
                onMouseEnter={(e) => handleFloorActivate(e, index)}
                onClick={(e) => handlePopoverClick(index)}
              />
              <HighlightPath
                d={floor.left.path}
                isActive={activeFloorIndex === index}
                onMouseEnter={(e) => handleFloorActivate(e, index)}
                onClick={(e) => handlePopoverClick(index)}
              />
            </React.Fragment>
          ))}
        </HighlightArea>
        {activeFloorIndex !== null && (
          <Popover position={popoverPosition}>
            <div className="w-[270px] sm:w-[200px] flex flex-col justify-center items-center gap-4 sm:gap-2">
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-black text-[23px] sm:text-sm font-semibold small-font">
                  {floors[activeFloorIndex].floor} этаж
                </p>
                <div className="w-[50px] h-[3px] bg-black" />
              </div>
              <p className="text-[#000000B2] text-sm font-medium small-font sm:text-xs sm:text-center">
                {floors[activeFloorIndex].count} свободных помещений{" "}
                {floors[activeFloorIndex]?.floor < 4
                  ? "в аренду"
                  : "на продажу"}
              </p>
              <button
                onClick={() => handlePopoverClick(activeFloorIndex)}
                className="bg-[#848484] rounded-[15px] font-medium text-sm px-4 py-2 sm:px-3 sm:py-1 text-white small-font sm:text-xs"
              >
                Перейти
              </button>
            </div>
          </Popover>
        )}
      </Container>
      <div className="w-full py-20 px-10 sm:py-4 sm:px-4 xs:py-2 xs:px-2 bg-black sm:mt-[-10px]">
        <Consultation />
      </div>
      <Footer />
      <SwitchContact />
    </>
  );
};
