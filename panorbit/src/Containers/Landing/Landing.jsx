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
        display="flex"
        alignItems="center"
        w="18%"
        h="100%"
        bg="blue"
        borderRadius="1rem"
        pl="2rem"
      >
        <Box
          display="flex"
          flexDir="column"
          gap="1rem"
          border="1px solid none"
          w="100%"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            maxW="100%"
          >
            <Text
              className="point"
              display="inline-block"
              w="70%"
              borderBottom="1px solid #BDBDBD"
              pb="0.5rem"
              color="#E0E0E0"
              fontSize="lg"
            >
              Profile
            </Text>
            <Box bg="white" w="35px" h="35px" borderRadius="50%"></Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            maxW="100%"
          >
            <Text
              w="70%"
              borderBottom="1px solid #BDBDBD"
              pb="0.5rem"
              display="inline-block"
              className="point"
              color="#E0E0E0"
              fontSize="lg"
            >
              Posts
            </Text>
            <Box bg="white" w="35px" h="35px" borderRadius="50%"></Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            maxW="100%"
          >
            <Text
              w="70%"
              borderBottom="1px solid #BDBDBD"
              borderBottom="1px solid #BDBDBD"
              pb="0.5rem"
              display="inline-block"
              className="point"
              color="#E0E0E0"
              fontSize="lg"
            >
              Gallery
            </Text>
            <Box bg="white" w="35px" h="35px" borderRadius="50%"></Box>
          </Box>
          <Box
            position="relative"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            w="100%"
            h="50px"
            border="1px solid white"
            sx={{ borderBottomRightRadius: "5%" }}
          >
            <Text
              w="70%"
              display="inline-block"
              className="point"
              color="#E0E0E0"
              fontSize="lg"
            >
              ToDo
            </Text>{" "}
            <Box
              // sx={{ position: "absolute", right: "0px" }}
              bg="white"
              w="35px"
              h="35px"
              sx={{
                borderTopRightRadius: "20%",
                borderBottomRightRadius: "20%",
                borderBottomLeftRadius: "50%",
                borderTopLeftRadius: "50%",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
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
                  Username &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.username}
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
                  e-mail &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.email}
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
                  Phone &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.phone}
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
                  Website &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.website}
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
                  w="35%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Company &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.company?.name}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  textAlign="right"
                  w="35%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  catchphrase &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.company?.catchPhrase}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  w="35%"
                  textAlign="right"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  bs &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.company?.bs}
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

          <Box w="70%" h="100%" border="1px solid black" pl="2rem">
            <Text my="0.25rem" color="grey" fontWeight="500" fontSize="lg">
              Address :
            </Text>
            <Box
              mb="0.5rem"
              display="flex"
              flexDir="column"
              justifyContent="center"
              border="1px solid blue"
            >
              <Box textAlign="left" display="flex" gap="0.25rem">
                <Text
                  textAlign="right"
                  w="16.5%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Street &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.address?.street}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  textAlign="right"
                  w="16.5%"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Suite &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.address?.suite}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  w="16.5%"
                  textAlign="right"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  City &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.address?.city}
                </Text>
              </Box>
              <Box display="flex" gap="0.5rem">
                <Text
                  w="16.5%"
                  textAlign="right"
                  my="0.25rem"
                  color="grey"
                  fontWeight="500"
                  fontSize="lg"
                >
                  Zipcode &nbsp;:
                </Text>
                <Text w="60%" my="0.25rem" fontWeight="500" fontSize="lg">
                  &nbsp;{state?.address?.zipcode}
                </Text>
              </Box>
            </Box>
            <Box mb="0.5rem" pl="2rem" maxW="100%" h="325px">
              <iframe
                style={{ borderRadius: "1rem" }}
                width="100%"
                height="100%"
                id="gmap_canvas"
                src={`https://maps.google.com/maps?q=${state?.address?.geo?.lat},${state?.address?.geo?.lng}&z=15&output=embed`}
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              ></iframe>
            </Box>
            <Box maxW="100%" display="flex" justifyContent="end" gap="2rem">
              <Box display="flex" alignItems="center">
                <Text my="0.25rem" color="grey" fontWeight="500" fontSize="xs">
                  Lat:
                </Text>
                <Text my="0.25rem" color="black" fontWeight="500" fontSize="sm">
                  &nbsp;{state?.address?.geo?.lat}
                </Text>
              </Box>
              <Box display="flex" alignItems="center">
                <Text my="0.25rem" color="grey" fontWeight="500" fontSize="xs">
                  Long:
                </Text>
                <Text my="0.25rem" color="black" fontWeight="500" fontSize="sm">
                  &nbsp;{state?.address?.geo?.lng}
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
