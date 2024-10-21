import {
  Box,
  Flex,
  Drawer,
  DrawerBody, 
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure, 
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { ReactNode } from "react";
import SideBar from "./sideBar";
import { HambergerMenu, Profile } from "iconsax-react";
import Logo from "../components/logo";
import UserCompo from "../components/userCompo";
import NavCompo from "../components/navCompo";
import Collapse from "../icons/Collapse";
import Settings from "../icons/Settings";
import Messages from "../icons/Messages"; 
import Reports from "../icons/Reports";
import Speakers from "../icons/Speakers";
import HomeIcon from "../icons/HomeIcon";
import Event from "../icons/Event";
import Navbar from "../components/navbar"; 
import NotivicationIcon from "../icons/NotivicationIcon";

const Layout = ({
  children,
  isDarkMode,
  toggleDarkMode,
}: {
  children: ReactNode;
  toggleDarkMode: any;
  isDarkMode: any;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const [isOpens, setIsOpens] = useState<boolean>(true);
  return (
    <Box pos={"relative"}>
      <Flex
        display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}
        bg={"#fff"}
        width={"full"}
        zIndex={99}
        justifyContent={"space-between"}
        p={5}
        boxShadow={"md"}
      >
        <Logo />
        <Box ref={btnRef} onClick={onOpen}>
          <HambergerMenu />
        </Box>
      </Flex>
      <Flex mb={{ lg: 0, md: 0, sm: 100, base: 100 }} gap={4}>
        <Box
          display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          height={"100vh"}
          borderRight={"1.4px solid #ddd"}
        >
          <SideBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        </Box>
        <Box height={"100vh"} overflowY={"scroll"} width={"100%"}>
          {children}
        </Box>
      </Flex>
      <>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          size={"full"}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Logo />
            </DrawerHeader>

            <DrawerBody>
              <Box>
                <Box>
                  <NavCompo
                    onClick={() => {}}
                    icon={<HomeIcon />}
                    link="/"
                    name="Home"
                    isOpen={isOpens}
                    isNumbers={false}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {}}
                    icon={<Event />}
                    link="/"
                    name="Events"
                    isOpen={isOpens}
                    isNumbers={false}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {}}
                    icon={<Speakers />}
                    link="/"
                    name="Speakers"
                    isOpen={isOpen}
                    isNumbers={false}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {}}
                    icon={<Reports />}
                    link="/"
                    name="Reports"
                    isOpen={isOpens}
                    isNumbers={false}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {}}
                    icon={<NotivicationIcon />}
                    link="/"
                    name="Notifications"
                    isOpen={isOpen}
                    isNumbers={true}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {}}
                    icon={<Messages />}
                    link="/"
                    name="Messages"
                    isOpen={isOpens}
                    isNumbers={false}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {}}
                    icon={<Settings />}
                    link="/"
                    name="Settings"
                    isOpen={isOpens}
                    isNumbers={false}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {
                      setIsOpens(!isOpens);
                    }}
                    icon={<Collapse />}
                    link="/"
                    name="Collapse"
                    isOpen={isOpens}
                    isNumbers={false}
                    isActive={true}
                  />
                  <NavCompo
                    onClick={() => {}}
                    icon={<Switch />}
                    link="/"
                    name="Dark Mode"
                    isOpen={isOpens}
                    isNumbers={false}
                    isActive={true}
                  />
                  <UserCompo
                    name="Rudra Devi"
                    email=" rudra.devi@gmail.com"
                    onClick={() => {}}
                    isOpen={true}
                  />
                </Box>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        pb={3}
        display={{ lg: "none", md: "none", sm: "flex", base: "flex" }}
        px={5}
        zIndex={999}
        pos={"fixed"}
        bottom={0}
        width={"100%"}
        borderTop={"1.4px solid #ddd"}
        bg={"white"}
      >
        <Navbar />
      </Flex>
    </Box>
  );
};

export default Layout;
