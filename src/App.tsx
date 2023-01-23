import { Box, ChakraProvider, Flex, Text, theme } from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box background="black">
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        background="black"
      >
        <Text textAlign="center" fontSize="sm" color="white">
          Rohan Shakya
        </Text>
      </Flex>
    </Box>
  </ChakraProvider>
);
