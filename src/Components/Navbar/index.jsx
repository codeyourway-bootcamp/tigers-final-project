import { Box, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { BiSolidBarChartSquare } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    position: isLandingPage && location.pathname === "/" ? "absolute" : "fixed",
  };
  const navigate = useNavigate();
  const [showAuth, setShowAuth] = useState(true);
  useEffect(() => {
    const user = localStorage.getItem("app@user");
    if (user) {
      setShowAuth(false);
      // navigate("/dashboard");
    }
  }, []);
  return (
    <Box
      bg={navbarStyle.bg}
      boxShadow={navbarStyle.boxShadow}
      py={3}
      px={6}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position={navbarStyle.position}
      width="100%"
      top="0"
      zIndex="1"
      margin={"0"}
    >
      <Box style={{ display: "flex", alignItems: "center" }}>
        <Box style={{ display: "flex", alignItems: "center " }}>
          <BiSolidBarChartSquare size={55} color="rgba(66, 153, 225, 1)" />
          <h1 style={{ color: "black" }}> MoneyMinder</h1>
        </Box>
      </Box>
      {showAuth ? (
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
      ) : (
        <Box>
          <Button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
            variant="solid"
            colorScheme="blue"
          >
            Sair
          </Button>
        </Box>
      )}
    </Box>
  );
}
Navbar.propTypes = {
  isTransparent: PropTypes.bool.isRequired,
  isLandingPage: PropTypes.bool.isRequired,
};
