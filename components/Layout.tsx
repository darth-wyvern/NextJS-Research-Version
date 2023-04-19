"use client";

import { Divider, Flex } from "@chakra-ui/react";
import Content from "./Content";
import Menu from "./Menu";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <Flex pos="fixed" inset={0}>
      <Menu />
      <Divider orientation="vertical" />
      <Flex flexDir="column" w="100%">
        <Header />
        <Divider />
        <Content>{children}</Content>
      </Flex>
    </Flex>
  );
}
