import React from "react";
import { Box, Text } from "@chakra-ui/react";
import "./Home.css";
import List from "./components/List";
const Home = () => {
  return (
    <Box
      position="relative"
      sx={{ width: "100%", height: "100vh", border: "1px solid none" }}
    >
      <div>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 690"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,700 C 0,700 0,350 0,350 C 196.5333333333333,302 393.0666666666666,254 560,270 C 726.9333333333334,286 864.2666666666669,366 1006,390 C 1147.7333333333331,414 1293.8666666666666,382 1440,350 C 1440,350 1440,700 1440,700 Z"
            stroke="none"
            stroke-width="0"
            fill="#9900ef"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 350)"
            class='stoke'
          ></path>
        </svg>
      </div>
      <Box
        borderRadius="2rem"
        sx={{
          border: "1px solid none",
          background: "white",
          width: { sm: "70%", md: "55%", lg: "40%" },
          height: "500px",
          position: "absolute",
          top: "100px",
          left: "0",
          right: "0",
          margin: "auto",
          zIndex: "2",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "whitesmoke",
            borderTopRadius: "2rem",
            padding: "1rem",
          }}
        >
          <Text fontWeight="500" fontSize="2xl">
            Select an account
          </Text>
        </Box>
        <List />
      </Box>
    </Box>
  );
};

// #3182CE

export default Home;
