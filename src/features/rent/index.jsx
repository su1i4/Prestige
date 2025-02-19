import React, { useState, useEffect, useRef } from "react";
import { floors } from "../../lib/copy";
import Hard from "../../shared/images/selling/Монтажная область 1 (2).png";
import { useNavigate } from "react-router-dom";
import { Consultation } from "../../shared/components/consultation";
import { Footer } from "../../shared/components/footer";
import SwitchContact from "../../shared/components/switch-contact";
import { useScrollToSection } from "../../shared/utils";
import useWindowWidth from "../../shared/utils";
import Spring from "../../shared/images/spring (1).jpg";
import Autumn from "../../shared/images/autumn (1).jpg";
import Winter from "../../shared/images/winter (1).jpg";
import Summer from "../../shared/images/seasons/Sprin2.jpg";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const images = [Autumn, Spring, Winter, Summer];

const Container = ({ children }) => (
  <div className="relative inline-block w-full bg-black">{children}</div>
);

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="block w-full ml-[-1px] mr-[-1px]" />
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

const PopoverLeft = ({ children, position }) => (
  <div
    className="fixed bg-white rounded-md border border-gray-300 p-2.5 xs:p-1 shadow-lg transform -translate-y-full z-[999]"
    style={{
      top: `${position.y}px`,
      left: `${position.x}px`,
    }}
  >
    {children}
  </div>
);

const PopoverRight = ({ children, position }) => (
  <div
    className="fixed bg-white rounded-md border border-gray-300 p-2.5 xs:p-1 shadow-lg transform -translate-y-full z-[999]"
    style={{
      top: `${position.y}px`,
      right: `${position.x}px`,
    }}
  >
    {children}
  </div>
);

