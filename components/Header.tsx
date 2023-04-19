import React from "react";
import { Box, Button, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "phosphor-react";

const Header = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="center" p="1rem" justifyContent="right">
      <Button onClick={toggleColorMode} title="toggle light-dark" type="button">
        {useColorModeValue(<Sun size={18} weight="bold" />, <Moon size={18} weight="bold" />)}
      </Button>
      <Box></Box>
    </Flex>
  );
};

export default Header;
