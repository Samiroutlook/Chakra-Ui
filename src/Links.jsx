import React from "react";
import { Flex, Link } from "@chakra-ui/react";

function Links() {
  return (
    <Flex w={500} justifyContent="space-between">
      <Link href="#" fontSize={"xl"} _hover={{ color: "#38bdf8" }}>
        Home
      </Link>
      <Link href="#" fontSize={"xl"} _hover={{ color: "#38bdf8" }}>
        About
      </Link>
      <Link href="#" fontSize={"xl"} _hover={{ color: "#38bdf8" }}>
        Members
      </Link>
      <Link href="#" fontSize={"xl"} _hover={{ color: "#38bdf8" }}>
        Contract
      </Link>
    </Flex>
  );
}

export default Links;
