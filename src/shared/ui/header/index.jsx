import "./header.css";
import { ReactComponent as Logo } from "../../icons/Логотип.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../../lib/links";
import styled from "styled-components";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="Header">
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <Logo />
      </div>
      <div className="Routes">
        <StyledLink to={links.selling}>
          <NavText>Продажа</NavText>
        </StyledLink>
        <StyledLink to={links.rent}>
          <NavText>Аренда</NavText>
        </StyledLink>
        <StyledLink to={links.location}>
          <NavText>Расположение</NavText>
        </StyledLink>
        <StyledLink>
          <NavText>О нас</NavText>
        </StyledLink>
        <StyledLink>
          <NavText>Контакты</NavText>
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
  font-family: "Oswald", sans-serif;

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
