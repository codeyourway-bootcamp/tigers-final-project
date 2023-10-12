import Navbar from "../../Components/Navbar";
import "./style.css";
import BottomNavigate from "../../Components/BottomNavigate";
import Footer from "../../Components/Footer";
import BalanceTracker from "../../Components/BottonExpenses";
import { Box } from "@chakra-ui/react";
import ExpenseBarChart from "../../Components/Charts/ExpensesBarChart";
import { ChartPie } from "../../Components/ChartPie";

function Charts() {
  const pageStyles = {
    backgroundColor: "rgba(238, 237, 237, 0.5)",
    minHeight: "100vh",
  };

  const styleH2 = {
    fontWeight: "bold",
    color: "gray",
    fontSize: "24px",
    paddingLeft: "20px",
    marginTop: "20px",
    marginLeft: "20px",
  };

  return (
    <Box style={pageStyles}>
      <Navbar isTransparent={false} isLandingPage={false} />
      <Box className="container-charts">
        <BalanceTracker />
        <Box className="charts-content">
          <h2 style={styleH2}>Gráficos</h2>
          <Box className="box-charts">
            <Box className="box-expenser">
              <ExpenseBarChart />
            </Box>
            <Box className="box-chartpie">
              <ChartPie />
            </Box>
          </Box>
          <BottomNavigate />
        </Box>
      </Box>

      <Footer simple={true} />
    </Box>
  );
}

export default Charts;
