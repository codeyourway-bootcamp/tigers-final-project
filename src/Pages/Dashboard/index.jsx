import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import "./style.css";
import BottomNavigate from "../../Components/BottomNavigate";
import Footer from "../../Components/Footer";
import ExpenseBarChart from "../../Components/Charts/ExpensesBarChart";
import BalanceTracker from "../../Components/BottonExpenses";
import { Box } from "@chakra-ui/react";

function Dashboard() {
  const pageStyles = {
    backgroundColor: "rgba(238, 237, 237, 0.5)", // Define o background com a cor desejada
    minHeight: "100vh", // Garante que a cor de fundo cubra toda a altura da tela
  };

  const styleH2 = {
    fontWeight: "bold",
    color: "gray",
    fontSize: "24px",
    paddingLeft: "20px",
  };

  return (
    <Box style={pageStyles}>
      <Navbar isTransparent={false} isLandingPage={false} />
      <Box className="dashboard-container">
        <BalanceTracker />
        <Box className="dashboard-content">
          <Box className="box-historic">
            <h2 style={styleH2}>Histórico</h2>
            <HistoricList />
          </Box>
          <Box className="box-chart">
            <h2 style={styleH2}>Gráficos</h2>
            <ExpenseBarChart />
          </Box>
          <BottomNavigate />
        </Box>
      </Box>

      <Footer simple={true} />
    </Box>
  );
}

export default Dashboard;
