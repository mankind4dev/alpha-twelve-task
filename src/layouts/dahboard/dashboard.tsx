import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import EventReg from "./eventReg";
import EventHis from "./eventHis";
import EventDiv from "./eventDiv";
const Dashboard = () => { 
  return (
    <Box py={5} px={{ lg: 0, md: 0, sm: 5, base: 5 }}>
      <Heading fontSize={22} fontWeight={400} >
        Welcome! here’s your summary
      </Heading>
      <EventDiv />
      <EventReg />
      <EventHis />
    </Box>
  );
};

export default Dashboard;
