import styled from 'styled-components';
import Link from 'next/link';

const StyledHeader = styled.header`
  height: 70px;
  width: 100%;
  background-color: hsla(0, 0%, 0%, 0.4);
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 100%;
  padding: 0 20px;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 20px;
  &:first-child {
    margin-right: auto;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <NavItem>
          <Link href="/">ST</Link>
        </NavItem>
        <NavItem>
          <Link href="/playground">Playground</Link>
        </NavItem>
        <NavItem>
          <Link href="/blog">Blog</Link>
        </NavItem>
      </Nav>
    </StyledHeader>
  );
}
