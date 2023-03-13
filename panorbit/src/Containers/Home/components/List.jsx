import React, { useEffect } from "react";
import "../Home.css";
import { Box, Text, Avatar } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser, signOut } from "../../../Redux/Users/actions.js";

const List = () => {
  const { usersList, userLogged } = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userLogged) {
      navigate(`/profile/${userLogged?.id}`);
    }
  }, [userLogged]);
  return (
    <Box
      sx={{
        width: "98%",
        padding: "0 2rem",
        height: "375px",
        border: "1px solid none",
        display: "flex",
        marginTop: "0.25rem",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        overflowY: "scroll",
      }}
      className="scrollStyle"
    >
      {usersList.length &&
        usersList.map((ele, ind) => (
          <Box
            width="100%"
            borderBottom="1px solid lightgray"
            mb="0.25rem"
            p="0.25rem"
            pb="0.5rem"
            display="flex"
            gap="1rem"
            alignItems="center"
            key={ele.email}
          >
            <Avatar
              onClick={() => dispatch(selectUser(ele))}
              className="point"
              size="md"
              name={ele?.name}
              src={ele?.profilepicture}
            />
            <Text
              onClick={() => dispatch(selectUser(ele))}
              className="point"
              fontSize="lg"
            >
              {ele?.name}
            </Text>
          </Box>
        ))}
    </Box>
  );
};

export default List;
