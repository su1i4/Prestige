import React, { useState, useEffect, useRef } from "react";
import { floors } from "../../lib/data";
import Hard from "../../shared/images/selling/hard.png";
import Main from "../../shared/images/selling/main.png";
import { useNavigate } from "react-router-dom";
import { Consultation } from "../../shared/components/consultation";
import { Footer } from "../../shared/components/footer";
import SwitchContact from "../../shared/components/switch-contact";
import Tooltip from "@mui/material/Tooltip"; 
import { useScrollToSection } from "../../shared/utils";

const Container = ({ children }) => (
  <div className="relative inline-block w-full">{children}</div>
);

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="block w-full" />
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
    className="absolute bg-white rounded-md border border-gray-300 p-2.5 shadow-lg z-10 transform -translate-x-1/2 -translate-y-full"
    style={{ top: `${position.y + 300}px`, left: `${position.x}px` }}
  >
    {children}
  </div>
);

export const Rent = () => {
  const { activeSection, scrollToSection } =  useScrollToSection()
  const navigate = useNavigate();
  const [activeFloorIndex, setActiveFloorIndex] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleFloorActivate = (event, index) => {
    setActiveFloorIndex(index);
    setPopoverPosition({
      x: event.clientX,
      y: event.clientY - 100,
    });
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setActiveFloorIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setPopoverPosition(popoverPosition);
  }, [popoverPosition]);

  console.log(floors[activeFloorIndex]?.floor, 'active')

  return (
    <>
      <div className="w-full h-[100vh] lg:h-fit relative">
        <div />
        <img
          src={Main}
          className="w-full h-full object-cover absolute inset-0 z-0"
          alt="background image"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 z-10" />

        <div className="absolute bottom-10 right-8 sm:bottom-6 sm:left-4 sm:right-4 xs:bottom-1 xs:left-1 xs:right-1 left-8 border-l-[3px] border-white border-solid pl-8 p-4 sm:p-2 xs:p-1 bg-black/30 z-20">
          <p className="text-[60px] lg:text-[45px] sm:text-[30px] xs:text-[22px] text-white main-font font-[600] tracking-widest">
            Аренда и продажа офисов
          </p>
          <p className="text-xl text-white lg:text-lg sm:text-sm xs:text-[14px] small-font font-[500]">
            Современный бизнес центр для вашего комфорта
          </p>
          <div className="w-full flex justify-end">
            <button onClick={() => scrollToSection('footer')} className="text-xl lg:text-lg sm:text-sm xs:text-xs sm:px-3 xs:py-1 text-white bg-[#848484] rounded-[15px] px-4 py-2">
              Контакты
            </button>
          </div>
        </div>
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
                onClick={(e) => handleFloorActivate(e, index)}
              />
              <HighlightPath
                d={floor.left.path}
                isActive={activeFloorIndex === index}
                onMouseEnter={(e) => handleFloorActivate(e, index)}
                onClick={(e) => handleFloorActivate(e, index)}
              />
            </React.Fragment>
          ))}
        </HighlightArea>
        {activeFloorIndex !== null && (
          <Popover position={popoverPosition}>
            <div className="w-[270px] flex flex-col justify-center items-center gap-4">
              <div className="w-full flex flex-col justify-center items-center">
                <p className="text-black text-[23px] font-semibold small-font">
                  {floors[activeFloorIndex].floor} этаж
                </p>
                <div className="w-[50px] h-[3px] bg-black" />
              </div>
              <p className="text-[#000000B2] text-sm font-medium small-font">
                {floors[activeFloorIndex].count} свободных помещений {floors[activeFloorIndex]?.floor < 4 ? 'в аренду': 'на продажу'}
              </p>
              <button
                onClick={() =>
                  navigate(`/rent/floors/${floors[activeFloorIndex].floor}`)
                }
                className="bg-[#848484] rounded-[15px] font-medium text-sm px-4 py-2 text-white small-font"
              >
                Перейти
              </button>
            </div>
          </Popover>
        )}
      </Container>
      <div className="w-full py-20 px-10 sm:py-4 sm:px-4 xs:py-2 xs:px-2 bg-black">
        <Consultation />
      </div>
      <Footer />
      <SwitchContact />
    </>
  );
};
