import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavCompo = ({
  icon,
  name,
  link,
  isOpen,
  onClick,
  isNumbers,
  isActive,
}: {
  icon: ReactNode;
  name: string;
  link: string;
  isNumbers: boolean;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
}) => { 
  return (
    <Box onClick={onClick} my={2} width={isOpen ? "100%" : "fit-content"}>
      <Link to={link}>
        <Flex
          px={isOpen ? 3 : 3}
          alignItems={"center"}
          _hover={isOpen ? { bg: "rgba(252, 247, 255, 1)" } : { bg: "none" }}
          justifyContent={"space-between"}
          _focus={isActive ? { bg: "red" } : { bg: "none" }}
        >
          <Flex alignItems={"center"} gap={3} py={3}>
            {icon}
            {isOpen ? (
              <Text 
                alignItems={"center"} 
                fontSize={14}
              >
                {name}
              </Text>
            ) : null}
          </Flex>
          {isNumbers ? (
            <>
              {isOpen ? (
                <Text 
                color={"white"}
                bg={"red"}
                  height={5}
                  pt={"1.5px"}
                  textAlign={"center"}
                  width={5}
                  fontSize={12}
                  borderRadius={100}
                >
                  3
                </Text>
              ) : null}
            </>
          ) : null}
        </Flex>
      </Link>
    </Box>
  );
};

export default NavCompo;
