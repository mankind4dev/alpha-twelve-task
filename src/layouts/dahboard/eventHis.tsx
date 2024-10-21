import {
  Box,
  Button,
  Flex,
  Select,
  Text,  
  TableContainer,
  IconButton,  
} from "@chakra-ui/react";
import React from "react";
import SearchCompo from "../../components/searchCompo";
import { BiDotsVerticalRounded, BiDownload } from "react-icons/bi";
import {  ArrowLeft2, ArrowRight2 } from "iconsax-react"; 
import DropDownCompo from "../../components/dropDownCompo";
import TableCompo from "../../components/TableCompo";

interface DataType {
  eventName: string;
  date: string;
  speaker: string;
  status: string;
}

const EventHis = () => {
  const data: DataType[] = [
    {
      date: "2024-10-15",
      eventName: "Cloud Innovation Summit",
      speaker: "Jane Doe",
      status: "Completed",
    },
    {
      date: "2024-10-15",
      eventName: "Blockchain Revolution Conference",
      speaker: "Dr. Peter Smith",
      status: "In Progress",
    },
    {
      date: "2024-11-05",
      eventName: "AI in Healthcare Symposium",
      speaker: "Dr. Aisha Malik",
      status: "Completed",
    },
    {
      date: "2024-11-25",
      eventName: "Future of Fintech Forum",
      speaker: "John Lee",
      status: "Completed",
    },
    {
      date: "2024-11-12",
      eventName: "Data Analytics in Business",
      speaker: "Rachel Moore",
      status: "Completed",
    },
    {
      date: "2024-09-28",
      eventName: "Sustainable Energy Expo",
      speaker: "Prof. Alan Green",
      status: "Completed",
    },
    {
      date: "2024-10-10",
      eventName: "Web3 Interfaces Workshop",
      speaker: "Prof. Alan Green",
      status: "In Progress",
    },
    {
      date: "2024-11-19",
      eventName: "Cybersecurity for Startups",
      speaker: "Kelvin Adams",
      status: "Completed",
    },
    {
      date: "2024-10-18",
      eventName: "Smart Cities Forum",
      speaker: "Emily Zhang",
      status: "In Progress",
    },
    {
      date: "2024-09-30",
      eventName: "Tech Safari Mixer",
      speaker: "Guest Panel",
      status: "In Progress",
    },
  ];

  return (
    <Box mt={10} mr={5}>
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
          <Flex justifyContent={"space-between"} gap={3}>
            <Box
              p={3}
              borderRadius={5}
              cursor={"pointer"}
              border={"1px solid #ddd"}
              marginLeft={{ sm: "auto", base: "auto" }}
            >
              <BiDotsVerticalRounded />
            </Box>
            <Flex justifyContent={{ base: "space-between" }}>
              <Button
                gap={2}
                border={"1px solid #ddd"}
                bg={"none"}
                color={"none"}
                px={10}
                fontSize={14}
                fontWeight={400}
                marginLeft={"auto"}
                leftIcon={<BiDownload />}
              >
                Export
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Box
        my={5}
        display={{ lg: "none", md: "none", sm: "block", base: "block" }}
      >
        <Flex bg={"blue.100"} p={4} justifyContent={"space-between"}>
          <Text>Event</Text>
          <Text>Status</Text>
        </Flex>

        {data.map((d, key) => (
          <DropDownCompo data={d} key={key} />
        ))}
      </Box>

      <Box display={{ lg: "block", md: "block", sm: "none", base: "none" }}>
        <TableContainer mt={5}>
          <TableCompo />
        </TableContainer>
      </Box>

      <Box>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Flex gap={{ lg: 2, md: 2, sm: 1, base: 1 }} cursor={"pointer"}>
            <IconButton aria-label="Arrow" icon={<ArrowLeft2 size={15} />} />
            <Text
              width={10}
              textAlign={"center"}
              pt={2}
              borderRadius={100}
              background={"rgba(133, 118, 255, 1)"}
              color={"rgba(255, 255, 255, 1)"}
            >
              1
            </Text>
            <Text width={10} textAlign={"center"} pt={1} borderRadius={100}>
              2
            </Text>
            <Text width={10} textAlign={"center"} pt={1} borderRadius={100}>
              3
            </Text>
            <IconButton
              bg={"none"}
              border={"1px solid #ddd"}
              _hover={{ bg: "none" }}
              aria-label="Arrow"
              icon={<ArrowRight2 size={15} />}
            />
          </Flex>
          <Flex
            textAlign={"center"}
            gap={{ lg: 2, md: 2, sm: 1, base: 1 }}
            alignItems={"center"}
            m={4}
          >
            <Text>Show:</Text>
            <Select textAlign={"center"}>
              <option>10 Rows</option>
            </Select>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default EventHis;
