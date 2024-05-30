// src/App.jsx
import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";
import { useColorModeValue } from "@chakra-ui/react";
import Links from "./Links";

function App() {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("black", "white");

  return (
    <>
      <Flex
        w={1920}
        h={"55"}
        px={10}
        mx={"auto"}
        transition="background-color 0.4s, color 0.4s"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text fontSize={"3xl"} color={"green.300"} fontWeight={600}>
          Samir
        </Text>
        <Links />
        <ColorModeSwitcher />
      </Flex>
    </>
  );
}

export default App;
