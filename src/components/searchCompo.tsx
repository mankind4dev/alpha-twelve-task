import { Flex, Input } from "@chakra-ui/react";
import { SearchNormal1 } from "iconsax-react";
import React from "react";

const SearchCompo = () => {
  return (
    <Flex
      width={"100%"}
      alignItems={"center"}
      border={"1px solid #ddd"}
      pl={3}
      borderRadius={5}
    >
      <SearchNormal1 size={15} color="#aaa" />
      <Input
        fontSize={12}
        placeholder="Search..."
        border={0}
        _focus={{ boxShadow: "none" }}
      />
    </Flex>
  );
};

export default SearchCompo;
