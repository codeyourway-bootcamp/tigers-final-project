import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList";
import "./style.css";
import BottomNavigate from "../../Components/BottonNavigate";

function Dashboard() {
  return (
    <div display={"flex"}>
      <Navbar isTransparent={false} isLandingPage={false} />
      <h1>Dashboard</h1>
      <HistoricList />
      <BottomNavigate />
    </div>
  );
}

export default Dashboard;

//<MainButton onClick={()=>{alert("Botão chamado Dashboard" )}} scheme={"solid"}>Login</MainButton>
