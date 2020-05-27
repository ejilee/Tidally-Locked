import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    offWhite: "#F9F9F9",
    milkyWhite: "rgba(255, 255, 255, 0.8)",
    clearWhite: "rgba(255, 255, 255, 0.25)",
    darkGray: "#1d1d1d",
    textGray: "#222222",
    uiGray: "#333333",
    lightGray: "#666666",
    accentColor: "#0037ff",
  },
  spacing: {
    borderRadius: "6px",
  },
  threshold: {
    mobile: "(max-width: 600px)",
    tablet: "(min-width: 760px)",
    desktop: "(min-width: 991px)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
