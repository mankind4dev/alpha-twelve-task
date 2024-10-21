import {
  Flex,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Box,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react"; 
import EventName from "./eventName";

interface DataType {
  eventName: string;
  date: string;
  speaker: string;
  status: string;
}

const TableCompo = () => {
  const [selectedEvent, setSelectedEvent] = useState<DataType | null>(null);

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

  const handleRowClick = (event: DataType) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <Table variant="">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th fontSize={12} fontWeight={600}>Event Name</Th>
            <Th fontSize={12} fontWeight={600}>Date</Th>
            <Th fontSize={12} fontWeight={600}>Speaker</Th>
            <Th fontSize={12} fontWeight={600}>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((event: DataType, key) => (
            <Tr key={key} position={"relative"}>
              <Td
                onClick={() => handleRowClick(event)}
                cursor={"pointer"}
                fontSize={14}
                fontWeight={400}
              >
                {event.eventName}
              </Td>
              <Td fontSize={14} fontWeight={400}>{event.date}</Td>
              <Td>{event.speaker}</Td>
              <Td>
                <Flex
                  bg={event.status === "Completed" ? "green.100" : "blue.100"}
                  p={2}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  borderRadius={100}
                  width={"100%"}   

                >
                  <Text width={3} height={3} bg={event.status === "Completed" ? "green.300" : "blue.300"} borderRadius={100} alignItems={"center"} ml={2}></Text>
                  <Text fontSize={12} fontWeight={400} alignItems={"center"} mr={2} color={event.status === "Completed" ? "green.300" : "blue.300"}>{event.status}</Text>
                </Flex>
              </Td> 
              {selectedEvent?.eventName === event.eventName && (
                <Box pos="absolute"  top={0} left={0} zIndex={10}  >
                  <EventName
                    eventName={event.eventName}
                    date={event.date}
                    description={`Details about ${event.eventName}`}  
                    onClose={() => setSelectedEvent(null)}
                  />
                </Box>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default TableCompo;
