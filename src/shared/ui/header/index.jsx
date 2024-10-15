import React, { useState } from "react";
import "./header.css";
import { ReactComponent as Logo } from "../../icons/Логотип.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../../lib/links";
import styled from "styled-components";
import { useScrollToSection } from "../../utils";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const navigate = useNavigate();

  const { activeSection, scrollToSection } = useScrollToSection()

  return (
    <div className="Header">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <Logo />
      </div>

      <div className="BurgerMenu" onClick={() => setMenuOpen(!menuOpen)}>
        <RxHamburgerMenu size={25} className="text-white" />
      </div>

      <div className={`Routes ${menuOpen ? "open" : ""}`}>
        <StyledLink to={links.selling}>
          <NavText className="small-font">Продажа</NavText>
        </StyledLink>
        <StyledLink to={links.rent}>
          <NavText className="small-font">Аренда</NavText>
        </StyledLink>
        <StyledLink to={links.location}>
          <NavText className="small-font">Преимущества</NavText>
        </StyledLink>
        <StyledLink>
        <p className="text-white small-font" onClick={() => scrollToSection('sulaiman')}>О нас</p>
        </StyledLink>
        <StyledLink>
          <p className="text-white small-font" onClick={() => scrollToSection('footer')}>Контакты</p>
        </StyledLink>
      </div>
    </div>
  );
};

const NavText = styled.p`
  position: relative;
  color: white;
  line-height: 26.25px;
  font-size: 17px;
  letter-spacing: 1px;
  font-weight: 500;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
`;
