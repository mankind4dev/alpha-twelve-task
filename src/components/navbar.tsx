import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import HomeIcon from '../icons/HomeIcon'
import Event from '../icons/Event'
import Speakers from '../icons/Speakers'
import Reports from '../icons/Reports'
import { Profile } from 'iconsax-react'

const Navbar = () => {
  return (
    <>
        <Box borderTop={"4px solid  var(--Primary, rgba(133, 118, 255, 1))"}>
          <Flex justifyContent={"center"} pt={4}>
            <HomeIcon />
          </Flex>
          <Text fontSize={12} color={" var(--Primary, rgba(133, 118, 255, 1))"}>
            Home
          </Text>
        </Box>
        <Box>
          <Flex justifyContent={"center"} pt={2}>
            <Event />
          </Flex>
          <Text fontSize={14}>Events</Text>
        </Box>
        <Box>
          <Flex justifyContent={"center"} pt={2}>
            <Speakers />
          </Flex>
          <Text fontSize={14}>Speakers</Text>
        </Box>
        <Box>
          <Flex justifyContent={"center"} pt={2}>
            <Reports  />
          </Flex>
          <Text fontSize={14}>Reports</Text>
        </Box>
        <Box>
          <Flex justifyContent={"center"} pt={2}>
            <Profile color="#aaa" />
          </Flex>
          <Text fontSize={14}>Profile</Text>
        </Box>
    </>
  )
}

export default Navbar