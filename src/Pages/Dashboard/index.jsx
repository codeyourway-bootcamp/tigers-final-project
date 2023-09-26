import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import "./style.css";
import BottomNavigate from "../../Components/BottomNavigate";
import PageContainer from "../../Components/PageContainer";
import Footer from "../../Components/Footer";

function Dashboard() {
  return (
    <div>
      <Navbar isTransparent={false} isLandingPage={false} />
      <PageContainer>
        <HistoricList />
        <BottomNavigate />
      </PageContainer>
      <Footer />
    </div>
  );
}

export default Dashboard;

//<MainButton onClick={()=>{alert("Botão chamado Dashboard" )}} scheme={"solid"}>Login</MainButton>
