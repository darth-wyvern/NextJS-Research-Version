import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { House, Info, LockKey, SignIn } from "phosphor-react";
import Link from "next/link";
import React from "react";

function MenuItem({ to, childrent }) {
  const bg_item = useColorModeValue(
    { bg: "#0005", color: "black", transition: "0.1s" },
    { bg: "#fff5", color: "white" }
  );

  return (
    <Link style={{ width: "100%" }} href={to}>
      <Box p=".5rem 1rem" rounded=".5rem" _hover={bg_item}>
        {childrent}
      </Box>
    </Link>
  );
}

const Menu = () => {
  const DataLink = [
    {
      href: "/",
      info: (
        <Flex alignItems="center" gap="0.5rem">
          <House size={24} />
          <Box>Home</Box>
        </Flex>
      ),
    },
    {
      href: "/register",
      info: (
        <Flex alignItems="center" gap="0.5rem">
          <LockKey size={24} />
          <Box>Register</Box>
        </Flex>
      ),
    },
    {
      href: "/login",
      info: (
        <Flex alignItems="center" gap="0.5rem">
          <SignIn size={24} />
          <Box>Login</Box>
        </Flex>
      ),
    },
    {
      href: "/about",
      info: (
        <Flex alignItems="center" gap="0.5rem">
          <Info size={24} />
          <Box>About</Box>
        </Flex>
      ),
    }, {
      href: "/chart",
      info: (
        <Flex alignItems="center" gap="0.5rem">
          <Info size={24} />
          <Box>Chart</Box>
        </Flex>
      ),
    },
  ];

  return (
    <Flex w={{ base: "84px", md: "240px" }} p="1rem">
      <Box w="100%">
        {DataLink.map((item, index) => (
          <MenuItem key={index} to={item.href} childrent={item.info} />
        ))}
      </Box>
    </Flex>
  );
};

export default Menu;
