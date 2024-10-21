import { Box } from "@chakra-ui/react";
import React from "react";
import Layout from "../../layouts/layout";
import Dashboard from "../../layouts/dahboard/dashboard";

const Home = ({
  isDarkMode,
  toggleDarkMode,
}: {
  toggleDarkMode: any;
  isDarkMode: any;
}) => {
  return (
    <Box>
      <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} >
        <Dashboard />
      </Layout>
    </Box>
  );
};

export default Home;
