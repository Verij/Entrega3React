import {
  NavbarContainerStyled,
  NavbarLinkContainerStyled,
} from './NavbarStyles';
import { LinkItem } from '../LinkItem/LinkItem';



function Navbar() {
  return (
    <NavbarContainerStyled>
      <NavbarLinkContainerStyled>

        <LinkItem to='/'>Home</LinkItem>
        <LinkItem to='poke'>Poke</LinkItem>
        <LinkItem to='todo'>TodoList</LinkItem>

      </NavbarLinkContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;