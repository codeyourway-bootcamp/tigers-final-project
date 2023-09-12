import MainButton from "../../Components/Button";
import Navbar from "../../Components/Navbar";
import "./style.css"
import {AiFillSetting} from "react-icons/Ai"

function Dashboard() {
  return (
<div display={"flex"}>
    <Navbar/> 
    <h1>Dashboard</h1>   
   
    
</div>
  )
  
}

export default Dashboard;

//<MainButton onClick={()=>{alert("Botão chamado Dashboard" )}} scheme={"solid"}>Login</MainButton>
