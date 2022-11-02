import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavbarContainerStyled = styled.header`
  height: 50px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 5px 20px;
  border-bottom: 2px solid #006e52;
  


  position: sticky;
  z-index: 1;
  top: 0;
`;


export const NavbarLinkContainerStyled = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const LinkButtonStyled = styled(NavLink)`
  border: none;
  background: none;
  border: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 10px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;

    `;