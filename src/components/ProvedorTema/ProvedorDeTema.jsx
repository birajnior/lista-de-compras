import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    cinzaClaro: "#f9f9f9",
    coral: "#F55B64",
    ocre: "#C2373F",
    marinho: "#131730",
  },
  espacamentos: {
    xxs: "0.25rem",
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  fontFamily: '"Krona One", sans-serif;',
};

export const ProvedorDeTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};
