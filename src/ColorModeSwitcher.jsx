import {
  IconButton,
  useColorMode,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const bgColor = useColorModeValue("purple.500", "yellow.400");
  const color = useColorModeValue("white", "black");

  return (
    <IconButton
      fontSize={"xl"}
      right={0}
      aria-label="Toggle Color Mode"
      icon={<Icon as={SwitchIcon} />}
      onClick={toggleColorMode}
      bg={bgColor}
      color={color}
      transition="background-color 1s, color 1s"
      _hover={{ bg: useColorModeValue("purple.600", "yellow.500") }}
    />
  );
};

export default ColorModeSwitcher;
