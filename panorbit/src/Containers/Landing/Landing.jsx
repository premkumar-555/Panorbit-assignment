import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Text, Avatar, Divider } from "@chakra-ui/react";

const Landing = () => {
  const { state } = useLocation();
  console.log("state got ", state);
  return (
    <Box
      display="flex"
      w="100%"
      py="1.5rem"
      px="2rem"
      border="1px solid none"
      h="100vh"
      gap="2rem"
    >
      <Box
        w="18%"
        h="100%"
        border="1px solid none"
        bg="blue"
        borderRadius="1rem"
      ></Box>
      <Box w="80%" h="100%" border="1px solid none">
        <Box
          w="100%"
          h="50px"
          borderBottom="1px solid lightgray"
          px="0"
          py="1.5rem"
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

        <Box
          display="flex"
          alignItems="center"
          gap="1rem"
          mt="1.25rem"
          maxW="100%"
          h="87.5%"
          border="1px solid none"
        >
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            w="35%"
            h="100%"
            border="1px solid none"
          >
            <Avatar
              alignSelf="center"
              boxSize="190px"
              objectFit="cover"
              name="Segun Adebayo"
              src={state?.profilepicture}
            />
            <Text my="0.25rem" fontWeight="500" fontSize="lg">
              {state?.name}
            </Text>
            <Box
              w="100%"
              mb="0.25rem"
              display="flex"
              flexDir="column"
              justifyContent="center"
              border="1px solid blue"
            >
              <Box display="flex" gap="0.25rem">
                <Text
                  textAlign="right"
                  w="33%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Username :
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  {state?.username}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  textAlign="right"
                  w="33%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  e-mail :
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  {state?.email}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  w="33%"
                  textAlign="right"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Phone :
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  {state?.phone}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  w="33%"
                  textAlign="right"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Website :
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  {state?.website}
                </Text>
              </Box>
            </Box>
            <Divider
              alignSelf="start"
              borderColor="grey"
              mt="1rem"
              mb="0.25rem"
              w="83%"
              mx="auto"
              orientation="horizontal"
            />
            <Text my="0.25rem" color="grey" fontWeight="500" fontSize="lg">
              Company
            </Text>
            <Box
              w="100%"
              mb="0.25rem"
              display="flex"
              flexDir="column"
              justifyContent="center"
              border="1px solid black"
            >
              <Box display="flex" gap="0.25rem">
                <Text
                  textAlign="right"
                  w="33%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Company :
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  {state?.company?.name}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  textAlign="right"
                  w="33%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  catchphrase :
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  {state?.company?.catchPhrase}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  w="33%"
                  textAlign="right"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  bs :
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  {state?.company?.bs}
                </Text>
              </Box>
            </Box>
          </Box>
          <Divider
            alignSelf="start"
            borderColor="grey"
            h="95%"
            orientation="vertical"
          />

          <Box w="70%" h="100%" border="1px solid none"></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
