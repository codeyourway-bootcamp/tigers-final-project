import { Box, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import "./style.css"
export default function Navbar({ isTransparent }) {
  const location = useLocation();

  const navbarStyle = {
    bg:
      isTransparent && location.pathname === "/"
        ? "rgba(255, 255, 255, 0.8)"
        : "white",
    boxShadow:
      isTransparent && location.pathname === "/"
        ? "0 2px 4px rgba(0, 0, 0, 0.2)"
        : "0 2px 4px rgba(0, 0, 0, 0.05)",
  };

  return (
    <Box
      bg={navbarStyle.bg} // Aplicando a propriedade de fundo
      boxShadow={navbarStyle.boxShadow} // Aplicando a propriedade de sombra
      py={3}
      px={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="absolute"
      width="100%"
      top="0"
      zIndex="1"
    >
      <Box style={{display:"flex", alignItems:"center", }}>
        <img
          src="/MoneyMinder.png"
          alt="Logo MoneyMinder"
          style={{ width: "100px" }}
        />
        <h1>MoneyMinder</h1>
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
Navbar.propTypes = {
  isTransparent: PropTypes.bool.isRequired,
};
