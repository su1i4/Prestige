import React, { useState } from "react";
import styled from "styled-components";
import Hard from "../../shared/images/selling/hard.png";

const Container = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const HighlightArea = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const HighlightPath = styled.path`
  fill: rgba(0, 0, 255, 0.3);
  cursor: pointer;
  pointer-events: all;
  &:hover {
    fill: rgba(0, 0, 255, 0.6);
  }
`;

const Popover = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  transform: translate(-50%, -100%);
  pointer-events: none;
`;

export const Rent = () => {
  const [hoveredArea, setHoveredArea] = useState(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (event, area) => {
    setHoveredArea(area);
    setPopoverPosition({
      x: event.clientX,
      y: event.clientY - 20,
    });
  };

  const handleMouseLeave = () => {
    setHoveredArea(null);
  };

  // Define path data for each floor
  const floors = [
    {
      path: "m0,250.5l247,-85.5l61,-20l0,-9l184.5,-65l297.5,106l0,41.5l-297.5,-89l-492.5,155l0,-17l0,-17z",
      label: "Penthouse",
    },
  ];

  return (
    <Container>
      <Image src={Hard} alt="Building" />
      <HighlightArea viewBox="0 0 800 600">
        {floors.map((floor, index) => (
          <HighlightPath
            key={index}
            d={floor.path}
            onMouseEnter={(e) => handleMouseEnter(e, floor.label)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </HighlightArea>
      {hoveredArea && (
        <Popover
          style={{
            top: `${popoverPosition.y}px`,
            left: `${popoverPosition.x}px`,
          }}
        >
          {hoveredArea}
        </Popover>
      )}
    </Container>
  );
};