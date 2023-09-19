import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <Box
      bg="white"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.05)"
      py={3}
      px={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <img
          src="/MoneyMinder.png"
          alt="Logo MoneyMinder"
          style={{ width: "100px" }}
        />
      </Box>
      <Box>
        <Link to="/login">
          <Button variant="outline" colorScheme="blue" mr={4}>
            Login
          </Button>
        </Link>
        <Link to="/cadastro">
          <Button variant="solid" colorScheme="blue">
            Cadastro
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
