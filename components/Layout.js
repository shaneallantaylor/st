import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';

import Header from './Header';

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
    --shift-vibrant: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    --shift-spring: linear-gradient(-45deg, #f9f7eb, #e3f1d1, #eef2bf, #d1fff4);
    --shift-tmv: linear-gradient(-45deg, #802121, #ad3421, #bf2a2a, #ab3631);
    box-sizing: border-box;
    font-family: sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    color: var(--black);
    background: var(--shift-tmv);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  #__next {
    height: 100%
  }

  a {
    color: var(--white);
  }

  a:hover {
    text-decoration: underline;
  }
  
  img {
    max-width: 100%;
  }
`;

const MainStyles = styled.main`
  height: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0 60px;
`;

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainStyles>{children}</MainStyles>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.any,
};
