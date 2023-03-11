import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Text, Avatar } from "@chakra-ui/react";

const Landing = () => {
  const { state } = useLocation();
  console.log("state got ", state);
  return (
    <Box
      display="flex"
      w="100%"
      py="1.5rem"
      px="2rem"
      border="1px solid black"
      h="100vh"
      gap="2rem"
    >
      <Box
        w="18%"
        h="100%"
        border="1px solid blue"
        bg="blue"
        borderRadius="1rem"
      ></Box>
      <Box w="80%" h="100%" border="1px solid black">
        <Box
          w="100%"
          h="50px"
          borderBottom="1px solid lightgray"
          px="0"
          py="2rem"
          pb="2.5rem"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text fontWeight="500" fontSize="lg">
            Profile
          </Text>
          <Box py="1rem" display="flex" h="100%" alignItems="center" gap="1rem">
            <Avatar size="sm" name="Kent Dodds" src={state?.profilepicture} />
            <Text fontWeight="500" fontSize="lg">
              {state.name}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
