import {
  Avatar,
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  CloseButton,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import React from "react"; 

interface EventNameProps {
  eventName: string;
  date: string;
  description: string;
  onClose: () => void;  
}

const EventName: React.FC<EventNameProps> = ({
  eventName,
  date,
  description,
  onClose,
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Box 
        left={10}
        p={5}
        borderRadius={2} 
        width={400}
        top={10} 
        bg={
          colorMode === "dark"
            ? "rgb(165, 172, 180)"
            : " rgba(241, 245, 249, 1)"
        }
        justifyContent={"space-between"}
      >
        <Flex justifyContent={"space-between"} alignItems="center">
          <Heading size="18" fontWeight={600} color={"var(rgba(252, 247, 255, 1))"}>{eventName}</Heading>
          <IconButton
            icon={<CloseButton />}
            aria-label="Menu" 
            onClick={onClose}
          />
        </Flex>

        <Text fontWeight="400" fontSize={14} color={"var(rgba(252, 247, 255, 1))"}>{date}</Text>
        <Text mt={2}>{description}</Text>

        <Box mt={8} mb={5}> 
          <Avatar
            zIndex={999}
            src="../public/images/avatars/avatar1.png"
          />
          <Avatar
            zIndex={99}
            transform={"translateX(-15px)"}
             src="../public/images/avatars/avatar2.png"
          />
          <Avatar
            zIndex={9}
            transform={"translateX(-30px)"}
             src="../public/images/avatars/avatar3.png"
          />
        </Box>
        <Box   mb={5} alignItems="center">
          <Text fontSize={14} color={"var(rgba(252, 247, 255, 1))"} fontWeight={400}>3 Guest Speakers: Speaker name A,</Text>
          <Text fontSize={14} color={"var(rgba(252, 247, 255, 1))"} fontWeight={400}>Speaker name B, Speaker name C.</Text>
          <Text fontSize={14} color={"var(rgba(252, 247, 255, 1))"} fontWeight={400}>300 Attendance</Text>
        </Box>
        <Box bg={"var(rgba(173, 169, 187, 1))"} p={4}>
          <Box mb={4} mt={3}>
            <Button
              width={"100%"}
              fontSize={14}
              fontWeight={400}
              border={"1px solid rgba(226, 232, 240, 1)"}
              bg={"rgba(255, 255, 255, 1)"}
              color={"rgba(51, 65, 85, 1)"}
              borderRadius={2}
              _hover={"none"}
            >
              Edit
            </Button>
          </Box>
          <Box mb={3}>
            <Button
              width={"100%"}
              fontSize={14}
              fontWeight={400} 
              bg={"rgba(244, 63, 94, 1)"}
              color={"rgba(51, 65, 85, 1)"}
              borderRadius={2}
               _hover={"none"}
            >
              Delete
            </Button>
          </Box>
          <Box>
            <Button
              width={"100%"}
              fontSize={14}
              fontWeight={400} 
              bg={"var(--Primary, rgba(133, 118, 255, 1))"}
              color={"rgba(51, 65, 85, 1)"}
              borderRadius={2}
               _hover={"none"}
            >
              Mark as completed
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EventName;
