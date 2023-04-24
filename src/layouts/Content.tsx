import React from "react";
import { Divider, Flex, useColorModeValue } from "@chakra-ui/react";

const Content = ({ children }) => {
  const bg = useColorModeValue("#fff5", "#0005");

  return (
    <Flex bg={bg} overflow="auto" p="1rem">
      {children}
    </Flex>
  );
};

export default Content;
