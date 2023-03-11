import React from "react";
import { Box, Image } from "@chakra-ui/react";
const Error = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Image
        maxWidth="100%"
        maxHeight="90%"
        objectFit="cover"
        borderRadius="lg"
        src="https://miro.medium.com/v2/resize:fit:720/0*wUyJODNKkK-05aTA"
        alt="Dan Abramov"
      />
    </Box>
  );
};

export default Error;
