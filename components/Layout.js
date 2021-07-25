import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    background: var(--black);

    --black: #000000;
    --white: #f9f9f9;
    --gray: #f0f0f0;
    --primary: #65b7d3;
    --headerbg: rgb(25,25,25);
    --fsl: 2rem;
    --fsxl: 2.5rem;
    --fsxxl: 3rem;
    --fsm: 1.2rem;
    --fss: 0.8rem;
    --fsxl: 0.5rem;
    --bs: 2px 3px 4px 0 rgba(0,0,0,0.3);
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    color: var(--white);
    background: var(--white);
  }

  #__next {
    height: 100%
  }

  a {
    color: red;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }
`;

const MainStyles = styled.main`
  height: calc(100% - 65px);
  max-width: 100vw;
  overflow-x: hidden;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <MainStyles>{children}</MainStyles>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
