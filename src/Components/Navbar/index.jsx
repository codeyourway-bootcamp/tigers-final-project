import { Box } from "@chakra-ui/react";
import "./style.css";
import { Link } from "react-router-dom";
import MainButton from "../Button";

export default function Navbar() {
  return (
    <Box marinX={5} bg="white" w="100%"p={4} color="blue" display={"flex"} alignItems={"center"}>
      <img style={{width:'100px', marginLeft:"10px"}} src="/MoneyMinder.png" alt="Logo MoneyMinder" />
      <hr />
      <Box justifyContent={"flex-end"} w="100%" display={"flex"}textAlign={"right"}>
      <div style={{ marginRight: "20px" }}>
          <MainButton>Login</MainButton>
        </div>
        <div style={{ marginRight: "10px" }}>
          <MainButton>Cadastro</MainButton>
        </div>
      </Box>
    </Box>
  );
}
