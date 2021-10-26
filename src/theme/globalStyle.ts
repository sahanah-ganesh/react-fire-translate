import { createGlobalStyle } from "styled-components";

export const Colors = {
  deepPurple: "#201030",
  emerald: "#039B7E",
  freshTeal: "#6DC88A",
  coolPurple: "#6189AA",
  skyBlue: "#BAE4EA",
  sunYellow: "#FBB22D",
  lightGrey: "#D4D4D4",
  midGrey: "#CBCCCB",
  stone: "#838C83",
  slate: "#737474",
  redEarth: "#E12D48",
};

export const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    font-family: 'Lelo',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
