import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import BottomNavigate from "../../Components/BottomNavigate";
import Footer from "../../Components/Footer";
import BalanceTracker from "../../Components/BottonExpenses";
import { Box } from "@chakra-ui/react";

function Historic() {
  const pageStyles = {
    backgroundColor: "rgba(238, 237, 237, 0.5)",
    minHeight: "100vh",
  };
  const styleH2 = {
    fontWeight: "bold",
    color: "gray",
    fontSize: "24px",
    paddingLeft: "20px",
  };

  return (
    <>
      <Box style={pageStyles}>
        <Navbar isTransparent={false} isLandingPage={false} />
        <Box className="historic-container">
          <Box className="">
            <BalanceTracker />
          </Box>
          <Box className="historic-content">
            <h2 style={styleH2}>Histórico</h2>
            <HistoricList />
            <BottomNavigate />
          </Box>
        </Box>
      </Box>
      <Footer simple={true} />
    </>
  );
}

export default Historic;