export const Rent = () => {
  const slideDuration = 1000;
  const pauseDuration = 2000;

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 1,
    },
    initial: 0,
    created(slider) {
      setTimeout(() => {
        slider.moveToIdx(1, true, {
          duration: slideDuration,
          easing: (t) => t,
        });
      }, pauseDuration);
    },
    animationEnded(slider) {
      setTimeout(() => {
        slider.moveToIdx((slider.track.details.abs + 1) % images.length, true, {
          duration: slideDuration,
          easing: (t) => t,
        });
      }, pauseDuration);
    },
  });

  const { activeSection, scrollToSection } = useScrollToSection();
  const navigate = useNavigate();
  const [activeFloorIndex, setActiveFloorIndex] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const [firstClick, setFirstClick] = useState(false);
  const [isPopoverFrozen, setIsPopoverFrozen] = useState(false);
  const containerRef = useRef(null);
  const [offset, setOffset] = useState();
  const [side, setSide] = useState("");

  const windowWidth = useWindowWidth();

  const handleFloorActivate = (event, index, direction) => {
    setSide(direction);
    const rect = event.target.getBoundingClientRect();
    
    if (!firstClick) {
      setActiveFloorIndex(index);
      
      setPopoverPosition({
        x: direction === "right" 
          ? window.innerWidth - rect.right - 100 
          : rect.left - 100, 
        y: rect.top < 230 ? 230 : rect.top,
      });
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
      }, 500);
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

  const render = () => {
    return (
      <div className="w-[270px] sm:w-[170px] xs:w-[150px] flex flex-col justify-center items-center gap-4 sm:gap-1">
        <div className="w-full flex flex-col justify-center items-center">
          <p className="text-black text-[23px] sm:text-sm font-semibold small-font">
            {floors[activeFloorIndex].floor} этаж
          </p>
          <div className="w-[50px] h-[3px] bg-black xs:h-[1px]" />
        </div>
        <p className="text-[#000000B2] text-sm font-medium small-font sm:text-xs xs:text-[11px] sm:text-center">
          {floors[activeFloorIndex].count} свободных помещений{" "}
          {floors[activeFloorIndex]?.floor < 4 ? "в аренду" : "на продажу"}
        </p>
        <button
          onClick={() => navigate(`/rent/floors/${floors[activeFloorIndex].floor}`)}
          className="bg-[#848484] rounded-[15px] font-medium text-sm px-4 py-2 sm:px-2 xs:px-0 xs:py-0 xs:bg-white sm:py-1 xs:text-[#848484] text-white small-font sm:text-xs"
        >
          Перейти
        </button>
      </div>
    );
  };

  return (
    <>
      <div
        ref={sliderRef}
        className="keen-slider w-full h-[100vh] lg:h-[80vh] sm:h-[60vh] xs:h-[45vh] relative overflow-hidden"
      >
        {images.map((image, index) => (
          <>
            <img
              src={image}
              className="keen-slider__slide w-full h-full object-cover absolute inset-0 z-0"
              alt={`Slide ${
                index + 1
              } Prestige Tower Bishkek, бизнес-центр в Бишкеке, аренда офисов Prestige Tower, офисы класса А Бишкек, коммерческая недвижимость Бишкек, современный бизнес-центр Бишкек, офисы в центре города Бишкек, аренда офисов в Бишкеке, офисные помещения Prestige Tower, бизнес-центр с парковкой Бишкек, аренда офиса рядом с Technodom Бишкек, офисы рядом с Дордой Плаза Бишкек, бизнес-центр с новейшими технологиями, офисы в современном здании Бишкек, Prestige Tower аренда помещений`}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 z-10" />
          </>
        ))}

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.3, duration: 0.5 },
            },
          }}
          className="absolute bottom-10 right-8 sm:bottom-6 sm:left-4 sm:right-4 xs:bottom-0 xs:left-0 xs:right-0 left-8 border-l-[3px] border-white border-solid pl-8 p-4 sm:p-2 xs:p-1 bg-black/30 z-20"
        >
          <motion.p className="text-[60px] lg:text-[45px] sm:text-[30px] xs:text-[27px] text-white main-font font-[600] tracking-widest xs:tracking-normal">
            Аренда и продажа офисов
          </motion.p>

          <motion.p className="text-2xl text-white lg:text-lg sm:text-sm xs:text-[14px] small-font font-light">
            Современный бизнес центр для вашего комфорта
          </motion.p>

          <motion.div className="w-full flex justify-end">
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
        <Image
          src={Hard}
          alt="Prestige Tower Bishkek, бизнес-центр в Бишкеке, аренда офисов Prestige Tower, офисы класса А Бишкек, коммерческая недвижимость Бишкек, современный бизнес-центр Бишкек, офисы в центре города Бишкек, аренда офисов в Бишкеке, офисные помещения Prestige Tower, бизнес-центр с парковкой Бишкек, аренда офиса рядом с Technodom Бишкек, офисы рядом с Дордой Плаза Бишкек, бизнес-центр с новейшими технологиями, офисы в современном здании Бишкек, Prestige Tower аренда помещений"
        />
        <HighlightArea>
          {floors.map((floor, index) => (
            <React.Fragment key={index}>
              <HighlightPath
                d={floor.rigth.path}
                isActive={activeFloorIndex === index}
                onMouseEnter={(e) => handleFloorActivate(e, index, "left")}
                onClick={(e) => handlePopoverClick(index)}
              />
              <HighlightPath
                d={floor.left.path}
                isActive={activeFloorIndex === index}
                onMouseEnter={(e) => handleFloorActivate(e, index, "right")}
                onClick={(e) => handlePopoverClick(index)}
              />
            </React.Fragment>
          ))}
        </HighlightArea>
        {activeFloorIndex !== null &&
          (side === "left" ? (
            <PopoverLeft position={popoverPosition}>{render()}</PopoverLeft>
          ) : (
            <PopoverRight position={popoverPosition}>{render()}</PopoverRight>
          ))}
      </Container>
      <div className="w-full py-20 px-10 sm:py-4 sm:px-4 xs:py-2 xs:px-2 bg-black mt-[-10px]">
        <Consultation />
      </div>
      <Footer />
      <SwitchContact />
    </>
  );
};
