import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import React, { useState } from "react";
interface DataType {
  eventName: string;
  date: string;
  speaker: string;
  status: string;
}
const DropDownCompo = ({ data }: { data: DataType }) => {
  const size = 20;
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  return (
    <Box py={3}>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        cursor={"pointer"}
        bg={isOpen ? " rgba(241, 245, 249, 1)" : "none"}
      >
        <Flex gap={1} py={3} px={1}>
          {isOpen ? (
            <Box>
              <ArrowDown2 size={size} />
            </Box>
          ) : (
            <Box
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <ArrowRight2 size={size} />
            </Box>
          )}
          <Text fontSize={15}>{data.eventName}</Text>
        </Flex>
        {data.status === "Completed" ? (
          <Text fontSize={12} bg={"green.400"} p={2} borderRadius={100}>
            {data.status}
          </Text>
        ) : (
          <Box>
            <Text
              whiteSpace={"nowrap"}
              fontSize={12}
              bg={"blue.400"}
              p={2}
              borderRadius={100}
            >
              {data.status}
            </Text>
          </Box>
        )}
      </Flex>

      {isOpen ? (
        <Box p={1} justifyContent={"space-between"} mt={1}>
          <Flex
            justifyContent={"space-between"}
            textAlign={"center"}
            bg={"rgba(241, 245, 249, 1)"}
          >
            <Text>{data.speaker}</Text>
            <Text pr={1}>{data.date}</Text>
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
};

export default DropDownCompo;
