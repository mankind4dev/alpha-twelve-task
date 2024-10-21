import { Box, Flex, Heading  } from "@chakra-ui/react";
import React from "react";
import BarChartSection from "./barChartSection"; 
import SwiperCompo from "./SwiperCompo";

const EventReg = () => { 
  return (
    <Box mt={10} mr={5}>
      <Heading fontSize={18} fontWeight={500}   >Event Registrations per month</Heading>
      <Flex
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        gap={4}
        alignItems={"center"}
        mt={3}
        height={"100%"}
      >
        <BarChartSection />
        <SwiperCompo />
      </Flex>
    </Box>
  );
};

export default EventReg;
