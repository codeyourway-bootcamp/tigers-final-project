import { Box } from "@chakra-ui/react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box bg="blue" w="100%"p={4} color="white" display={"flex"}>
      MoneyMinder
      <Box justifyContent={"flex-end"} w="100%" display={"flex"}textAlign={"right"}>
        <Box p={2}>
          <Link to={"/dashboard"}><BiHomeAlt/></Link>
        </Box>
        <Box p={2}>
          <Link to={"/historic"}>Historic</Link>
        </Box>
      </Box>
    </Box>
  );
}
