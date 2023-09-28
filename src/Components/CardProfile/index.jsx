import React, { useEffect, useState } from "react";

//import './style.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  flexbox,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import { user_registration } from "../../FakeDatabase";

// import { Container } from './styles';

function CardProfile() {
  const [userData, setUserData] = useState({
    user_first_name: "",
    user_email: "",
  });
  const [user, setUser] = useState();
  useEffect(() => {
    const loggedUser = localStorage.getItem("app@user");
    if (loggedUser) {
      console.log(loggedUser, JSON.parse(loggedUser));
      setUser(JSON.parse(loggedUser));
    }
  },[]);
  useEffect(() => {
    user_registration.then((data) => {
      const filteredData = data.data.filter((item) => {
        return item.user_email === user;
      });
      console.log(filteredData);
      setUserData(filteredData[0]);
    });
  },[user]);
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Account</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Nome
            </Heading>
            <Text pt="2" fontSize="sm">
              {userData.user_first_name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {userData.user_email}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardProfile;
