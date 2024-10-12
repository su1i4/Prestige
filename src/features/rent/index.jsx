import React, { useState, useEffect, useRef } from "react";
import { floors } from "../../lib/data";
import Hard from '../../shared/images/selling/hard.png'
import { useNavigate } from "react-router-dom";

const Container = ({ children }) => (
  <div className="relative inline-block w-full">{children}</div>
);

const Image = ({ src, alt }) => (
  <img src={src} alt={alt} className="block w-full" />
);

const HighlightArea = ({ children }) => (
  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 800 600">
    {children}
  </svg>
);

const HighlightPath = ({ d, isActive, onMouseEnter, onClick }) => (
  <path
    d={d}
    className={`${
      isActive ? "fill-[#2756FC66]" : "fill-transparent"
    } cursor-pointer pointer-events-auto`}
    onMouseEnter={onMouseEnter}
    onClick={onClick}
  />
);

const Popover = ({ children, position }) => (
  <div
    className="absolute bg-white rounded-md border border-gray-300 p-2.5 shadow-lg z-10 transform -translate-x-1/2 -translate-y-full"
    style={{ top: `${position.y}px`, left: `${position.x}px` }}
  >
    {children}
  </div>
);

export const Rent = () => {
  const navigate = useNavigate()
  const [activeFloorIndex, setActiveFloorIndex] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleFloorActivate = (event, index) => {
    setActiveFloorIndex(index);
    setPopoverPosition({
      x: event.clientX,
      y: event.clientY - 20,
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

  return (
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
              <p className="text-black text-[23px] font-semibold">
                {floors[activeFloorIndex].floor} этаж
              </p>
              <div className="w-[50px] h-[3px] bg-black" />
            </div>
            <p className="text-[#000000B2] text-xs font-medium">
              {floors[activeFloorIndex].count} свободных помещений на аренду
            </p>
            <button onClick={() => navigate(`/rent/floors/${floors[activeFloorIndex].floor}`)} className="bg-[#848484] rounded-[15px] font-medium text-sm px-4 py-2 text-white">
              Перейти
            </button>
          </div>
        </Popover>
      )}
    </Container>
  );
};
