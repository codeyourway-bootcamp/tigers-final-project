import { Box, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BiSolidBarChartSquare } from "react-icons/bi";

export default function Navbar({ isTransparent, isLandingPage }) {
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
    position: isLandingPage && location.pathname === "/" ? "absolute" : "fixed", // Ajuste na lógica
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
      position={navbarStyle.position}
      width="100%"
      top="0"
      zIndex="1"
    >
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box style={{ display: "flex", alignItems: "center " }}>
          <BiSolidBarChartSquare size={55} color="rgba(66, 153, 225, 1)" />
          <h1> MoneyMinder</h1>
        </Box>
      </Box>
      <Box>
        <Link to="/login">
          <Button variant="outline" colorScheme="blue" mr={4}>
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="solid" colorScheme="blue">
            Register
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
Navbar.propTypes = {
  isTransparent: PropTypes.bool.isRequired,
  isLandingPage: PropTypes.bool.isRequired,
};
