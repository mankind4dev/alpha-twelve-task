import { Box, Switch } from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../components/logo";
import NavCompo from "../components/navCompo";
import HomeIcon from "../icons/HomeIcon";
import Event from "../icons/Event";
import Collapse from "../icons/Collapse";
import Speakers from "../icons/Speakers";
import Reports from "../icons/Reports"; 
import Messages from "../icons/Messages";
import Settings from "../icons/Settings";
import UserCompo from "../components/userCompo";
import NotivicationIcon from "../icons/NotivicationIcon";

const SideBar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Box width={isOpen ? "20vw" : "fit-content"}>
      <Box px={3}>
        <Box
          justifyContent={isOpen ? "left" : "center"}
          width={"100%"}
          display={{ lg: "flex", md: "flex", sm: "none", base: "none" }}
          pt={5}
          px={isOpen ? 5 : 0}
        >
          <Logo />
        </Box>
        <Box 
        >
          <NavCompo
            onClick={() => {}}
            icon={<HomeIcon />}
            link="/"
            name="Home"
            isOpen={isOpen}
            isNumbers={false}
            isActive={true}
          />
          <NavCompo
            onClick={() => {}}
            icon={<Event />}
            link="/"
            name="Events"
            isOpen={isOpen}
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
            isActive={false}
          />
          <NavCompo
            onClick={() => {}}
            icon={<Reports />}
            link="/"
            name="Reports"
            isOpen={isOpen}
            isNumbers={false}
            isActive={false}
          />
          <NavCompo
            onClick={() => {}}
            icon={<NotivicationIcon />}
            link="/"
            name="Notifications"
            isOpen={isOpen}
            isNumbers={true}
            isActive={false}
          />
          <NavCompo
            onClick={() => {}}
            icon={<Messages />}
            link="/"
            name="Messages"
            isOpen={isOpen}
            isNumbers={false}
            isActive={false}
          />
          <NavCompo
            onClick={() => {}}
            icon={<Settings />}
            link="/"
            name="Settings"
            isOpen={isOpen}
            isNumbers={false}
            isActive={false}
          />
          <NavCompo
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            icon={<Collapse />}
            link="/"
            name="Collapse"
            isOpen={isOpen}
            isNumbers={false}
            isActive={false}
          />

          <Box
            my={2}
            justifyContent={"left"}
            py={3}
            pl={4}
            display="flex"
            alignItems="center"
          >
            <Switch
              id="dark-mode"
              isChecked={isDarkMode}
              onChange={toggleDarkMode}
            />
            <Box ml={2} as="span" fontSize={{lg: 16, md: 16, sm: 12, base: 11}} whiteSpace={"nowrap"}>
              {isDarkMode === true ? "Dark Mode" : "Light Mode"}
            </Box>
          </Box>

          <UserCompo
            name="Rudra Devi"
            email="rudra.devi@gmail.com"
            onClick={() => {}}
            isOpen={isOpen}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SideBar;
