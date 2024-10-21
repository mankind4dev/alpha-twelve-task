import { Button, Flex, Select, Text } from "@chakra-ui/react";
import React from "react";
import SearchCompo from "./searchCompo";
import { Box } from "iconsax-react";
import { BiDotsVerticalRounded, BiDownload } from "react-icons/bi";

const EventHisTable = () => {
  return (
    <>
      <Text fontSize={18} fontWeight={500}>
        Event History
      </Text>
      <Flex
        flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
        mt={1}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          gap={3}
          alignItems={"center"}
          flexGrow={"1"}
        >
          <SearchCompo />
          <Select fontSize={14} fontWeight={400}>
            <option>Date</option>
          </Select>
          <Select fontSize={14} fontWeight={400}>
            <option>Status</option>
          </Select>
          <Select fontSize={14} fontWeight={400}>
            <option>Name</option>
          </Select>
          <Box width={"100%"}>
            <Text
              fontSize={{ lg: 12, md: 12, sm: 20, base: 20 }}
              fontWeight={600}
            >
              Displaying 100 results
            </Text>
          </Box>
        </Flex>
        <Flex
          mt={{ lg: 0, md: 0, sm: 3, base: 3 }}
          flexWrap={{ lg: "nowrap", md: "nowrap", sm: "wrap", base: "wrap" }}
          alignItems={"center"}
          gap={3}
          flexGrow={"1"}
        >
          <Text fontSize={14} fontWeight={400}>
            Sort:
          </Text>
          <Select
            fontSize={{ lg: 14, md: 14, sm: 20, base: 20 }}
            fontWeight={400}
          >
            <option>Most Recent</option>
          </Select>
          <Box>
            <BiDotsVerticalRounded />
          </Box>
          <Button
            gap={2}
            border={"1px solid #ddd"}
            bg={"none"}
            color={"none"}
            px={10}
            leftIcon={<BiDownload />}
            fontSize={14}
            fontWeight={400}
          >
            Export
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default EventHisTable;
