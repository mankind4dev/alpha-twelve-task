import { Flex } from "@chakra-ui/react";
import React from "react";
import EventsCompo from "../../components/eventsCompo";

interface Event {
  name: string;
  number: string;
  status: boolean;
  statsText: string;
}
const EventDiv = () => {
  const events: Event[] = [
    {
      name: "Total Events",
      number: "100,000",
      statsText: "+5.0%",
      status: true,
    },
    {
      name: "Active Speakers",
      number: "25",
      statsText: "-5.0%",
      status: false,
    },
    {
      name: "Total Registrations",
      number: "300",
      statsText: "+5.0%",
      status: true,
    },
    {
      name: "Total Revenue",
      number: "$500,000",
      statsText: "+5.0%",
      status: true,
    },
  ];
  return (
    <Flex flexWrap={{lg : "nowrap", md : "nowrap", sm : "wrap", base :"wrap"}} gap={5} mt={3} mr={5}>
      {events.map((event: Event, key) => (
        <EventsCompo
          key={key}
          name={event.name}
          number={event.number}
          statsText={event.statsText}
          status={event.status}
        />
      ))}
    </Flex>
  );
};

export default EventDiv;
