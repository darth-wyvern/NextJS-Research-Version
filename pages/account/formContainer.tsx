import { X } from "phosphor-react";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function FormContainer({ children, handleClick }) {
  const bg = useColorModeValue("#0003", "#000c");
  const bgCard = useColorModeValue("#fff", "#fff2");
  return (
    <Flex pos="fixed" inset={0} w="100%" outline="1px solid white" bg={bg}>
      <button style={{ padding: "1rem", position: "absolute", right: 0 }} onClick={handleClick}>
        <X />
      </button>
      <Flex m="2rem auto" p="2rem" bg={bgCard} rounded="1rem" flexDir="column" w="360px" h="max-content">
        {children}
      </Flex>
    </Flex>
  );
}
