import { Box, Flex, Text,   } from "@chakra-ui/react";
import React from "react";
import InfoIcon from "../icons/InfoIcon";
import ArrowUpIcon from "../icons/ArrowUpIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";

const EventsCompo = ({
  name,
  number,
  status,
  statsText, 
}: {
  name: string;
  number: string;
  status: boolean;
  statsText: string; 
}) => {  
  return (
    <Box
      p={3}
      border={"1px solid rgba(242, 242, 247, 1)"}
      boxShadow={"sm"}
      borderRadius={5}
      cursor={"pointer"}
      width={"100%"}
      display={"flex"}
      flexGrow={1}
    >
      <Box>
        <Flex alignItems={"center"} gap={2}>
          <Text
            fontWeight={600}
            fontSize={16} 
          >
            {name}
          </Text>

          <InfoIcon  />
        </Flex>

        <Flex mt={1} alignItems={"center"} gap={1}>
          <Text
            fontWeight={600}
            fontSize={20} 
          >
            {number}
          </Text>
          {status ? <ArrowUpIcon /> : <ArrowDownIcon />}
          <Text color={status ? "green" : "red"} fontWeight={600} fontSize={10}>
            {statsText}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default EventsCompo;
