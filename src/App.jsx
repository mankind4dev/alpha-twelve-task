import React, { useState } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/home";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: isDarkMode ? "rgba(56, 53, 68, 1)" : "white",
          color: isDarkMode ? "white" : "rgba(56, 53, 68, 1)",
        },
      },
    },
  });
  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <ChakraProvider theme={theme}>
            <Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </ChakraProvider>
        }
      />
    </Routes>
  );
};

export default App;
