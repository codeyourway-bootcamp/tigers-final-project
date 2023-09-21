import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import "./style.css";
import BottomNavigate from "../../Components/BottonNavigate";
import PageContainer from "../../Components/PageContainer";

function Dashboard() {
  return (
    <>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <HistoricList />
        <BottomNavigate />
      </PageContainer>
    </>
  );
}

export default Dashboard;

//<MainButton onClick={()=>{alert("Botão chamado Dashboard" )}} scheme={"solid"}>Login</MainButton>
