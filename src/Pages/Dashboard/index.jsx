import Navbar from "../../Components/Navbar";
import HistoricList from "../../Components/HistoricList"
import "./style.css"

function Dashboard() {
  return (
<div display={"flex"}>
    <Navbar isTransparent={false}/>
    <h1>Dashboard</h1>  

    <HistoricList/>
   
    
</div>
  )
  
}

export default Dashboard;

//<MainButton onClick={()=>{alert("Botão chamado Dashboard" )}} scheme={"solid"}>Login</MainButton>
