import Navbar from "../../Components/Navbar";
import BottonNavigate from "../../Components/BottomNavigate";
import ExpenseBarChart from "../../Components/Charts/ExpensesBarChart";
import BalanceTracker from "../../Components/BottonExpenses";
import "./style.css";
import { Box } from "@chakra-ui/react";

function Charts() {
  return (
    <Box className="container-charts">
      <Navbar isTransparent={false} isLandingPage={false} />
      <Box className="charts-content">
        <Box className="balance-tracker-box">
          <BalanceTracker />
        </Box>
        <Box className="chart-box">
          <h1>Charts</h1>
          <ExpenseBarChart />
        </Box>
        <BottonNavigate />
      </Box>
    </Box>
  );
}

export default Charts;
