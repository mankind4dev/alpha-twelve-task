import { Avatar, Box, Flex, Text, useColorMode } from "@chakra-ui/react"; 
import React from "react";

const UserCompo = ({
  name,
  email,
  onClick,
  isOpen,
}: {
  name: string;
  email: string;
  onClick: () => void;
  isOpen: boolean;
}) => {
  const { colorMode } = useColorMode();
  return (
    <Box width={isOpen ? "100%" : "100%"} alignItems={"center"}>
      <Flex
        width={"100%"}
        cursor={"pointer"}
        alignItems={"center"}
        justifyContent={isOpen ? "center" : "center"}
        onClick={onClick}
      >
        <Flex justifyContent={isOpen ? "center" : "center"}>
          <Avatar size={"sm"} />
        </Flex>
        {isOpen ? (
          <Box
            justifyContent={isOpen ? "left" : "center"}
            width={"100%"}
            height={"100%"}
            // display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
            px={isOpen ? 2 : 0}
          >
            <Box alignItems={"center"}>
              <Text
                fontWeight={400}
                fontSize={12} 
              >
                {name}
              </Text>
              <Text
                fontWeight={400}
                fontSize={12} 
              >
                {email}
              </Text>
            </Box>
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
};

export default UserCompo;
