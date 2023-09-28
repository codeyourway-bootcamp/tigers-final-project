import Navbar from "../../Components/Navbar";
import BottonNavigate from "../../Components/BottomNavigate";
import PageContainer from "../../Components/PageContainer";
import ExpenseBarChart from "../../Components/Charts/ExpensesBarChart";

function Charts() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
      <ExpenseBarChart />
        <h1>Charts</h1>
        <BottonNavigate />
      </PageContainer>
    </div>
  );
}

export default Charts;
