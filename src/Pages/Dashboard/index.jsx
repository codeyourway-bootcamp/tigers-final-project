import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import "./style.css";
import BottomNavigate from "../../Components/BottomNavigate";
import PageContainer from "../../Components/PageContainer";
import Footer from "../../Components/Footer";
import ExpenseBarChart from "../../Components/Charts/ExpensesBarChart";
import BottonExpenses from "../../Components/BottonExpenses";

function Dashboard() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />

      <PageContainer format={"column"}>
        <HistoricList />
        <ExpenseBarChart />
        <BottomNavigate />
      </PageContainer>
      <Footer simple={true} />
    </div>
  );
}

export default Dashboard;

//<MainButton onClick={()=>{alert("Botão chamado Dashboard" )}} scheme={"solid"}>Login</MainButton>
